import type { Metadata } from "next";
import { CoursesHero, CoursesClient } from "@/components";
import { courses } from "@/data/dummy.courses";

export const metadata: Metadata = {
    title: "Browse Courses | Niveel Hub - Programming Courses in Ghana",
    description: "Explore our comprehensive range of programming courses including web development, mobile apps, data science, and more. Learn from expert instructors and build real-world projects.",
    keywords: [
        "programming courses Ghana",
        "web development courses",
        "mobile app development",
        "data science courses",
        "coding bootcamp Ghana",
        "learn programming online",
        "Python courses",
        "React courses",
        "Django courses",
        "Niveel Hub courses"
    ],
    openGraph: {
        title: "Browse Programming Courses | Niveel Hub",
        description: "Find the perfect programming course to advance your career. From beginner to advanced levels.",
        images: [
            {
                url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=630&fit=crop",
                width: 1200,
                height: 630,
                alt: "Niveel Hub Programming Courses"
            }
        ],
    },
};

const CoursesPage = () => {
    // Filter only published and active courses
    const publishedCourses = courses.filter(
        (course) => course.is_published && course.status === "active"
    );

    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <CoursesHero />

            {/* Courses Section */}
            <section className="bg-white dark:bg-slate-900 px-2 xs:px-4 py-8 xs:py-10 sm:py-14 md:py-16">
                <div className="inner-wrapper">
                    <CoursesClient initialCourses={publishedCourses} />
                </div>
            </section>
        </main>
    );
};

export default CoursesPage;