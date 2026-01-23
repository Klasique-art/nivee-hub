import { Globe } from "lucide-react";

import type { Course } from "@/types/courses.types";
import {CourseEnrollmentCard} from "@/components";

interface CourseDetailsSidebarProps {
    course: Course;
}

const CourseDetailsSidebar = ({ course }: CourseDetailsSidebarProps) => {
    return (
        <div className="space-y-6">
            {/* Enrollment Card */}
            <CourseEnrollmentCard course={course} />

            {/* Tags */}
            {course.tags.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                    <h3 className="big-text-4 font-bold text-slate-900 dark:text-white">
                        Topics Covered
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {course.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-flex px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 small-text text-slate-700 dark:text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Course Stats */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                <h3 className="big-text-4 font-bold text-slate-900 dark:text-white">
                    Course Statistics
                </h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="small-text text-slate-600 dark:text-slate-400">
                                Enrollment Progress
                            </span>
                            <span className="small-text font-semibold text-slate-900 dark:text-white">
                                {Math.round((course.enrolled_count / course.max_students) * 100)}%
                            </span>
                        </div>
                        <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full"
                                style={{
                                    width: `${(course.enrolled_count / course.max_students) * 100}%`,
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                        <div>
                            <p className="small-text text-slate-500 dark:text-slate-400">
                                Total Duration
                            </p>
                            <p className="normal-text font-bold text-slate-900 dark:text-white">
                                {course.duration_weeks * course.hours_per_week} hours
                            </p>
                        </div>
                        <div>
                            <p className="small-text text-slate-500 dark:text-slate-400">
                                Level
                            </p>
                            <p className="normal-text font-bold text-slate-900 dark:text-white capitalize">
                                {course.difficulty_level}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Share Course */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                <h3 className="big-text-4 font-bold text-slate-900 dark:text-white">
                    Share This Course
                </h3>
                <div className="flex items-center gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors">
                        <Globe className="w-4 h-4" />
                        <span className="small-text font-medium">Copy Link</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsSidebar;