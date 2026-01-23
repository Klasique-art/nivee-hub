"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, LayoutDashboard, BookOpen, Settings, LogOut } from "lucide-react";

import type { CurrentUser } from "@/types/user.types";

interface MenuItem {
    label: string;
    icon: React.ReactNode;
    href: string;
}

interface ProfileDropdownProps {
    user: CurrentUser;
    onLogoutClick: () => void;
}

const ProfileDropdown = ({ user, onLogoutClick }: ProfileDropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const fullName = `${user.first_name} ${user.last_name}`;
    const initials = `${user.first_name[0]}${user.last_name[0]}`.toUpperCase();

    // Menu items based on role
    const menuItems: MenuItem[] = [
        {
            label: "Dashboard",
            icon: <LayoutDashboard className="w-4 h-4" />,
            href: user.role === "student"
                ? "/dashboard"
                : user.role === "instructor"
                    ? "/dashboard/instructor"
                    : "/dashboard/admin",
        },
        {
            label: user.role === "student" ? "My Courses" : "Teaching Cohorts",
            icon: <BookOpen className="w-4 h-4" />,
            href: user.role === "student"
                ? "/dashboard/student/courses"
                : "/dashboard/instructor/cohorts",
        },
        {
            label: "Settings",
            icon: <Settings className="w-4 h-4" />,
            href: "/settings",
        },
    ];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node) &&
                !buttonRef.current?.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsOpen(false);
                buttonRef.current?.focus();
            }

            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                e.preventDefault();
                const items = dropdownRef.current?.querySelectorAll('[role="menuitem"]');
                if (!items?.length) return;

                const currentIndex = Array.from(items).findIndex(
                    (item) => item === document.activeElement
                );

                let nextIndex: number;
                if (e.key === "ArrowDown") {
                    nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                } else {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                }

                (items[nextIndex] as HTMLElement).focus();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen]);

    return (
        <div className="relative">
            {/* Trigger Button */}
            <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                aria-haspopup="true"
                aria-expanded={isOpen}
                aria-label="User menu"
            >
                {/* Avatar */}
                {user.profile_picture ? (
                    <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-slate-300 dark:ring-slate-600">
                        <Image
                            src={user.profile_picture}
                            alt={fullName}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <div className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-blue-500 flex items-center justify-center ring-2 ring-slate-300 dark:ring-slate-600">
                        <span className="small-text font-bold text-white">{initials}</span>
                    </div>
                )}

                {/* Name - Hidden on mobile */}
                <span className="hidden sm:block normal-text-2 font-medium text-slate-900 dark:text-white">
                    {user.first_name}
                </span>

                {/* Chevron */}
                <ChevronDown
                    className={`w-4 h-4 text-slate-600 dark:text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    aria-hidden="true"
                />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                    role="menu"
                    aria-orientation="vertical"
                >
                    {/* User Info Header */}
                    <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900">
                        <div className="flex items-center gap-3">
                            {user.profile_picture ? (
                                <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500">
                                    <Image
                                        src={user.profile_picture}
                                        alt={fullName}
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-500 to-blue-500 flex items-center justify-center ring-2 ring-emerald-500">
                                    <span className="normal-text-2 font-bold text-white">{initials}</span>
                                </div>
                            )}
                            <div className="flex-1 min-w-0">
                                <p className="normal-text-2 font-semibold text-slate-900 dark:text-white truncate">
                                    {fullName}
                                </p>
                                <p className="small-text text-slate-600 dark:text-slate-400 truncate">
                                    {user.email}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                role="menuitem"
                                className="flex items-center gap-3 px-4 py-2.5 normal-text-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:bg-slate-100 dark:focus:bg-slate-700"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="text-slate-500 dark:text-slate-400">{item.icon}</span>
                                <span className="font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Logout Button */}
                    <div className="border-t border-slate-200 dark:border-slate-700 p-2">
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                onLogoutClick();
                            }}
                            role="menuitem"
                            className="w-full flex items-center gap-3 px-4 py-2.5 normal-text-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors focus:outline-none focus:bg-red-50 dark:focus:bg-red-900/20"
                        >
                            <LogOut className="w-4 h-4" aria-hidden="true" />
                            <span className="font-medium">Logout</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDropdown;