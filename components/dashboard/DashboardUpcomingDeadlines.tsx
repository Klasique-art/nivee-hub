import { BookOpen, Video, Users, Globe, Award, Headphones } from "lucide-react";

const DashboardUpcomingDeadlines = () => {
    const learningTips = [
        {
            icon: Video,
            title: "Live Classes on Zoom",
            description: "All cohort sessions are conducted live via Zoom. Links are shared 24 hours before class.",
            color: "emerald",
        },
        {
            icon: Users,
            title: "Community Support",
            description: "Connect with fellow students in the forum. Ask questions, share projects, and learn together.",
            color: "blue",
        },
        {
            icon: BookOpen,
            title: "Self-Paced Materials",
            description: "Access course materials anytime. Videos, readings, and resources available 24/7.",
            color: "purple",
        },
        {
            icon: Award,
            title: "Earn Certificates",
            description: "Complete courses and assessments to earn verified certificates of completion.",
            color: "amber",
        },
        {
            icon: Globe,
            title: "Learn From Anywhere",
            description: "Study at your own pace from anywhere in Ghana or around the world.",
            color: "orange",
        },
        {
            icon: Headphones,
            title: "Instructor Support",
            description: "Get help from experienced instructors during live sessions and office hours.",
            color: "pink",
        },
    ];

    const getColorClasses = (color: string) => {
        const colors: Record<string, { bg: string; icon: string }> = {
            emerald: {
                bg: "bg-emerald-100 dark:bg-emerald-900/30",
                icon: "text-emerald-600 dark:text-emerald-400",
            },
            blue: {
                bg: "bg-blue-100 dark:bg-blue-900/30",
                icon: "text-blue-600 dark:text-blue-400",
            },
            purple: {
                bg: "bg-purple-100 dark:bg-purple-900/30",
                icon: "text-purple-600 dark:text-purple-400",
            },
            amber: {
                bg: "bg-amber-100 dark:bg-amber-900/30",
                icon: "text-amber-600 dark:text-amber-400",
            },
            orange: {
                bg: "bg-orange-100 dark:bg-orange-900/30",
                icon: "text-orange-600 dark:text-orange-400",
            },
            pink: {
                bg: "bg-pink-100 dark:bg-pink-900/30",
                icon: "text-pink-600 dark:text-pink-400",
            },
        };
        return colors[color] || colors.emerald;
    };

    return (
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="mb-6">
                <h2 className="big-text-4 font-bold text-slate-900 dark:text-white mb-2">
                    How Niveel Hub Works
                </h2>
                <p className="small-text text-slate-600 dark:text-slate-400">
                    Everything you need to know about your learning experience
                </p>
            </div>

            <div className="space-y-4">
                {learningTips.map((tip, index) => {
                    const Icon = tip.icon;
                    const colors = getColorClasses(tip.color);

                    return (
                        <div
                            key={index}
                            className="flex gap-3 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                        >
                            <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`}>
                                <Icon className={`w-5 h-5 ${colors.icon}`} />
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="normal-text-2 font-semibold text-slate-900 dark:text-white mb-1">
                                    {tip.title}
                                </h3>
                                <p className="small-text text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {tip.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-600 dark:bg-emerald-500 flex items-center justify-center shrink-0">
                            <BookOpen className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                            <h4 className="normal-text-2 font-semibold text-emerald-900 dark:text-emerald-100 mb-1">
                                Need Help?
                            </h4>
                            <p className="small-text text-emerald-800 dark:text-emerald-200/80">
                                Visit our Help Center or contact support at{" "}
                                <a 
                                    href="mailto:support@niveehub.com" 
                                    className="font-medium underline hover:no-underline"
                                >
                                    support@niveehub.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DashboardUpcomingDeadlines;