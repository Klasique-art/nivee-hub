"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GraduationCap } from 'lucide-react';

import { dashboardSideLinks } from '@/data/dashboard.static';

const DashboardSideBar = () => {
    const pathname = usePathname();

    const activeLink = dashboardSideLinks
        .filter(link => pathname === link.link || pathname.startsWith(link.link + '/'))
        .sort((a, b) => b.link.length - a.link.length)[0];

    return (
        <aside
            className="hidden md:block fixed left-2 xs:left-4 top-2 xs:top-4 w-52 h-[calc(100vh-1rem)] xs:h-[calc(100vh-2rem)] bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            role="navigation"
            aria-label="Dashboard sidebar navigation"
        >
            <div className="flex flex-col h-full">
                {/* Logo/Brand */}
                <div className="p-6 border-b border-slate-200 dark:border-slate-700">
                    <Link 
                        href="/" 
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
                        aria-label="Niveel Hub home"
                    >
                        <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                            <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="font-bold text-slate-900 dark:text-white normal-text">
                                Niveel Hub
                            </h2>
                            <p className="small-text text-slate-500 dark:text-slate-400">
                                Student Portal
                            </p>
                        </div>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {dashboardSideLinks.map((link, index) => {
                        const isActive = link.link === activeLink?.link;

                        return (
                            <Link
                                key={index}
                                href={link.link}
                                className={`px-4 py-3 rounded-xl duration-200 flex items-center gap-3 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all ${
                                    isActive 
                                        ? 'bg-emerald-600 text-white shadow-lg' 
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                                }`}
                                aria-current={isActive ? "page" : undefined}
                            >
                                <span
                                    className={`text-lg shrink-0 ${isActive ? 'text-white' : 'text-slate-500 dark:text-slate-400'}`}
                                    aria-hidden="true"
                                >
                                    {link.icon}
                                </span>
                                <span className="font-medium small-text">{link.title}</span>
                                {isActive && (
                                    <span className="sr-only"> (current page)</span>
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="small-text text-slate-500 dark:text-slate-400 text-center">
                        © 2024 Niveel Hub
                    </p>
                </div>
            </div>
        </aside>
    );
};

export default DashboardSideBar;