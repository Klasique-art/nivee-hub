import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Play } from "lucide-react";
import { EnrolledCourse } from "@/types/dashboard.types";

interface DashboardMyCoursesProps {
    courses: EnrolledCourse[];
}

const DashboardMyCourses = ({ courses }: DashboardMyCoursesProps) => {
    const activeCourses = courses.filter(c => c.status === 'active').slice(0, 3);

    return (
        <section className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
            <div className="flex items-center justify-between mb-4">
                <h2 className="big-text-4 font-bold text-slate-900 dark:text-white">
                    My Courses
                </h2>
                <Link
                    href="/dashboard/courses"
                    className="small-text font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 flex items-center gap-1"
                >
                    View All
                    <ChevronRight className="w-4 h-4" />
                </Link>
            </div>

            <div className="space-y-4">
                {activeCourses.length > 0 ? (
                    activeCourses.map((course) => (
                        <Link
                            key={course.id}
                            href={`/courses/${course.course_slug}`}
                            className="block group"
                        >
                            <div className="flex gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                                <div className="relative w-24 h-16 rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={course.course_thumbnail}
                                        alt={course.course_title}
                                        fill
                                        className="object-cover"
                                        sizes="96px"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                        <Play className="w-6 h-6 text-white opacity-80" />
                                    </div>
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className="normal-text font-semibold text-slate-900 dark:text-white truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                                        {course.course_title}
                                    </h3>
                                    <p className="small-text text-slate-500 dark:text-slate-400 mb-2">
                                        {course.instructor_names.join(", ")}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="space-y-1">
                                        <div className="flex items-center justify-between">
                                            <span className="small-text text-slate-600 dark:text-slate-400">
                                                {course.completed_lessons} of {course.total_lessons} lessons
                                            </span>
                                            <span className="small-text font-semibold text-emerald-600 dark:text-emerald-400">
                                                {course.progress_percentage}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all"
                                                style={{ width: `${course.progress_percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <div className="text-center py-8">
                        <p className="normal-text text-slate-600 dark:text-slate-400">
                            No active courses. Start learning today!
                        </p>
                        <Link
                            href="/courses"
                            className="inline-block mt-4 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg normal-text-2 font-medium transition-colors"
                        >
                            Browse Courses
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default DashboardMyCourses;