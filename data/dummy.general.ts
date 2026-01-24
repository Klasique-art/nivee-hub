import { CurrentUser } from "@/types/user.types";

export const currentUser: CurrentUser = {
    id: "123e4567-e89b-12d3-a456-426614174000",
    email: "john.doe@example.com",
    role: "student",
    first_name: "John",
    last_name: "Doe",
    phone_number: "+233244123456",
    bio: "Passionate about learning programming",
    profile_picture: "https://images.unsplash.com/photo-1549035400-9683a3299bfe?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    country: "Ghana",
    city: "Accra",
    timezone: "Africa/Accra",
    receive_email_notifications: true,
    receive_push_notifications: true,
    is_active: true,
    email_verified: true,
    created_at: "2024-01-15T10:30:00Z",
    updated_at: "2024-01-20T14:45:00Z",
};
