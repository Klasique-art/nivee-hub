"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";

import type { Course } from "@/types/courses.types";
import CourseFilters, { type FilterState } from "./CourseFilters";
import {CourseCard} from "@/components";

interface CoursesClientProps {
    initialCourses: Course[];
}

const CoursesClient = ({ initialCourses }: CoursesClientProps) => {
    const [filters, setFilters] = useState<FilterState>({
        search: "",
        category: "all",
        difficulty: "all",
        priceRange: "all",
    });

    // Extract unique categories and difficulty levels
    const categories = useMemo(
        () => Array.from(new Set(initialCourses.map((c) => c.category))),
        [initialCourses]
    );

    const difficultyLevels = useMemo(
        () => Array.from(new Set(initialCourses.map((c) => c.difficulty_level))),
        [initialCourses]
    );

    // Filter courses based on current filters
    const filteredCourses = useMemo(() => {
        return initialCourses.filter((course) => {
            // Search filter
            if (filters.search && !course.title.toLowerCase().includes(filters.search.toLowerCase()) &&
                !course.short_description.toLowerCase().includes(filters.search.toLowerCase())) {
                return false;
            }

            // Category filter
            if (filters.category !== "all" && course.category !== filters.category) {
                return false;
            }

            // Difficulty filter
            if (filters.difficulty !== "all" && course.difficulty_level !== filters.difficulty) {
                return false;
            }

            // Price range filter
            if (filters.priceRange !== "all") {
                const price = parseFloat(course.current_price);
                const [min, max] = filters.priceRange.split("-").map(p => p.replace("+", ""));
                const minPrice = parseInt(min);
                const maxPrice = max ? parseInt(max) : Infinity;

                if (price < minPrice || price > maxPrice) {
                    return false;
                }
            }

            return true;
        });
    }, [initialCourses, filters]);

    return (
        <div className="space-y-8">
            {/* Filters */}
            <CourseFilters
                categories={categories}
                difficultyLevels={difficultyLevels}
                onFilterChange={setFilters}
            />

            {/* Results Count */}
            <div className="flex items-center justify-between">
                <p className="normal-text text-slate-600 dark:text-slate-400">
                    Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredCourses.length}</span> of{" "}
                    <span className="font-semibold">{initialCourses.length}</span> courses
                </p>
            </div>

            {/* Courses Grid */}
            {filteredCourses.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                        <Search className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="big-text-4 font-bold text-slate-900 dark:text-white mb-2">
                        No courses found
                    </h3>
                    <p className="normal-text text-slate-600 dark:text-slate-400">
                        Try adjusting your filters or search terms
                    </p>
                </div>
            )}
        </div>
    );
};

export default CoursesClient;