"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from "lucide-react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { dashboardSideLinks } from '@/data/dashboard.static';
import { CurrentUser } from '@/types/user.types';
import { ProfileCard } from '@/components';

type Props = {
    user: CurrentUser | null;
};

const DashboardTopBar: React.FC<Props> = ({ user }) => {
    const [showNavMenu, setShowNavMenu] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    const activeLink = dashboardSideLinks
        .filter(link => pathname === link.link || pathname.startsWith(link.link + '/'))
        .sort((a, b) => b.link.length - a.link.length)[0];

    // Close menu on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setShowNavMenu(false);
            }
        };

        if (showNavMenu) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [showNavMenu]);

    // Focus trap for mobile menu
    useEffect(() => {
        if (!showNavMenu || !navRef.current) return;

        const focusableElements = navRef.current.querySelectorAll<HTMLElement>(
            'a, button, [tabindex]:not([tabindex="-1"])'
        );

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        const trapFocus = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstEl) {
                    e.preventDefault();
                    lastEl.focus();
                }
            } else {
                if (document.activeElement === lastEl) {
                    e.preventDefault();
                    firstEl.focus();
                }
            }
        };

        document.addEventListener('keydown', trapFocus);
        firstEl?.focus();

        return () => {
            document.removeEventListener('keydown', trapFocus);
        };
    }, [showNavMenu]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (showNavMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [showNavMenu]);

    return (
        <>
            <nav
                className="w-full md:w-[calc(100%-1rem)] md:ml-4 py-3 px-4 sm:px-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700"
                aria-label="Top navigation"
            >
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <button
                            className="md:hidden text-xl bg-emerald-600 duration-300 hover:bg-emerald-700 rounded-lg p-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            onClick={() => setShowNavMenu(true)}
                            aria-label="Open main menu"
                            aria-expanded={showNavMenu}
                            aria-controls="mobile-navigation"
                            type="button"
                        >
                            <Menu aria-hidden="true" />
                        </button>
                        <h1 className="font-bold text-slate-900 dark:text-white big-text-5">
                            {activeLink?.title || 'Dashboard'}
                        </h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <ProfileCard user={user} />
                    </div>
                </div>
            </nav>

            {/* Mobile Nav Menu Overlay */}
            {showNavMenu && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={() => setShowNavMenu(false)}
                    aria-hidden="true"
                />
            )}

            {/* Mobile Nav Menu */}
            <nav
                id="mobile-navigation"
                ref={navRef}
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation menu"
                className={`w-full max-w-xs fixed z-50 top-0 left-0 h-screen bg-white dark:bg-slate-800 duration-300 overflow-auto shadow-2xl border-r border-slate-200 dark:border-slate-700 ${
                    showNavMenu ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-4 flex justify-between items-center border-b border-slate-200 dark:border-slate-700">
                    <h2 className="big-text-4 font-bold text-slate-900 dark:text-white">Menu</h2>
                    <button
                        onClick={() => setShowNavMenu(false)}
                        className="text-xl text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 rounded-lg p-2 transition-colors duration-300"
                        aria-label="Close navigation menu"
                        type="button"
                    >
                        <X aria-hidden="true" />
                    </button>
                </div>

                <ul className="py-4 px-3 space-y-2">
                    {dashboardSideLinks.map((link, index) => {
                        const isActive = link.link === activeLink?.link;

                        return (
                            <li key={index}>
                                <Link
                                    href={link.link}
                                    className={`px-4 py-3 rounded-xl duration-300 flex items-center gap-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                                        isActive 
                                            ? 'bg-emerald-600 text-white shadow-lg' 
                                            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                    }`}
                                    onClick={() => setShowNavMenu(false)}
                                    aria-current={isActive ? "page" : undefined}
                                >
                                    <span
                                        className={`text-lg shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                                        aria-hidden="true"
                                    >
                                        {link.icon}
                                    </span>
                                    <span className="font-semibold normal-text-2">{link.title}</span>
                                    {isActive && (
                                        <span className="sr-only"> (current page)</span>
                                    )}
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                {/* Footer in mobile menu */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                    <p className="small-text text-slate-600 dark:text-slate-400 text-center">
                        Niveel Hub Dashboard
                    </p>
                </div>
            </nav>
        </>
    );
};

export default DashboardTopBar;