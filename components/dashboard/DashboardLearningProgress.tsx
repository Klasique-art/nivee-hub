"use client";

import { LearningProgressData } from "@/types/dashboard.types";

interface DashboardLearningProgressProps {
    progressData: LearningProgressData[];
}

const DashboardLearningProgress = ({ progressData }: DashboardLearningProgressProps) => {
    const totalProgress = progressData.reduce((acc, curr) => acc + curr.progress_percentage, 0);
    const averageProgress = Math.round(totalProgress / progressData.length);

    return (
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <h2 className="big-text-4 font-bold text-slate-900 dark:text-white mb-4">
                Learning Progress
            </h2>

            {/* Average Progress */}
            <div className="mb-6 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <div className="flex items-center justify-between mb-2">
                    <span className="normal-text text-slate-600 dark:text-slate-400">
                        Overall Progress
                    </span>
                    <span className="big-text-4 font-bold text-emerald-600 dark:text-emerald-400">
                        {averageProgress}%
                    </span>
                </div>
                <div className="h-3 bg-slate-200 dark:bg-slate-600 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all"
                        style={{ width: `${averageProgress}%` }}
                    />
                </div>
            </div>

            {/* Individual Course Progress */}
            <div className="space-y-4">
                {progressData.map((course, index) => (
                    <div key={index}>
                        <div className="flex items-center justify-between mb-2">
                            <span className="normal-text-2 font-medium text-slate-900 dark:text-white truncate">
                                {course.course_title}
                            </span>
                            <span className="small-text font-semibold text-slate-600 dark:text-slate-400">
                                {course.progress_percentage}%
                            </span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full transition-all"
                                style={{
                                    width: `${course.progress_percentage}%`,
                                    backgroundColor: course.color,
                                }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Legend */}
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-700">
                <p className="small-text text-slate-500 dark:text-slate-400 mb-2">
                    Course Legend:
                </p>
                <div className="flex flex-wrap gap-3">
                    {progressData.map((course, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <div
                                className="w-3 h-3 rounded-full"
                                style={{ backgroundColor: course.color }}
                            />
                            <span className="small-text text-slate-600 dark:text-slate-400">
                                {course.course_title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DashboardLearningProgress;