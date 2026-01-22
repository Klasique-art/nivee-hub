import Image from "next/image";
import Link from "next/link";
import { Clock, Users, Calendar, TrendingUp } from "lucide-react";

import type { Course } from "@/types/courses.types";
import { placeholderImg } from "@/data/constants";

interface CourseCardProps {
    course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
    const hasDiscount = course.early_bird_price && parseFloat(course.early_bird_price) < parseFloat(course.price);
    const discountPercentage = hasDiscount
        ? Math.round(((parseFloat(course.price) - parseFloat(course.early_bird_price!)) / parseFloat(course.price)) * 100)
        : 0;

    const spotsLeft = course.seats_available;
    const isAlmostFull = spotsLeft <= 10 && spotsLeft > 0;
    const isFull = spotsLeft === 0;

    const instructorNames = course.instructor_names || [];
    const hasInstructors = instructorNames.length > 0;

    return (
        <Link
            href={`/courses/${course.slug}`}
            className="group block bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 transition-all hover:shadow-xl hover:-translate-y-1"
        >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <Image
                    src={course.thumbnail || placeholderImg}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {course.is_featured && (
                        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-600 text-white small-text font-semibold shadow-lg">
                            <TrendingUp className="w-3 h-3" />
                            Featured
                        </span>
                    )}
                    {hasDiscount && (
                        <span className="inline-flex px-2 py-1 rounded-lg bg-orange-600 text-white small-text font-semibold shadow-lg">
                            {discountPercentage}% OFF
                        </span>
                    )}
                </div>

                {/* Availability Badge */}
                {(isAlmostFull || isFull) && (
                    <div className="absolute top-3 right-3">
                        <span className={`inline-flex px-2 py-1 rounded-lg small-text font-semibold shadow-lg ${isFull ? "bg-red-600 text-white" : "bg-yellow-600 text-white"
                            }`}>
                            {isFull ? "Full" : `${spotsLeft} spots left`}
                        </span>
                    </div>
                )}

                {/* Difficulty Level */}
                <div className="absolute bottom-3 left-3">
                    <span className={`inline-flex px-2 py-1 rounded-lg small-text font-semibold ${course.difficulty_level === "beginner"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : course.difficulty_level === "intermediate"
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                                : "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400"
                        }`}>
                        {course.difficulty_level.charAt(0).toUpperCase() + course.difficulty_level.slice(1)}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-3 space-y-4">
                {/* Category */}
                <div>
                    <span className="inline-flex px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 small-text font-medium text-slate-700 dark:text-slate-300">
                        {course.category}
                    </span>
                </div>

                {/* Title */}
                <h3 className="big-text-4 font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {course.title}
                </h3>

                {/* Description */}
                <p className="normal-text-2 text-slate-600 dark:text-slate-400 line-clamp-2">
                    {course.short_description}
                </p>

                {/* Instructors */}
                {hasInstructors && (
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {instructorNames.slice(0, 2).map((name, idx) => (
                                <div
                                    key={idx}
                                    className="w-8 h-8 rounded-full bg-linear-to-br from-emerald-500 to-blue-500 flex items-center justify-center ring-2 ring-white dark:ring-slate-800 text-white small-text font-bold"
                                >
                                    {name.split(" ").map(n => n[0]).join("")}
                                </div>
                            ))}
                        </div>
                        <span className="small-text text-slate-600 dark:text-slate-400">
                            {instructorNames[0]}
                            {instructorNames.length > 1 && ` +${instructorNames.length - 1}`}
                        </span>
                    </div>
                )}

                {/* Meta Info */}
                <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-slate-500" />
                        <span className="small-text text-slate-600 dark:text-slate-400">
                            {course.duration_weeks}w
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-slate-500" />
                        <span className="small-text text-slate-600 dark:text-slate-400">
                            {course.hours_per_week}h/w
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-slate-500" />
                        <span className="small-text text-slate-600 dark:text-slate-400">
                            {course.enrolled_count}
                        </span>
                    </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-3 border-t border-slate-200 dark:border-slate-700">
                    <div>
                        {hasDiscount ? (
                            <div className="flex items-baseline gap-2">
                                <span className="big-text-4 font-bold text-emerald-600 dark:text-emerald-400">
                                    GHS {parseFloat(course.early_bird_price!).toLocaleString()}
                                </span>
                                <span className="normal-text-2 line-through text-slate-500">
                                    GHS {parseFloat(course.price).toLocaleString()}
                                </span>
                            </div>
                        ) : (
                            <span className="big-text-4 font-bold text-slate-900 dark:text-white">
                                GHS {parseFloat(course.price).toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CourseCard;