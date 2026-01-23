import { CheckCircle2 } from "lucide-react";
import type { Course } from "@/types/courses.types";

interface CourseDetailsContentProps {
    course: Course;
}

const CourseDetailsContent = ({ course }: CourseDetailsContentProps) => {
    // Parse learning outcomes and prerequisites
    const learningOutcomes = course.what_you_will_learn
        .split("\n")
        .filter((item) => item.trim().startsWith("-"))
        .map((item) => item.replace("-", "").trim());

    const prerequisites = course.prerequisites
        .split("\n")
        .filter((item) => item.trim().startsWith("-"))
        .map((item) => item.replace("-", "").trim());

    const requirements = course.requirements
        .split("\n")
        .filter((item) => item.trim().startsWith("-"))
        .map((item) => item.replace("-", "").trim());

    return (
        <div className="space-y-8">
            {/* About This Course */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                <h2 className="big-text-3 font-bold text-slate-900 dark:text-white">
                    About This Course
                </h2>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p className="normal-text text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                        {course.description}
                    </p>
                </div>
            </div>

            {/* What You'll Learn */}
            <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                <h2 className="big-text-3 font-bold text-slate-900 dark:text-white">
                    What You'll Learn
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                    {learningOutcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                            <p className="normal-text-2 text-slate-700 dark:text-slate-300">
                                {outcome}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Prerequisites */}
            {prerequisites.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                    <h2 className="big-text-3 font-bold text-slate-900 dark:text-white">
                        Prerequisites
                    </h2>
                    <ul className="space-y-3">
                        {prerequisites.map((prereq, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 shrink-0 mt-2" />
                                <p className="normal-text-2 text-slate-700 dark:text-slate-300">
                                    {prereq}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Requirements */}
            {requirements.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                    <h2 className="big-text-3 font-bold text-slate-900 dark:text-white">
                        Requirements
                    </h2>
                    <ul className="space-y-3">
                        {requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 shrink-0 mt-2" />
                                <p className="normal-text-2 text-slate-700 dark:text-slate-300">
                                    {requirement}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* FAQ */}
            {course.faq.length > 0 && (
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
                    <h2 className="big-text-3 font-bold text-slate-900 dark:text-white">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {course.faq.map((faq, index) => (
                            <div
                                key={index}
                                className="pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0"
                            >
                                <h3 className="normal-text font-semibold text-slate-900 dark:text-white mb-2">
                                    {faq.question}
                                </h3>
                                <p className="normal-text-2 text-slate-600 dark:text-slate-400">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CourseDetailsContent;