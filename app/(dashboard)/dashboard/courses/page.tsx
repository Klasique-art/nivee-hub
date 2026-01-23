import { BookOpen } from "lucide-react";
import { DashboardEnrolledCourseCard } from "@/components";
import { dashboardData } from "@/data/dummy.dashboard";

const CoursesPage = () => {
    const enrolledCourses = dashboardData.enrolled_courses.filter(c => c.status === 'active');

    return (
        <main className='dash-page space-y-6'>
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="big-text-2 font-bold text-slate-900 dark:text-white">
                        My Courses
                    </h1>
                    <p className="normal-text text-slate-600 dark:text-slate-400 mt-1">
                        {enrolledCourses.length} enrolled course{enrolledCourses.length !== 1 ? 's' : ''}
                    </p>
                </div>
            </div>

            {/* Courses Grid */}
            {enrolledCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {enrolledCourses.map((course) => (
                        <DashboardEnrolledCourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <BookOpen className="w-10 h-10 text-slate-400" />
                    </div>
                    <h3 className="big-text-4 font-bold text-slate-900 dark:text-white mb-2">
                        No Enrolled Courses
                    </h3>
                    <p className="normal-text text-slate-600 dark:text-slate-400">
                        Start your learning journey by enrolling in a course
                    </p>
                </div>
            )}
        </main>
    );
};

export default CoursesPage;