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
import { SignupValidationSchema, SignupFormValues } from "@/data/validationConstants";

const SignupForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const handleSignup = async (values: SignupFormValues) => {
        setLoading(true);
        setError("");

        try {
            // Prepare payload for your API route
            const payload = {
                email: values.email,
                password: values.password,
                password2: values.confirmPassword,
                first_name: values.first_name,
                last_name: values.last_name,
                role: 'student'
            };

            // Call your Next.js API route
            const response = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle validation errors from backend
                if (data.details?.email) {
                    setError(data.details.email[0]);
                } else if (data.details?.password) {
                    setError(data.details.password[0]);
                } else if (data.details?.password2) {
                    setError(data.details.password2[0]);
                } else if (data.error) {
                    setError(data.error);
                } else {
                    setError('Registration failed. Please try again.');
                }
                setLoading(false);
                return;
            }

            // Success - redirect to homepage
            console.log('Signup successful!', data.user);
            router.push('/');

        } catch (err: unknown) {
            console.error('Signup error:', err);
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('Network error. Please try again.');
            }
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="w-full max-w-2xl">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-600 mb-4 shadow-lg">
                        <GraduationCap className="w-4 h-4 md:w-8 md:h-8 text-white" />
                    </div>
                    <h1 className="big-text-2 font-bold text-white mb-2">
                        Join Niveel Hub
                    </h1>
                    <p className="normal-text text-slate-400">
                        Start your programming journey with expert-led courses
                    </p>
                </div>

                {/* Form Card */}
                <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700">
                    <AppErrorMessage visible={!!error} error={error} />

                    <AppForm
                        initialValues={{
                            first_name: "",
                            last_name: "",
                            email: "",
                            password: "",
                            confirmPassword: "",
                        }}
                        onSubmit={handleSignup}
                        validationSchema={SignupValidationSchema}
                    >
                        <FormLoader visible={loading} message="Creating your account..." />

                        <div className="space-y-5">
                            {/* Name Fields - Grid */}
                            <div className="grid sm:grid-cols-2 gap-5">
                                <AppFormField
                                    name="first_name"
                                    placeholder="e.g. John"
                                    label="First Name"
                                    type="text"
                                    required
                                />

                                <AppFormField
                                    name="last_name"
                                    placeholder="e.g. Doe"
                                    label="Last Name"
                                    type="text"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <AppFormField
                                name="email"
                                placeholder="you@example.com"
                                label="Email Address"
                                type="email"
                                required
                            />

                            {/* Password & Confirm Password - Grid */}
                            <div className="grid sm:grid-cols-2 gap-5">
                                <AppFormField
                                    name="password"
                                    placeholder="Enter password"
                                    label="Password"
                                    type={passwordVisible ? "text" : "password"}
                                    icon={passwordVisible ? "eye-slash" : "eye"}
                                    iconClick={() => setPasswordVisible((prev) => !prev)}
                                    iconAria={
                                        passwordVisible ? "Hide password" : "Show password"
                                    }
                                    required
                                />

                                <AppFormField
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    label="Confirm Password"
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    icon={confirmPasswordVisible ? "eye-slash" : "eye"}
                                    iconClick={() => setConfirmPasswordVisible((prev) => !prev)}
                                    iconAria={
                                        confirmPasswordVisible ? "Hide password" : "Show password"
                                    }
                                    required
                                />
                            </div>

                            {/* Password Requirements */}
                            <div className="p-3 bg-slate-700/50 rounded-lg">
                                <p className="small-text text-slate-400 font-semibold mb-2">
                                    Password Requirements:
                                </p>
                                <ul className="space-y-1">
                                    <li className="small-text text-slate-400 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        At least 8 characters
                                    </li>
                                    <li className="small-text text-slate-400 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        One uppercase letter
                                    </li>
                                    <li className="small-text text-slate-400 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        One lowercase letter
                                    </li>
                                    <li className="small-text text-slate-400 flex items-center gap-2">
                                        <span className="w-1 h-1 rounded-full bg-emerald-400"></span>
                                        One number
                                    </li>
                                </ul>
                            </div>

                            {/* Terms & Conditions */}
                            <div className="p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                                <p className="small-text text-slate-400 leading-relaxed">
                                    By creating an account, you agree to our{" "}
                                    <Link
                                        href="/terms"
                                        className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
                                    >
                                        Terms of Service
                                    </Link>{" "}
                                    and{" "}
                                    <Link
                                        href="/privacy"
                                        className="text-emerald-400 hover:text-emerald-300 font-semibold hover:underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                </p>
                            </div>

                            <SubmitButton title="Create Account" />

                            {/* Divider */}
                            <div className="relative my-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-slate-600" />
                                </div>
                                <div className="relative flex justify-center normal-text-2">
                                    <span className="bg-slate-800 px-4 text-slate-400">
                                        Already have an account?
                                    </span>
                                </div>
                            </div>

                            {/* Login Link */}
                            <Link
                                href="/login"
                                className="flex items-center justify-center gap-2 w-full py-3 px-4 border-2 border-emerald-500 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-xl font-semibold normal-text transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                                Sign In
                                <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </Link>
                        </div>
                    </AppForm>
                </div>

                {/* Footer Note */}
                <div className="mt-6 text-center">
                    <p className="small-text text-slate-400">
                        Questions? Contact us at{" "}
                        <a 
                            href="mailto:support@niveelhub.com" 
                            className="text-emerald-400 hover:underline font-medium"
                        >
                            support@niveelhub.com
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;