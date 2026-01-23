"use client";

import Image from "next/image";
import Link from "next/link";
import { Play, CalendarClock, Users, FileText, CheckCircle2 } from "lucide-react";

import type { Course } from "@/types/courses.types";
import { placeholderImg } from "@/data/constants";

interface CourseEnrollmentCardProps {
    course: Course;
}

const CourseEnrollmentCard = ({ course }: CourseEnrollmentCardProps) => {
    const hasDiscount =
        course.early_bird_price &&
        parseFloat(course.early_bird_price) < parseFloat(course.price);

    const spotsLeft = course.seats_available;
    const isAlmostFull = spotsLeft <= 10 && spotsLeft > 0;
    const isFull = spotsLeft === 0;

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="sticky top-24">
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl">
                {/* Course Image */}
                <div className="relative h-48">
                    <Image
                        src={course.cover_image || placeholderImg}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    {course.promo_video_url && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <button className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 hover:bg-white transition-colors">
                                <Play className="w-8 h-8 text-emerald-600 ml-1" />
                            </button>
                        </div>
                    )}
                </div>

                <div className="p-4 space-y-6">
                    {/* Price */}
                    <div>
                        {hasDiscount ? (
                            <>
                                <div className="flex items-baseline gap-3">
                                    <span className="big-text-2 font-bold text-emerald-600 dark:text-emerald-400">
                                        {course.currency}{" "}
                                        {parseFloat(course.early_bird_price!).toLocaleString()}
                                    </span>
                                    <span className="big-text text-slate-500">
                                        per year
                                    </span>
                                </div>
                            </>
                        ) : (
                            <span className="big-text-2 font-bold text-slate-900 dark:text-white">
                                {course.currency} {parseFloat(course.price).toLocaleString()}
                            </span>
                        )}
                    </div>

                    {/* Availability Status */}
                    {(isAlmostFull || isFull) && (
                        <div
                            className={`p-3 rounded-lg ${isFull
                                ? "bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                                : "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800"
                                }`}
                        >
                            <p
                                className={`small-text font-semibold ${isFull
                                    ? "text-red-800 dark:text-red-400"
                                    : "text-yellow-800 dark:text-yellow-400"
                                    }`}
                            >
                                {isFull ? "⚠️ This cohort is full" : `🔥 Only ${spotsLeft} spots remaining!`}
                            </p>
                        </div>
                    )}

                    {/* Enroll Button */}
                    <button
                        disabled={isFull}
                        className={`w-full py-4 rounded-xl font-bold big-text-5 transition-all ${isFull
                            ? "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed"
                            : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl"
                            }`}
                    >
                        {isFull ? "Cohort Full" : "Enroll Now"}
                    </button>

                    {/* Course Details */}
                    <div className="space-y-3 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <div className="flex items-start gap-3">
                            <CalendarClock className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <p className="small-text text-slate-500 dark:text-slate-400">
                                    Starts
                                </p>
                                <p className="normal-text font-semibold text-slate-900 dark:text-white">
                                    {formatDate(course.start_date)}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Users className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                            <div className="flex-1">
                                <p className="small-text text-slate-500 dark:text-slate-400">
                                    Seats Available
                                </p>
                                <p className="normal-text font-semibold text-slate-900 dark:text-white">
                                    {course.seats_available} of {course.max_students}
                                </p>
                            </div>
                        </div>

                        {course.syllabus && (
                            <div className="flex items-start gap-3">
                                <FileText className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <Link
                                        href={course.syllabus}
                                        className="normal-text font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                                    >
                                        Download Syllabus
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Features */}
                    <div className="space-y-2 pt-6 border-t border-slate-200 dark:border-slate-700">
                        <p className="normal-text font-semibold text-slate-900 dark:text-white">
                            This course includes:
                        </p>
                        <ul className="space-y-2">
                            {course.additional_info?.live_sessions && (
                                <li className="flex items-center gap-2 small-text text-slate-600 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                    live sessions
                                </li>
                            )}
                            {course.additional_info?.project_count && (
                                <li className="flex items-center gap-2 small-text text-slate-600 dark:text-slate-400">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                    hands-on projects
                                </li>
                            )}
                            <li className="flex items-center gap-2 small-text text-slate-600 dark:text-slate-400">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                coding challenges
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseEnrollmentCard;