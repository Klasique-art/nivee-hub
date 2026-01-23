// ============================================================================
// DASHBOARD TYPES
// ============================================================================

export interface DashboardStats {
    enrolled_courses: number;
    completed_courses: number;
    in_progress_courses: number;
    total_assignments: number;
    pending_assignments: number;
    completed_assignments: number;
    upcoming_tests: number;
    completed_tests: number;
    coding_challenges_completed: number;
    total_coding_challenges: number;
    forum_posts: number;
    forum_replies: number;
    certificates_earned: number;
    total_learning_hours: number;
    current_streak_days: number;
    longest_streak_days: number;
}

export interface EnrolledCourse {
    id: string;
    course_id: string;
    course_title: string;
    course_slug: string;
    course_thumbnail: string;
    instructor_names: string[];
    progress_percentage: number;
    enrolled_at: string;
    last_accessed: string;
    next_lesson?: {
        id: string;
        title: string;
        lesson_type: string;
    } | null;
    total_lessons: number;
    completed_lessons: number;
    status: 'active' | 'completed' | 'paused';
}

export interface UpcomingDeadline {
    id: string;
    type: 'assignment' | 'test' | 'coding_challenge' | 'live_session';
    title: string;
    course_title: string;
    course_slug: string;
    due_date: string;
    is_overdue: boolean;
    status: 'pending' | 'submitted' | 'graded';
    priority: 'high' | 'medium' | 'low';
}

export interface RecentActivity {
    id: string;
    type: 'lesson_completed' | 'assignment_submitted' | 'test_completed' | 'forum_post' | 'certificate_earned' | 'course_enrolled';
    title: string;
    description: string;
    course_title?: string;
    timestamp: string;
    icon?: string;
    link?: string;
}

export interface LearningProgressData {
    course_id: string;
    course_title: string;
    progress_percentage: number;
    color: string;
}

export interface CourseProgressByWeek {
    week: string;
    hours: number;
}

export interface DashboardData {
    stats: DashboardStats;
    enrolled_courses: EnrolledCourse[];
    upcoming_deadlines: UpcomingDeadline[];
    recent_activities: RecentActivity[];
    learning_progress: LearningProgressData[];
    weekly_progress: CourseProgressByWeek[];
}