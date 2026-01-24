// User role type
export type UserRole = 'student' | 'instructor' | 'admin';

// Current user type based on backend User model
export interface CurrentUser {
    // Primary fields
    id: string; // UUID
    email: string;
    role: UserRole;

    // Profile fields
    first_name: string;
    last_name: string;
    phone_number: string | null;
    bio: string | null;
    profile_picture: string | null; // URL to image

    // Address fields
    country: string | null;
    city: string | null;
    timezone: string; // Default: 'UTC'

    // Preferences
    receive_email_notifications: boolean;
    receive_push_notifications: boolean;

    // Status fields
    is_active: boolean;
    email_verified: boolean;

    // Timestamps
    created_at: string; // ISO datetime
    updated_at: string; // ISO datetime
}