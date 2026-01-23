import Link from "next/link";
import { 
    BookOpen, 
    ClipboardCheck, 
    Trophy, 
    MessageSquare, 
    Award, 
    UserPlus,
    ChevronRight 
} from "lucide-react";
import { RecentActivity } from "@/types/dashboard.types";

interface DashboardRecentActivityProps {
    activities: RecentActivity[];
}

const DashboardRecentActivity = ({ activities }: DashboardRecentActivityProps) => {
    const recentActivities = activities.slice(0, 6);

    const getActivityIcon = (type: string) => {
        const icons: Record<string, any> = {
            lesson_completed: BookOpen,
            assignment_submitted: ClipboardCheck,
            test_completed: Trophy,
            forum_post: MessageSquare,
            certificate_earned: Award,
            course_enrolled: UserPlus,
        };
        return icons[type] || BookOpen;
    };

    const getActivityColor = (type: string) => {
        const colors: Record<string, string> = {
            lesson_completed: "text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/30",
            assignment_submitted: "text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30",
            test_completed: "text-purple-600 dark:text-purple-400 bg-purple-100 dark:bg-purple-900/30",
            forum_post: "text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-900/30",
            certificate_earned: "text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30",
            course_enrolled: "text-pink-600 dark:text-pink-400 bg-pink-100 dark:bg-pink-900/30",
        };
        return colors[type] || colors.lesson_completed;
    };

    const formatTimeAgo = (timestamp: string) => {
        const now = new Date();
        const activityDate = new Date(timestamp);
        const diffMs = now.getTime() - activityDate.getTime();
        const diffMins = Math.floor(diffMs / (1000 * 60));
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        if (diffMins < 60) return `${diffMins}m ago`;
        if (diffHours < 24) return `${diffHours}h ago`;
        if (diffDays < 30) return `${diffDays}d ago`;
        return activityDate.toLocaleDateString("en-US", { month: "short", day: "numeric" });
    };

    return (
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="big-text-4 font-bold text-slate-900 dark:text-white">
                    Recent Activity
                </h2>
                <Link
                    href="/dashboard/profile"
                    className="small-text font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 flex items-center gap-1"
                >
                    View All
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="space-y-3">
                {recentActivities.length > 0 ? (
                    recentActivities.map((activity) => {
                        const Icon = getActivityIcon(activity.type);
                        const colorClass = getActivityColor(activity.type);

                        return (
                            <div key={activity.id} className="group">
                                {activity.link ? (
                                    <Link href={activity.link} className="block">
                                        <div className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                            <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}>
                                                <Icon className="w-5 h-5" />
                                            </div>

                                            <div className="flex-1 min-w-0">
                                                <h3 className="normal-text-2 font-medium text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                                    {activity.title}
                                                </h3>
                                                <p className="small-text text-slate-600 dark:text-slate-400 truncate">
                                                    {activity.description}
                                                </p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    {activity.course_title && (
                                                        <span className="small-text text-emerald-600 dark:text-emerald-400">
                                                            {activity.course_title}
                                                        </span>
                                                    )}
                                                    <span className="small-text text-slate-500 dark:text-slate-400">
                                                        • {formatTimeAgo(activity.timestamp)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="flex gap-3 p-3">
                                        <div className={`w-10 h-10 rounded-lg ${colorClass} flex items-center justify-center shrink-0`}>
                                            <Icon className="w-5 h-5" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <h3 className="normal-text-2 font-medium text-slate-900 dark:text-white truncate">
                                                {activity.title}
                                            </h3>
                                            <p className="small-text text-slate-600 dark:text-slate-400 truncate">
                                                {activity.description}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                {activity.course_title && (
                                                    <span className="small-text text-emerald-600 dark:text-emerald-400">
                                                        {activity.course_title}
                                                    </span>
                                                )}
                                                <span className="small-text text-slate-500 dark:text-slate-400">
                                                    • {formatTimeAgo(activity.timestamp)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })
                ) : (
                    <div className="text-center py-8">
                        <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-3" />
                        <p className="normal-text text-slate-600 dark:text-slate-400">
                            No recent activity
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DashboardRecentActivity;