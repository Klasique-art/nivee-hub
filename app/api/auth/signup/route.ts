import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { BASE_URL } from "@/data/constants";

/**
 * Decode JWT to get expiration time
 */
function getTokenExpiration(token: string): number | null {
    try {
        const parts = token.split('.');
        if (parts.length !== 3) return null;
        
        const payload = JSON.parse(
            Buffer.from(parts[1], 'base64').toString('utf-8')
        );
        
        if (payload.exp) {
            const now = Math.floor(Date.now() / 1000);
            return payload.exp - now;
        }
        
        return null;
    } catch (error) {
        console.error('Failed to decode token:', error);
        return null;
    }
}

export async function POST(req: Request) {
    
    try {
        const formData = await req.json();
        console.log('Received signup data:', formData);

        // Step 1: Register the user
        const registerUrl = `${BASE_URL}/users/register/`;

        const registerResponse = await fetch(registerUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        console.log('Registration response status:', registerResponse.status);

        if (!registerResponse.ok) {
            const errorData = await registerResponse.json();
            console.error('Registration failed:', errorData);
            return NextResponse.json(
                { error: errorData?.detail || "Registration failed", details: errorData },
                { status: registerResponse.status }
            );
        }

        const userData = await registerResponse.json();
        console.log('✅ User registered successfully:', userData.email);

        // Step 2: Auto-login - Get JWT tokens
        console.log('🔐 Auto-logging in user...');
        
        const loginResponse = await fetch(`${BASE_URL}/auth/token/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        });

        if (!loginResponse.ok) {
            console.error('Auto-login failed, but user was created');
            // User created but couldn't auto-login
            return NextResponse.json({
                success: true,
                user: userData,
                message: 'Account created. Please login.',
                autoLoginFailed: true,
            });
        }

        const tokenData = await loginResponse.json();

        // Step 3: Set auth cookies
        const accessTokenExpiry = getTokenExpiration(tokenData.access);
        const refreshTokenExpiry = getTokenExpiration(tokenData.refresh);

        // console.log('Access token expires in:', accessTokenExpiry, 'seconds');
        // console.log('Refresh token expires in:', refreshTokenExpiry, 'seconds');

        const cookieStore = await cookies();

        cookieStore.set('access_token', tokenData.access, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: accessTokenExpiry || 60 * 60, // 1 hour default
            path: '/',
        });

        cookieStore.set('refresh_token', tokenData.refresh, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: refreshTokenExpiry || 60 * 60 * 24 * 7, // 7 days default
            path: '/',
        });

        return NextResponse.json({
            success: true,
            user: userData,
            message: 'Account created and logged in successfully',
        });

    } catch (error) {
        console.error('=== SIGNUP REQUEST ERROR ===');
        console.error('Error:', error);
        
        return NextResponse.json(
            { 
                error: "Something went wrong. Please try again later.",
                details: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }
        );
    }
}