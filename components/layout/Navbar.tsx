"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, BookOpen } from "lucide-react";

import { ProfileDropdown, LogoutModal } from "@/components";
import type { CurrentUser } from "@/types/user.types";
import { navLinks } from "@/data/general.static";

interface NavbarProps {
    isAuthenticated?: boolean;
    user?: CurrentUser | null;
}

const Navbar = ({ isAuthenticated = false, user = null }: NavbarProps) => {
    const [navbarActive, setNavbarActive] = useState<boolean>(true);
    const [mobileNavMenuActive, setMobileNavMenuActive] = useState<boolean>(false);
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
    const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showBg, setShowBg] = useState<boolean>(false);

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const menuButtonRef = useRef<HTMLButtonElement>(null);

    const pathname = usePathname();

    const closeMobileMenu = useCallback(() => {
        setMobileNavMenuActive(false);
        setTimeout(() => {
            menuButtonRef.current?.focus();
        }, 100);
    }, []);

    // Scroll handling with performance optimization
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setNavbarActive(false);
            } else {
                setNavbarActive(true);
            }

            setShowBg(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", throttledScroll, { passive: true });
        return () => window.removeEventListener("scroll", throttledScroll);
    }, [lastScrollY]);

    // Body scroll lock for mobile menu
    useEffect(() => {
        if (mobileNavMenuActive) {
            document.body.style.overflow = "hidden";
            const main = document.querySelector("main");
            if (main) main.setAttribute("aria-hidden", "true");

            setTimeout(() => {
                closeButtonRef.current?.focus();
            }, 100);
        } else {
            document.body.style.overflow = "";
            const main = document.querySelector("main");
            if (main) main.removeAttribute("aria-hidden");
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileNavMenuActive]);

    // Keyboard handling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape" && mobileNavMenuActive) {
                closeMobileMenu();
            }

            // Focus trap for mobile menu
            if (mobileNavMenuActive && mobileMenuRef.current && e.key === "Tab") {
                const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], [tabindex]:not([tabindex="-1"])'
                );

                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [mobileNavMenuActive, closeMobileMenu]);

    // Logout handlers
    const handleLogoutClick = () => {
        setShowLogoutModal(true);
    };

    const handleLogoutConfirm = async () => {
        setIsLoggingOut(true);
        try {
            // TODO: Replace with actual logout API call
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                window.location.href = "/";
            } else {
                console.error("Logout failed");
                window.location.href = "/";
            }
        } catch (error) {
            console.error("Logout error:", error);
            window.location.href = "/";
        } finally {
            setIsLoggingOut(false);
        }
    };

    const handleLogoutCancel = () => {
        if (!isLoggingOut) {
            setShowLogoutModal(false);
        }
    };

    return (
        <>
            {/* Skip to main content */}
            <Link
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100000 bg-emerald-600 text-white px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
            >
                Skip to main content
            </Link>

            <header
                className={`fixed top-0 left-0 w-full z-9999 transition-all duration-300 ${showBg
                        ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700"
                        : "bg-transparent"
                    } ${navbarActive ? "translate-y-0" : "-translate-y-full"}`}
                role="banner"
            >
                <nav
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                    role="navigation"
                    aria-label="Main navigation"
                >
                    <div className="flex justify-between items-center h-16 sm:h-20">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-lg"
                            aria-label="Niveel Hub - Go to homepage"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden ring-2 ring-emerald-500/30 group-hover:ring-emerald-500 transition-all">
                                <BookOpen className="w-full h-full p-2 text-emerald-600" aria-hidden="true" />
                            </div>
                            <div className="hidden sm:block">
                                <h1 className="big-text-5 font-bold text-slate-900 dark:text-white">
                                    Niveel Hub
                                </h1>
                                <p className="small-text-2 text-slate-600 dark:text-slate-400 -mt-0.5">
                                    Learn Programming
                                </p>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.url;
                                return (
                                    <Link
                                        key={link.id}
                                        href={link.url}
                                        className={`px-4 py-2 rounded-lg normal-text font-medium transition-all ${isActive
                                                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20"
                                                : "text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                                            } focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {link.title}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Section */}
                        <div className="flex items-center gap-3">
                            {isAuthenticated && user ? (
                                <ProfileDropdown user={user} onLogoutClick={handleLogoutClick} />
                            ) : ( 
                                <div className="flex items-center gap-2">
                                    <Link
                                        href="/login"
                                        className="hidden sm:inline-flex px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 normal-text font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/signup"
                                        className="inline-flex px-4 py-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 normal-text font-medium text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}

                            {/* Mobile Menu Button */}
                            <button
                                ref={menuButtonRef}
                                onClick={() => setMobileNavMenuActive(true)}
                                className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                aria-label="Open mobile menu"
                                aria-expanded={mobileNavMenuActive}
                            >
                                <Menu className="w-6 h-6" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation */}
            <div
                ref={mobileMenuRef}
                className={`fixed inset-0 bg-white dark:bg-slate-900 z-99999 transition-all duration-300 ${mobileNavMenuActive
                        ? "opacity-100 visible"
                        : "opacity-0 invisible pointer-events-none"
                    }`}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
            >
                {/* Mobile Header */}
                <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-2">
                        <BookOpen className="w-8 h-8 text-emerald-600" aria-hidden="true" />
                        <span className="normal-text font-bold text-slate-900 dark:text-white">
                            Niveel Hub
                        </span>
                    </div>
                    <button
                        ref={closeButtonRef}
                        onClick={closeMobileMenu}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        aria-label="Close mobile menu"
                    >
                        <X className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>

                {/* Mobile Links */}
                <div className="overflow-y-auto h-[calc(100vh-73px)] p-6">
                    <nav className="space-y-2 mb-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.url;
                            return (
                                <Link
                                    key={link.id}
                                    href={link.url}
                                    onClick={closeMobileMenu}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl big-text-5 font-medium transition-all ${isActive
                                            ? "text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-600"
                                            : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border-l-4 border-transparent"
                                        } focus:outline-none focus:ring-2 focus:ring-emerald-500`}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <span>{link.title}</span>
                                    {isActive && (
                                        <div className="w-2 h-2 bg-emerald-600 rounded-full" aria-hidden="true" />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Mobile Auth Section - Only show Login/Signup when NOT authenticated */}
                    {!isAuthenticated && !user && (
                        <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                            <Link
                                href="/login"
                                onClick={closeMobileMenu}
                                className="block w-full text-center px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 normal-text font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                            >
                                Login
                            </Link>
                            <Link
                                href="/signup"
                                onClick={closeMobileMenu}
                                className="block w-full text-center px-4 py-3 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 normal-text font-medium text-white shadow-lg transition-all"
                            >
                                Sign Up
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Logout Modal */}
            <LogoutModal
                isOpen={showLogoutModal}
                onClose={handleLogoutCancel}
                onConfirm={handleLogoutConfirm}
                isLoading={isLoggingOut}
                userName={user ? `${user.first_name} ${user.last_name}` : undefined}
            />

            {/* Global Accessibility Styles */}
            <style jsx global>{`
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .focus\\:not-sr-only:focus {
          position: static;
          width: auto;
          height: auto;
          padding: 0.5rem 1rem;
          margin: 0;
          overflow: visible;
          clip: auto;
          white-space: normal;
        }
      `}</style>
        </>
    );
};

export default Navbar;