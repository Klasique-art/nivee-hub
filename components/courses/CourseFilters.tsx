"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface CourseFiltersProps {
    categories: string[];
    difficultyLevels: string[];
    onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
    search: string;
    category: string;
    difficulty: string;
    priceRange: string;
}

const CourseFilters = ({ categories, difficultyLevels, onFilterChange }: CourseFiltersProps) => {
    const [filters, setFilters] = useState<FilterState>({
        search: "",
        category: "all",
        difficulty: "all",
        priceRange: "all",
    });
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const handleFilterChange = (key: keyof FilterState, value: string) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onFilterChange(newFilters);
    };

    const clearFilters = () => {
        const clearedFilters = {
            search: "",
            category: "all",
            difficulty: "all",
            priceRange: "all",
        };
        setFilters(clearedFilters);
        onFilterChange(clearedFilters);
    };

    const hasActiveFilters = filters.category !== "all" || filters.difficulty !== "all" || filters.priceRange !== "all" || filters.search !== "";

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search courses..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white normal-text focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>

            {/* Mobile Filter Toggle */}
            <div className="flex items-center justify-between lg:hidden">
                <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 normal-text font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                >
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                    {hasActiveFilters && (
                        <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    )}
                </button>
                {hasActiveFilters && (
                    <button
                        onClick={clearFilters}
                        className="flex items-center gap-1 px-3 py-2 rounded-lg normal-text-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                        <X className="w-4 h-4" />
                        Clear
                    </button>
                )}
            </div>

            {/* Filters Grid */}
            <div className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-4 ${showMobileFilters ? "block" : "hidden lg:grid"}`}>
                {/* Category Filter */}
                <div>
                    <label htmlFor="category" className="block normal-text-2 font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Category
                    </label>
                    <select
                        id="category"
                        value={filters.category}
                        onChange={(e) => handleFilterChange("category", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white normal-text-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        <option value="all">All Categories</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                    <label htmlFor="difficulty" className="block normal-text-2 font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Difficulty
                    </label>
                    <select
                        id="difficulty"
                        value={filters.difficulty}
                        onChange={(e) => handleFilterChange("difficulty", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white normal-text-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        <option value="all">All Levels</option>
                        {difficultyLevels.map((level) => (
                            <option key={level} value={level}>
                                {level.charAt(0).toUpperCase() + level.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Price Range Filter */}
                <div>
                    <label htmlFor="priceRange" className="block normal-text-2 font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Price Range
                    </label>
                    <select
                        id="priceRange"
                        value={filters.priceRange}
                        onChange={(e) => handleFilterChange("priceRange", e.target.value)}
                        className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white normal-text-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                        <option value="all">Any Price</option>
                        <option value="0-1000">Under GHS 1,000</option>
                        <option value="1000-2000">GHS 1,000 - 2,000</option>
                        <option value="2000-3000">GHS 2,000 - 3,000</option>
                        <option value="3000+">Over GHS 3,000</option>
                    </select>
                </div>

                {/* Clear Filters - Desktop */}
                <div className="hidden lg:flex items-end">
                    {hasActiveFilters && (
                        <button
                            onClick={clearFilters}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-red-300 dark:border-red-700 bg-white dark:bg-slate-800 normal-text-2 font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                        >
                            <X className="w-4 h-4" />
                            Clear Filters
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CourseFilters;