import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { courses } from "@/data/dummy.courses";
import { 
    CourseDetailsHero, 
    CourseDetailsContent, 
    CourseDetailsSidebar 
} from "@/components";
import { placeholderImg } from "@/data/constants";

type Props = {
    params: Promise<{ slug: string }>;
};

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return {
            title: "Course Not Found | Niveel Hub",
        };
    }

    return {
        title: `${course.title} | Niveel Hub`,
        description: course.short_description,
        keywords: [course.title, ...course.tags, course.category, "Niveel Hub"],
        openGraph: {
            title: course.title,
            description: course.short_description,
            images: [
                {
                    url: course.cover_image || placeholderImg,
                    width: 1200,
                    height: 630,
                    alt: course.title,
                },
            ],
        },
    };
}

// Generate static params for all courses
export async function generateStaticParams() {
    return courses.map((course) => ({
        slug: course.slug,
    }));
}

const CourseDetailsPage = async ({ params }: Props) => {
    const { slug } = await params;
    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Hero Section */}
            <CourseDetailsHero course={course} />

            {/* Main Content */}
            <section className="px-2 xs:px-4 py-8 sm:py-12">
                <div className="inner-wrapper">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left Column - Course Details */}
                        <div className="lg:col-span-2">
                            <CourseDetailsContent course={course} />
                        </div>

                        {/* Right Column - Sidebar */}
                        <div className="lg:col-span-1">
                            <CourseDetailsSidebar course={course} />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CourseDetailsPage;