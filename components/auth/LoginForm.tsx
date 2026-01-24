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
import { currentUser } from "@/data/dummy.general";

const LoginForm = () => {
    const router = useRouter();
    const [loginError, setLoginError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleLogin = async (values: LoginFormValues) => {
        setLoading(true);
        setLoginError("");

        // Simulate API call delay
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Simulate login validation against mock user
        const isEmailMatch = values.email === currentUser.email;
        const isPasswordCorrect = values.password === "Password123"; // Mock password

        if (isEmailMatch && isPasswordCorrect) {
            // Success - Simulate storing auth token
            console.log("Login successful!", currentUser);
            
            // In production, backend would set HttpOnly cookies here
            // For now, just redirect to dashboard
            router.push("/dashboard");
        } else {
            // Failed
            setLoginError("Invalid email or password. Please try again.");
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-2 py-10 bg-linear-to-br from-emerald-800 to-emerald-900 rounded-2xl">
            <div className="w-full max-w-md">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-600 mb-4 shadow-lg">
                        <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="big-text-2 font-bold text-slate-900 dark:text-white mb-2">
                        Welcome Back to Niveel Hub
                    </h1>
                    <p className="normal-text text-slate-600 dark:text-slate-400">
                        Sign in to continue your learning journey
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-200 dark:border-slate-700">
                    {/* Test Credentials Info */}
                    <div className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-200 dark:border-emerald-800">
                        <p className="small-text text-emerald-800 dark:text-emerald-200 font-semibold mb-2">
                            🧪 Test Credentials:
                        </p>
                        <div className="space-y-1">
                            <p className="small-text text-emerald-700 dark:text-emerald-300">
                                <strong>Email:</strong> {currentUser.email}
                            </p>
                            <p className="small-text text-emerald-700 dark:text-emerald-300">
                                <strong>Password:</strong> Password123
                            </p>
                        </div>
                    </div>

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
                                    className="small-text text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold transition-colors hover:underline"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <SubmitButton title="Sign In" />

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-300 dark:border-slate-600" />
                                </div>
                                <div className="relative flex justify-center normal-text-2">
                                    <span className="bg-white dark:bg-slate-800 px-4 text-slate-500 dark:text-slate-400">
                                        New to Niveel Hub?
                                    </span>
                                </div>
                            </div>

                            {/* Signup Link */}
                            <Link
                                href="/signup"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-emerald-600 dark:border-emerald-500 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-emerald-600 dark:text-emerald-400 hover:text-white dark:hover:text-white rounded-xl font-semibold normal-text transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                                Create Account
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </AppForm>
                </div>

                {/* Footer Links */}
                <div className="mt-6 text-center">
                    <p className="small-text text-slate-600 dark:text-slate-400">
                        By signing in, you agree to our{" "}
                        <Link 
                            href="/terms" 
                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                        >
                            Terms of Service
                        </Link>
                        {" "}and{" "}
                        <Link 
                            href="/privacy" 
                            className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
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