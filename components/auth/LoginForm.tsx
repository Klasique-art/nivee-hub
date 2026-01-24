"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";

import {
    AppForm,
    AppFormField,
    AppErrorMessage,
    SubmitButton,
    FormLoader,
} from "@/components";
import { LoginValidationSchema, LoginFormValues } from "@/data/validationConstants";

const LoginForm = () => {
    const router = useRouter();
    const [loginError, setLoginError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (values: LoginFormValues) => {
        setLoading(true);
        setLoginError("");

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-Type": "application/json" },
            });

            const data = await res.json();

            if (!res.ok) {
                console.error("Login error:", data);
                setLoginError(data?.error || "Login failed");
                setLoading(false);
                return;
            }

            // Success - redirect to homepage
            // console.log("Login successful!", data.user);
            router.push("/");

        } catch (error) {
            console.error("Login failed:", error);
            setLoginError("Network error. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-600 mb-4 shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="big-text-2 font-bold text-white mb-2">
                        Welcome Back to Niveel Hub
                    </h1>
                    <p className="normal-text text-slate-400">
                        Sign in to continue your learning journey
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700">
                    <AppErrorMessage visible={!!loginError} error={loginError} />

                    <AppForm
                        initialValues={{ email: "", password: "" }}
                        onSubmit={handleLogin}
                        validationSchema={LoginValidationSchema}
                    >
                        <FormLoader visible={loading} message="Signing you in..." />

                        <div className="space-y-5">
                            <AppFormField
                                name="email"
                                placeholder="Enter your email"
                                label="Email Address"
                                type="email"
                                required
                            />

                            <AppFormField
                                name="password"
                                placeholder="Enter your password"
                                label="Password"
                                type={showPassword ? "text" : "password"}
                                icon={showPassword ? "eye-slash" : "eye"}
                                iconClick={() => setShowPassword((prev) => !prev)}
                                iconAria={showPassword ? "Hide Password" : "Show Password"}
                                required
                            />

                            <div className="flex items-center justify-between">
                                <Link
                                    href="/forgot-password"
                                    className="small-text text-emerald-400 hover:text-emerald-300 font-semibold transition-colors hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <SubmitButton title="Sign In" />

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-600" />
                                </div>
                                <div className="relative flex justify-center normal-text-2">
                                    <span className="bg-slate-800 px-4 text-slate-400">
                                        New to Niveel Hub?
                                    </span>
                                </div>
                            </div>

                            {/* Signup Link */}
                            <Link
                                href="/signup"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-emerald-500 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl font-semibold normal-text transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                                Create Account
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </AppForm>
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <p className="small-text text-slate-400">
                        By signing in, you agree to our{" "}
                        <Link 
                            href="/terms" 
                            className="text-emerald-400 hover:underline font-medium"
                        >
                            Terms of Service
                        </Link>
                        {" "}and{" "}
                        <Link 
                            href="/privacy" 
                            className="text-emerald-400 hover:underline font-medium"
                        >
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;