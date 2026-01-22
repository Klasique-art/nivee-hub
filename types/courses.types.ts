// ============================================================================
// COURSE/COHORT TYPES (Based on backend Cohort model)
// ============================================================================

export type CohortStatus = 'draft' | 'upcoming' | 'active' | 'completed' | 'cancelled';
export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type Currency = 'USD' | 'GHS' | 'NGN' | 'KES' | 'ZAR';

// Main Course/Cohort interface
export interface Course {
    // Primary fields
    id: string; // UUID
    title: string;
    slug: string;
    description: string;
    short_description: string;

    // Instructors (array of user IDs - populated with user data in API)
    instructors: string[]; // UUIDs
    instructor_names?: string[]; // Computed for display

    // Media
    cover_image?: string | null;
    thumbnail?: string | null;
    promo_video_url?: string | null;

    // Pricing
    price: string; // Decimal as string
    currency: Currency;
    early_bird_price?: string | null;
    early_bird_deadline?: string | null; // ISO datetime
    current_price: string; // Computed property from backend

    // Schedule
    start_date: string; // ISO datetime
    end_date: string; // ISO datetime
    registration_start: string; // ISO datetime
    registration_end: string; // ISO datetime

    // Capacity
    max_students: number;
    min_students: number;
    enrolled_count: number; // Computed property from backend
    seats_available: number; // Computed property from backend

    // Program details
    duration_weeks: number;
    hours_per_week: number;
    difficulty_level: DifficultyLevel;

    // Requirements and outcomes
    prerequisites: string;
    what_you_will_learn: string;
    requirements: string;

    // Tags and categorization
    tags: string[];
    category: string;

    // Status
    status: CohortStatus;
    is_published: boolean;
    is_featured: boolean;

    // Metadata
    syllabus?: string | null; // File URL
    faq: FAQItem[];
    additional_info: Record<string, any>;

    // Timestamps
    created_at: string; // ISO datetime
    updated_at: string; // ISO datetime
    published_at?: string | null; // ISO datetime

    // Created by
    created_by?: string | null; // UUID
}

export interface FAQItem {
    question: string;
    answer: string;
}

// Course Module (Section)
export interface CourseModule {
    id: string; // UUID
    cohort: string; // UUID
    title: string;
    description: string;
    order: number;
    start_date?: string | null;
    end_date?: string | null;
    is_published: boolean;
    created_at: string;
    updated_at: string;
    lessons?: CourseLesson[]; // Populated when fetching module details
}

// Lesson types
export type LessonType = 'video' | 'reading' | 'quiz' | 'assignment' | 'live_session' | 'coding';

export interface CourseLesson {
    id: string; // UUID
    module: string; // UUID
    title: string;
    description: string;
    lesson_type: LessonType;
    order: number;
    content: string;
    video_url?: string | null;
    duration_minutes?: number | null;
    attachments: AttachmentItem[];
    scheduled_at?: string | null;
    is_published: boolean;
    is_free_preview: boolean;
    created_at: string;
    updated_at: string;
}

export interface AttachmentItem {
    name: string;
    url: string;
    type: string;
    size?: number;
}

// Course Review
export interface CourseReview {
    id: string; // UUID
    cohort: string; // UUID
    student: string; // UUID
    student_name: string; // Computed from backend
    rating: number; // 1-5
    title: string;
    comment: string;
    is_approved: boolean;
    is_featured: boolean;
    created_at: string;
    updated_at: string;
}

// ============================================================================
// ASSIGNMENT TYPES
// ============================================================================

export type AssignmentStatus = 'draft' | 'submitted' | 'graded' | 'returned';

export interface Assignment {
    id: string; // UUID
    cohort: string; // UUID
    module?: string | null; // UUID
    lesson?: string | null; // UUID
    created_by: string; // UUID
    title: string;
    description: string;
    instructions: string;
    attachments: AttachmentItem[];
    max_score: string; // Decimal as string
    passing_score?: string | null;
    due_date: string; // ISO datetime
    late_submission_allowed: boolean;
    late_penalty_percentage: string; // Decimal as string
    allow_resubmission: boolean;
    max_submissions: number;
    is_published: boolean;
    created_at: string;
    updated_at: string;
    published_at?: string | null;
}

export interface AssignmentSubmission {
    id: string; // UUID
    assignment: string; // UUID
    student: string; // UUID
    content: string;
    attachments: AttachmentItem[];
    status: AssignmentStatus;
    submission_number: number;
    score?: string | null;
    feedback: string;
    graded_by?: string | null; // UUID
    created_at: string;
    submitted_at?: string | null;
    graded_at?: string | null;
    updated_at: string;
    is_late: boolean; // Computed
    final_score?: string | null; // Computed with penalty
}

