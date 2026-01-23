import Link from "next/link";
import {
    Clock,
    Calendar,
    BarChart3,
    TrendingUp,
    ChevronRight,
} from "lucide-react";

import type { Course } from "@/types/courses.types";

interface CourseDetailsHeroProps {
    course: Course;
}

const CourseDetailsHero = ({ course }: CourseDetailsHeroProps) => {
    const hasDiscount =
        course.early_bird_price &&
        parseFloat(course.early_bird_price) < parseFloat(course.price);
    const discountPercentage = hasDiscount
        ? Math.round(
            ((parseFloat(course.price) - parseFloat(course.early_bird_price!)) /
                parseFloat(course.price)) *
            100
        )
        : 0;

    const instructorNames = course.instructor_names || [];
    const hasInstructors = instructorNames.length > 0;

    return (
        <section className="relative bg-linear-to-br from-emerald-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 px-2 xs:px-4 py-8 sm:py-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}
                />
            </div>

            <div className="inner-wrapper relative pt-16">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 small-text text-slate-600 dark:text-slate-400 mb-6">
                    <Link
                        href="/"
                        className="hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                        Home
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <Link
                        href="/courses"
                        className="hover:text-emerald-600 dark:hover:text-emerald-400"
                    >
                        Courses
                    </Link>
                    <ChevronRight className="w-4 h-4" />
                    <span className="text-slate-900 dark:text-white truncate max-w-50">
                        {course.title}
                    </span>
                </nav>

                <div className="max-w-4xl space-y-6">
                    {/* Category & Status Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 small-text font-medium text-slate-700 dark:text-slate-300">
                            {course.category}
                        </span>
                        <span
                            className={`inline-flex px-3 py-1 rounded-lg small-text font-semibold ${course.difficulty_level === "beginner"
                                    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                                    : course.difficulty_level === "intermediate"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                        : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                                }`}
                        >
                            {course.difficulty_level.charAt(0).toUpperCase() +
                                course.difficulty_level.slice(1)}
                        </span>
                        {course.is_featured && (
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-emerald-600 text-white small-text font-semibold">
                                <TrendingUp className="w-3 h-3" />
                                Featured
                            </span>
                        )}
                        {hasDiscount && (
                            <span className="inline-flex px-3 py-1 rounded-lg bg-orange-600 text-white small-text font-semibold">
                                {discountPercentage}% OFF Early Bird
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="big-text-1 font-bold text-slate-900 dark:text-white leading-tight">
                        {course.title}
                    </h1>

                    {/* Short Description */}
                    <p className="big-text-5 text-slate-600 dark:text-slate-300">
                        {course.short_description}
                    </p>

                    {/* Course Stats */}
                    <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-emerald-100 dark:bg-emerald-900/30">
                                <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                            </div>
                            <div>
                                <div className="small-text text-slate-500 dark:text-slate-400">
                                    Enrolled
                                </div>
                                <div className="normal-text font-semibold text-slate-900 dark:text-white">
                                    {course.enrolled_count} students
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div>
                                <div className="small-text text-slate-500 dark:text-slate-400">
                                    Duration
                                </div>
                                <div className="normal-text font-semibold text-slate-900 dark:text-white">
                                    {course.duration_weeks} weeks
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                                <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                            </div>
                            <div>
                                <div className="small-text text-slate-500 dark:text-slate-400">
                                    Commitment
                                </div>
                                <div className="normal-text font-semibold text-slate-900 dark:text-white">
                                    {course.hours_per_week}h/week
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Instructors */}
                    {hasInstructors && (
                        <div className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 max-w-md">
                            <div className="flex -space-x-3">
                                {instructorNames.slice(0, 3).map((name, idx) => (
                                    <div
                                        key={idx}
                                        className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-500 to-blue-500 flex items-center justify-center ring-4 ring-white dark:ring-slate-800 text-white normal-text font-bold"
                                    >
                                        {name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                    </div>
                                ))}
                            </div>
                            <div>
                                <div className="small-text text-slate-500 dark:text-slate-400">
                                    Instructors
                                </div>
                                <div className="normal-text font-semibold text-slate-900 dark:text-white">
                                    {instructorNames.slice(0, 2).join(", ")}
                                    {instructorNames.length > 2 &&
                                        ` +${instructorNames.length - 2} more`}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CourseDetailsHero;