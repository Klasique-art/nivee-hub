import { 
    LayoutDashboard, 
    BookOpen, 
    ClipboardList, 
    Trophy, 
    Settings, 
    User,
    MessageSquare,
    Calendar,
    FileText
} from "lucide-react";

export interface DashboardSideLink {
    title: string;
    link: string;
    icon: React.ReactNode;
}

export const dashboardSideLinks: DashboardSideLink[] = [
    {
        title: "Dashboard",
        link: "/dashboard",
        icon: <LayoutDashboard />
    },
    {
        title: "My Courses",
        link: "/dashboard/courses",
        icon: <BookOpen />
    },
    {
        title: "Assignments",
        link: "/dashboard/assignments",
        icon: <ClipboardList />
    },
    {
        title: "Tests & Quizzes",
        link: "/dashboard/tests",
        icon: <FileText />
    },
    {
        title: "Coding Challenges",
        link: "/dashboard/coding",
        icon: <Trophy />
    },
    {
        title: "Schedule",
        link: "/dashboard/schedule",
        icon: <Calendar />
    },
    {
        title: "Forum",
        link: "/dashboard/forum",
        icon: <MessageSquare />
    },
    {
        title: "Profile",
        link: "/dashboard/profile",
        icon: <User />
    },
    {
        title: "Settings",
        link: "/dashboard/settings",
        icon: <Settings />
    }
];