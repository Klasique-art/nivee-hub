import { Users, Play } from "lucide-react";
import Image from "next/image";
import { EnrolledCourse } from "@/types/dashboard.types";

interface DashboardEnrolledCourseCardProps {
    course: EnrolledCourse;
}

const DashboardEnrolledCourseCard = ({ course }: DashboardEnrolledCourseCardProps) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
    };

    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-lg transition-shadow">
            {/* Course Image */}
            <div className="relative h-48">
                <Image
                    src={course.course_thumbnail}
                    alt={course.course_title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Status Badge */}
                <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-blue-600 text-white small-text font-semibold shadow-lg">
                        <Play className="w-3 h-3" />
                        In Progress
                    </span>
                </div>
            </div>

            {/* Course Content */}
            <div className="p-3 space-y-4">
                {/* Title */}
                <h3 className="big-text-5 font-bold text-slate-900 dark:text-white line-clamp-2">
                    {course.course_title}
                </h3>

                {/* Instructors */}
                <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-slate-500" />
                    <span className="small-text text-slate-600 dark:text-slate-400">
                        {course.instructor_names.join(", ")}
                    </span>
                </div>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-200 dark:border-slate-700">
                    <div>
                        <p className="small-text text-slate-500 dark:text-slate-400 mb-1">
                            Enrolled
                        </p>
                        <p className="normal-text-2 font-semibold text-slate-900 dark:text-white">
                            {formatDate(course.enrolled_at)}
                        </p>
                    </div>
                    <div>
                        <p className="small-text text-slate-500 dark:text-slate-400 mb-1">
                            Last Accessed
                        </p>
                        <p className="normal-text-2 font-semibold text-slate-900 dark:text-white">
                            {formatDate(course.last_accessed)}
                        </p>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <span className="small-text text-slate-600 dark:text-slate-400">
                            Progress
                        </span>
                        <span className="small-text font-semibold text-emerald-600 dark:text-emerald-400">
                            {course.progress_percentage}%
                        </span>
                    </div>
                    <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-emerald-600 dark:bg-emerald-500 rounded-full transition-all"
                            style={{ width: `${course.progress_percentage}%` }}
                        />
                    </div>
                    <p className="small-text text-slate-500 dark:text-slate-400">
                        {course.completed_lessons} of {course.total_lessons} lessons completed
                    </p>
                </div>

                {/* Next Lesson */}
                {course.next_lesson && (
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                        <p className="small-text text-blue-800 dark:text-blue-200 font-medium mb-1">
                            Next Lesson:
                        </p>
                        <p className="small-text text-blue-900 dark:text-blue-100">
                            {course.next_lesson.title}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DashboardEnrolledCourseCard;