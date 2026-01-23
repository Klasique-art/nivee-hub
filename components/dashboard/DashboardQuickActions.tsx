import Link from "next/link";
import { BookOpen, ClipboardList, Code, MessageSquare, Settings, Calendar } from "lucide-react";

const DashboardQuickActions = () => {
    const quickActions = [
        {
            title: "Browse Courses",
            description: "Explore new courses",
            icon: BookOpen,
            href: "/courses",
            color: "emerald",
        },
        {
            title: "Coding Challenges",
            description: "Practice coding",
            icon: Code,
            href: "/dashboard/coding",
            color: "purple",
        },
        {
            title: "Forum",
            description: "Join discussions",
            icon: MessageSquare,
            href: "/dashboard/forum",
            color: "orange",
        },
        {
            title: "Settings",
            description: "Manage account",
            icon: Settings,
            href: "/dashboard/settings",
            color: "slate",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; hover: string; icon: string }> = {
            emerald: {
                bg: "bg-emerald-50 dark:bg-emerald-900/20",
                hover: "hover:bg-emerald-100 dark:hover:bg-emerald-900/30",
                icon: "text-emerald-600 dark:text-emerald-400",
            },
            blue: {
                bg: "bg-blue-50 dark:bg-blue-900/20",
                hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
                icon: "text-blue-600 dark:text-blue-400",
            },
            purple: {
                bg: "bg-purple-50 dark:bg-purple-900/20",
                hover: "hover:bg-purple-100 dark:hover:bg-purple-900/30",
                icon: "text-purple-600 dark:text-purple-400",
            },
            orange: {
                bg: "bg-orange-50 dark:bg-orange-900/20",
                hover: "hover:bg-orange-100 dark:hover:bg-orange-900/30",
                icon: "text-orange-600 dark:text-orange-400",
            },
            pink: {
                bg: "bg-pink-50 dark:bg-pink-900/20",
                hover: "hover:bg-pink-100 dark:hover:bg-pink-900/30",
                icon: "text-pink-600 dark:text-pink-400",
            },
            slate: {
                bg: "bg-slate-100 dark:bg-slate-700/50",
                hover: "hover:bg-slate-200 dark:hover:bg-slate-700",
                icon: "text-slate-600 dark:text-slate-400",
            },
        };
        return colors[color] || colors.emerald;
    };

    return (
        <div>
            <h2 className="big-text-4 font-bold text-slate-900 dark:text-white mb-4">
                Quick Actions
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {quickActions.map((action, index) => {
                    const Icon = action.icon;
                    const colors = getColorClasses(action.color);

                    return (
                        <Link
                            key={index}
                            href={action.href}
                            className={`${colors.bg} ${colors.hover} rounded-xl p-4 flex flex-col items-center gap-2 transition-all hover:shadow-md border border-transparent hover:border-slate-200 dark:hover:border-slate-700`}
                        >
                            <div className="w-12 h-12 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                                <Icon className={`w-6 h-6 ${colors.icon}`} />
                            </div>
                            <div className="text-center">
                                <p className="small-text font-semibold text-slate-900 dark:text-white">
                                    {action.title}
                                </p>
                                <p className="small-text-2 text-slate-600 dark:text-slate-400">
                                    {action.description}
                                </p>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default DashboardQuickActions;