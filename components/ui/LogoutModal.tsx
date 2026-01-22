"use client";

import { useEffect, useRef } from "react";
import { X, LogOut } from "lucide-react";

interface LogoutModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    isLoading?: boolean;
    userName?: string;
}

const LogoutModal = ({
    isOpen,
    onClose,
    onConfirm,
    isLoading = false,
    userName,
}: LogoutModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    // Focus management
    useEffect(() => {
        if (isOpen) {
            // Prevent body scroll
            document.body.style.overflow = "hidden";

            // Focus close button
            setTimeout(() => {
                closeButtonRef.current?.focus();
            }, 100);
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    // Keyboard handling
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && !isLoading) {
                onClose();
            }

            // Focus trap
            if (e.key === "Tab") {
                const focusableElements = modalRef.current?.querySelectorAll(
                    'button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
                if (!focusableElements?.length) return;

                const firstElement = focusableElements[0] as HTMLElement;
                const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, isLoading, onClose]);

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-9998 animate-in fade-in duration-200"
                onClick={isLoading ? undefined : onClose}
                aria-hidden="true"
            />

            {/* Modal */}
            <div
                className="fixed inset-0 z-9999 flex items-center justify-center p-4"
                role="dialog"
                aria-modal="true"
                aria-labelledby="logout-modal-title"
            >
                <div
                    ref={modalRef}
                    className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in-95 duration-200"
                >
                    {/* Header */}
                    <div className="flex items-start justify-between p-6 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                <LogOut className="w-6 h-6 text-red-600 dark:text-red-400" aria-hidden="true" />
                            </div>
                            <div>
                                <h2
                                    id="logout-modal-title"
                                    className="big-text-4 font-bold text-slate-900 dark:text-white"
                                >
                                    Logout Confirmation
                                </h2>
                            </div>
                        </div>

                        <button
                            ref={closeButtonRef}
                            onClick={onClose}
                            disabled={isLoading}
                            className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 dark:hover:text-slate-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-slate-400"
                            aria-label="Close modal"
                        >
                            <X className="w-5 h-5" aria-hidden="true" />
                        </button>
                    </div>

                    {/* Body */}
                    <div className="px-6 pb-6">
                        <p className="normal-text text-slate-600 dark:text-slate-300 mb-4">
                            Are you sure you want to logout? You&apos;ll need to sign in again to access your account.
                        </p>

                        {userName && (
                            <div className="rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 p-3">
                                <p className="normal-text-2 text-slate-700 dark:text-slate-300">
                                    Logging out: <span className="font-semibold">{userName}</span>
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center gap-3 p-6 pt-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-b-2xl">
                        <button
                            onClick={onClose}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 normal-text font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-slate-400"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2.5 rounded-lg bg-red-600 hover:bg-red-700 normal-text font-medium text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Logging out...</span>
                                </>
                            ) : (
                                <>
                                    <LogOut className="w-4 h-4" aria-hidden="true" />
                                    <span>Logout</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LogoutModal;