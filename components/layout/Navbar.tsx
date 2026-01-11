"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X } from "lucide-react";

import { navLinks, companyInfo } from "@/data/general.static";
import { ThemeSwitch } from "@/components";
import { logo } from "@/data/constants";

type RefType = HTMLDivElement | null;
type ButtonRefType = HTMLButtonElement | null;

const Navbar: React.FC = () => {
    const [navbarActive, setNavbarActive] = useState<boolean>(true);
    const [mobileNavMenuActive, setMobileNavMenuActive] = useState<boolean>(false);
    const [lastScrollY, setLastScrollY] = useState<number>(0);
    const [showBg, setShowBg] = useState<boolean>(false);

    const mobileMenuRef = useRef<RefType | null>(null);
    const closeButtonRef = useRef<ButtonRefType | null>(null);
    const menuButtonRef = useRef<ButtonRefType | null>(null);
    const skipLinkRef = useRef<HTMLAnchorElement | null>(null);

    const pathname = usePathname();

    // Memoized close menu function to prevent unnecessary re-renders
    const closeMobileMenu = useCallback(() => {
        setMobileNavMenuActive(false);
        // Return focus to menu button when closing
        setTimeout(() => {
            menuButtonRef.current?.focus();
        }, 100);
    }, []);

    // Enhanced scroll handling with reduced motion support
    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (!prefersReducedMotion) {
                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    setNavbarActive(false);
                } else {
                    setNavbarActive(true);
                }
            }

            setShowBg(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        // Throttle scroll events for performance
        let ticking = false;
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

    // Enhanced body scroll and ARIA management
    useEffect(() => {
        const body = document.body;
        const main = document.querySelector("main");

        if (mobileNavMenuActive) {
            // Store original overflow value
            const originalOverflow = body.style.overflow;

            body.style.overflow = "hidden";
            body.setAttribute("data-mobile-nav-open", "true");

            if (main) {
                main.setAttribute("aria-hidden", "true");
                main.setAttribute("inert", ""); // Prevent interaction with background content
            }

            // Focus management
            setTimeout(() => {
                closeButtonRef.current?.focus();
            }, 100);

            return () => {
                body.style.overflow = originalOverflow;
                body.removeAttribute("data-mobile-nav-open");
                if (main) {
                    main.removeAttribute("aria-hidden");
                    main.removeAttribute("inert");
                }
            };
        }
    }, [mobileNavMenuActive]);

    // Enhanced keyboard event handling
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            // Global escape key handler
            if (e.key === "Escape" && mobileNavMenuActive) {
                e.preventDefault();
                closeMobileMenu();
            }

            // Focus trap for mobile menu
            if (mobileNavMenuActive && mobileMenuRef.current && e.key === "Tab") {
                const focusableElements = mobileMenuRef.current.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
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

    // Skip to main content handler
    const handleSkipToMain = (e: React.MouseEvent | React.KeyboardEvent) => {
        e.preventDefault();
        const main = document.querySelector("main");
        if (main) {
            main.focus();
            main.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Skip to main content link for keyboard users */}
            <Link 
                ref={skipLinkRef}
                href="#main-content"
                onClick={handleSkipToMain}
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100000 bg-accent text-white px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent transform transition-all duration-200 focus:scale-105"
            >
                Skip to main content
            </Link>

            <header
                className={`fixed top-0 left-0 w-full z-99999 transition-all duration-300 ease-in-out ${
                    showBg 
                        ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-slate-700" 
                        : "bg-transparent"
                } ${navbarActive ? "translate-y-0" : "-translate-y-full"}`}
                role="banner"
            >
                {/* <BgPattern /> */}
                <div className="inner-wrapper px-2 xs:px-4">
                    <nav
                        className="inner-wrapper flex justify-between items-center py-4"
                        role="navigation"
                        aria-label="Main navigation"
                    >
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <Link
                                href="/"
                                className="group focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 rounded-lg transition-all duration-200"
                                aria-label={`${companyInfo.name} - Go to homepage`}
                            >
                                <div className="relative">
                                    <Image
                                        src={logo}
                                        alt={`${companyInfo.name} Logo`}
                                        width={120}
                                        height={40}
                                        priority
                                        className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200 rounded-lg"
                                    />
                                    {/* Accessible company info for screen readers */}
                                    <span className="sr-only">
                                        {companyInfo.name} - {companyInfo.tagline}, {companyInfo.location}
                                    </span>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-1" role="menubar">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.url;
                                    return (
                                        <Link
                                            key={link.id}
                                            href={link.url}
                                            role="menuitem"
                                            className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                                                isActive
                                                    ? "text-accent bg-accent/10 shadow-sm"
                                                    : "text-slate-700 dark:text-slate-300 hover:text-accent hover:bg-accent/5"
                                            }`}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            {link.title}
                                            {isActive && (
                                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full" />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Theme Switch */}
                            <ThemeSwitch />

                            {/* CTA Button - Desktop */}
                            <div className="hidden md:block">
                                <Link
                                    href="/contact"
                                    className="bg-linear-to-r from-primary to-primary-100 hover:from-primary-100 hover:to-primary-200 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                >
                                    Contact us
                                </Link>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                ref={menuButtonRef}
                                className="lg:hidden p-2.5 bg-linear-to-br from-primary to-primary-100 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary transition-all duration-200 hover:scale-105 shadow-lg"
                                aria-label={mobileNavMenuActive ? "Close mobile menu" : "Open mobile menu"}
                                aria-expanded={mobileNavMenuActive}
                                aria-controls="mobile-navigation"
                                onClick={() => setMobileNavMenuActive(true)}
                            >
                                <Menu size={20} aria-hidden="true" />
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile navigation overlay */}
            <div
                ref={mobileMenuRef}
                id="mobile-navigation"
                className={`fixed inset-0 bg-white dark:bg-slate-900 transition-all duration-300 ease-out ${
                    mobileNavMenuActive
                        ? "z-999999 opacity-100 visible"
                        : "-z-10 opacity-0 invisible"
                }`}
                role="dialog"
                aria-modal="true"
                aria-labelledby="mobile-nav-title"
                aria-describedby="mobile-nav-description"
            >
                {/* Screen reader announcements */}
                <div className="sr-only">
                    <h2 id="mobile-nav-title">Mobile Navigation Menu</h2>
                    <p id="mobile-nav-description">Use tab to navigate through menu items, or press escape to close</p>
                </div>

                <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center p-2 border-b border-slate-200 dark:border-slate-700">
                        <div className="flex items-center">
                            <Image
                                src={logo}
                                alt={`${companyInfo.name} Logo`}
                                width={100}
                                height={32}
                                className="h-8 w-auto object-contain"
                            />
                        </div>
                        <button
                            ref={closeButtonRef}
                            className="p-2 bg-linear-to-br from-accent to-accent-50 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent transition-all duration-200 hover:scale-105"
                            aria-label="Close mobile navigation menu"
                            onClick={closeMobileMenu}
                        >
                            <X size={20} aria-hidden="true" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <nav className="flex-1 overflow-y-auto p-2" role="navigation" aria-label="Mobile navigation">
                        <ul className="space-y-2" role="menu">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.url;
                                return (
                                    <li key={link.id} role="none">
                                        <Link
                                            href={link.url}
                                            role="menuitem"
                                            className={`flex items-center justify-between p-2 rounded-xl text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 ${
                                                isActive
                                                    ? "text-accent bg-accent/10 shadow-sm border-l-4 border-accent"
                                                    : "text-slate-700 dark:text-slate-300 hover:text-accent hover:bg-accent/5 border-l-4 border-transparent"
                                            }`}
                                            onClick={closeMobileMenu}
                                            aria-current={isActive ? "page" : undefined}
                                        >
                                            <span>{link.title}</span>
                                            {isActive && (
                                                <div className="w-2 h-2 bg-accent rounded-full" />
                                            )}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                        {/* Mobile CTA Section */}
                        <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                            <Link
                                href="/contact"
                                className="block w-full text-center bg-linear-to-r from-primary to-primary-100 hover:from-primary-100 hover:to-primary-200 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary shadow-lg mb-4 transform hover:scale-[1.02]"
                                onClick={closeMobileMenu}
                            >
                                Contact us
                            </Link>
                            <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                                {companyInfo.name} • {companyInfo.location}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Global styles for accessibility */}
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

                [data-mobile-nav-open="true"] {
                    overflow: hidden !important;
                }

                /* Smooth focus transitions */
                * {
                    transition-property: box-shadow, outline;
                    transition-duration: 200ms;
                }

                /* Enhanced focus indicators for better visibility */
                *:focus-visible {
                    outline: 2px solid var(--color-accent);
                    outline-offset: 2px;
                }
            `}</style>
        </>
    );
};

export default Navbar;
