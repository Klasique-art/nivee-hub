import { cookies } from "next/headers";
import { BASE_URL } from "@/data/constants";
import { CurrentUser } from "@/types/user.types";
import { fetchWithAuthRetry } from "./serverAuth";

/**
 * Check if user is authenticated (server-side)
 */
export async function isAuthenticated(): Promise<boolean> {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refresh_token')?.value;
    
    // If no refresh token, definitely not authenticated
    if (!refreshToken) {
        return false;
    }
    
    // Check if we can get user profile (will auto-refresh if needed)
    try {
        const response = await fetchWithAuthRetry(`${BASE_URL}/users/me/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });
        
        return response.ok;
    } catch (error) {
        return false;
    }
}

/**
 * Get current authenticated user (server-side)
 */
export async function getCurrentUser(): Promise<CurrentUser | null> {
    try {
        const response = await fetchWithAuthRetry(`${BASE_URL}/users/me/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('❌ Failed to fetch user:', response.status);
            console.error('❌ Error body:', errorText);
            return null;
        }

        const user = await response.json();
        return user as CurrentUser;

    } catch (error) {
        console.error('💥 Error fetching current user:', error);
        return null;
    }
}

/**
 * Get access token from cookies
 */
export async function getAccessToken(): Promise<string | null> {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get('access_token')?.value;
    return accessToken || null;
}

/**
 * Get refresh token from cookies
 */
export async function getRefreshToken(): Promise<string | null> {
    const cookieStore = await cookies();
    const refreshToken = cookieStore.get('refresh_token')?.value;
    return refreshToken || null;
}

/**
 * Check authentication status (client-side)
 * Use this in client components
 */
export async function isAuthenticatedClient(): Promise<boolean> {
    try {
        const response = await fetch('/api/auth/check', {
            credentials: 'include',
        });

        return response.ok;
    } catch (error) {
        console.error('Auth check failed:', error);
        return false;
    }
}

/**
 * Clear all authentication cookies
 */
export async function clearAuthCookies(): Promise<void> {
    const cookieStore = await cookies();
    cookieStore.delete('access_token');
    cookieStore.delete('refresh_token');
}