// ============================================================================
// TEST/QUIZ TYPES
// ============================================================================

export type QuestionType = 'multiple_choice' | 'true_false' | 'short_answer' | 'essay' | 'code';
export type TestAttemptStatus = 'in_progress' | 'submitted' | 'graded';

export interface Test {
    id: string; // UUID
    cohort: string; // UUID
    module?: string | null; // UUID
    created_by: string; // UUID
    title: string;
    description: string;
    instructions: string;
    time_limit_minutes?: number | null;
    passing_score: string; // Decimal as string
    max_attempts: number;
    randomize_questions: boolean;
    show_correct_answers: boolean;
    show_results_immediately: boolean;
    available_from: string; // ISO datetime
    available_until: string; // ISO datetime
    is_published: boolean;
    created_at: string;
    updated_at: string;
    published_at?: string | null;
    total_points: number; // Computed
    is_available: boolean; // Computed
}

export interface Question {
    id: string; // UUID
    test: string; // UUID
    question_text: string;
    question_type: QuestionType;
    order: number;
    points: string; // Decimal as string
    options: string[]; // For multiple choice
    correct_answer: any; // JSON field
    explanation: string;
    created_at: string;
    updated_at: string;
}

export interface TestAttempt {
    id: string; // UUID
    test: string; // UUID
    student: string; // UUID
    status: TestAttemptStatus;
    attempt_number: number;
    score?: string | null;
    percentage?: string | null;
    started_at: string;
    submitted_at?: string | null;
    time_spent_minutes: number;
    is_passed: boolean; // Computed
}

// ============================================================================
// CODING ASSESSMENT TYPES
// ============================================================================

export type ProgrammingLanguage = 'python' | 'javascript' | 'java' | 'cpp' | 'c' | 'go' | 'rust';
export type CodingDifficulty = 'easy' | 'medium' | 'hard';
export type SubmissionStatus =
    | 'pending'
    | 'running'
    | 'accepted'
    | 'wrong_answer'
    | 'runtime_error'
    | 'time_limit_exceeded'
    | 'memory_limit_exceeded'
    | 'compilation_error';

export interface CodingProblem {
    id: string; // UUID
    cohort: string; // UUID
    module?: string | null; // UUID
    created_by: string; // UUID
    title: string;
    description: string;
    difficulty: CodingDifficulty;
    constraints: string;
    input_format: string;
    output_format: string;
    example_input: string;
    example_output: string;
    allowed_languages: ProgrammingLanguage[];
    starter_code: Record<ProgrammingLanguage, string>;
    max_score: string; // Decimal as string
    time_limit_seconds: number;
    memory_limit_mb: number;
    due_date?: string | null;
    is_published: boolean;
    tags: string[];
    created_at: string;
    updated_at: string;
    published_at?: string | null;
}

export interface TestCase {
    id: string; // UUID
    problem: string; // UUID
    input_data: string;
    expected_output: string;
    is_sample: boolean;
    is_hidden: boolean;
    weight: string; // Decimal as string
    description: string;
    created_at: string;
    updated_at: string;
}

export interface CodingSubmission {
    id: string; // UUID
    problem: string; // UUID
    student: string; // UUID
    language: ProgrammingLanguage;
    code: string;
    status: SubmissionStatus;
    score?: string | null;
    test_cases_passed: number;
    total_test_cases: number;
    execution_time_ms?: number | null;
    memory_used_mb?: string | null;
    error_message: string;
    stdout: string;
    stderr: string;
    is_final: boolean;
    submitted_at: string;
    completed_at?: string | null;
    is_successful: boolean; // Computed
    pass_percentage: number; // Computed
}

// ============================================================================
// ENROLLMENT TYPES
// ============================================================================

export type EnrollmentStatus = 'pending' | 'active' | 'completed' | 'dropped' | 'cancelled';

export interface Enrollment {
    id: string; // UUID
    student: string; // UUID
    cohort: string; // UUID
    status: EnrollmentStatus;
    payment?: string | null; // UUID
    progress_percentage: string; // Decimal as string
    completed_lessons: string[]; // UUIDs
    enrolled_at: string;
    completed_at?: string | null;
    dropped_at?: string | null;
    last_accessed?: string | null;
    certificate_issued: boolean;
    certificate_issued_at?: string | null;
    certificate_url?: string | null;
    notes: string;
    is_active: boolean; // Computed
}

export interface LessonProgress {
    id: string; // UUID
    enrollment: string; // UUID
    lesson: string; // UUID
    is_completed: boolean;
    completion_percentage: string; // Decimal as string
    time_spent_minutes: number;
    started_at?: string | null;
    completed_at?: string | null;
    last_accessed: string;
    notes: string;
}