import { BookOpen, ClipboardCheck, Trophy, Award, Flame, Clock } from "lucide-react";
import { DashboardStats } from "@/types/dashboard.types";

interface DashboardOverviewProps {
    stats: DashboardStats;
}

const DashboardOverview = ({ stats }: DashboardOverviewProps) => {
    const overviewCards = [
        {
            title: "Enrolled Courses",
            value: stats.enrolled_courses,
            subtitle: `${stats.in_progress_courses} in progress`,
            icon: BookOpen,
            color: "emerald",
        },
        {
            title: "Assignments",
            value: stats.pending_assignments,
            subtitle: `${stats.completed_assignments} completed`,
            icon: ClipboardCheck,
            color: "blue",
        },
        {
            title: "Coding Challenges",
            value: stats.coding_challenges_completed,
            subtitle: `of ${stats.total_coding_challenges} total`,
            icon: Trophy,
            color: "purple",
        },
        {
            title: "Learning Hours",
            value: stats.total_learning_hours,
            subtitle: "Total time invested",
            icon: Clock,
            color: "pink",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string; text: string }> = {
            emerald: {
                bg: "bg-emerald-100 dark:bg-emerald-900/30",
                icon: "text-emerald-600 dark:text-emerald-400",
                text: "text-emerald-600 dark:text-emerald-400",
            },
            blue: {
                bg: "bg-blue-100 dark:bg-blue-900/30",
                icon: "text-blue-600 dark:text-blue-400",
                text: "text-blue-600 dark:text-blue-400",
            },
            purple: {
                bg: "bg-purple-100 dark:bg-purple-900/30",
                icon: "text-purple-600 dark:text-purple-400",
                text: "text-purple-600 dark:text-purple-400",
            },
            amber: {
                bg: "bg-amber-100 dark:bg-amber-900/30",
                icon: "text-amber-600 dark:text-amber-400",
                text: "text-amber-600 dark:text-amber-400",
            },
            orange: {
                bg: "bg-orange-100 dark:bg-orange-900/30",
                icon: "text-orange-600 dark:text-orange-400",
                text: "text-orange-600 dark:text-orange-400",
            },
            pink: {
                bg: "bg-pink-100 dark:bg-pink-900/30",
                icon: "text-pink-600 dark:text-pink-400",
                text: "text-pink-600 dark:text-pink-400",
            },
        };
        return colors[color] || colors.emerald;
    };

    return (
        <div>
            <h2 className="big-text-4 font-bold text-slate-900 dark:text-white mb-4">
                Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {overviewCards.map((card, index) => {
                    const Icon = card.icon;
                    const colors = getColorClasses(card.color);

                    return (
                        <div
                            key={index}
                            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-4 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <p className="small-text text-slate-600 dark:text-slate-400 mb-1">
                                        {card.title}
                                    </p>
                                    <p className="big-text-3 font-bold text-slate-900 dark:text-white mb-1">
                                        {card.value}
                                    </p>
                                    <p className="small-text text-slate-500 dark:text-slate-400">
                                        {card.subtitle}
                                    </p>
                                </div>
                                <div
                                    className={`w-12 h-12 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`}
                                >
                                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DashboardOverview;