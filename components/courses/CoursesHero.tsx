import { Code, Laptop, Zap, Globe } from "lucide-react";

const CoursesHero = () => {
    const features = [
        {
            icon: Code,
            title: "Hands-on Projects",
            description: "Build real-world applications",
        },
        {
            icon: Laptop,
            title: "Live Coding Sessions",
            description: "Learn directly from experts",
        },
        {
            icon: Zap,
            title: "Self-Paced Learning",
            description: "Study at your own speed",
        },
        {
            icon: Globe,
            title: "Community Support",
            description: "Connect with fellow learners",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-linear-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-2 xs:px-4 py-12 sm:py-16 md:py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="inner-wrapper relative pt-12">
                <div className="max-w-3xl mx-auto text-center space-y-6">

                    {/* Heading */}
                    <h1 className="massive-text font-bold text-slate-900 dark:text-white leading-tight">
                        Explore Our{" "}
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-blue-600">
                            Programming Courses
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="big-text-5 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        From web development to data science, find the perfect course to advance your programming career. Learn from industry experts and build real-world projects.
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div
                                    key={index}
                                    className="p-4 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 mb-3">
                                        <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                                    </div>
                                    <div className="text-sm font-semibold text-slate-900 dark:text-white mb-1">
                                        {feature.title}
                                    </div>
                                    <div className="small-text text-slate-600 dark:text-slate-400">
                                        {feature.description}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoursesHero;