import {
    DashboardOverview,
    DashboardQuickActions,
    DashboardUpcomingDeadlines,
} from "@/components";
import { dashboardData } from "@/data/dummy.dashboard";

const DashboardPage = async () => {
    // In production, fetch real user dashboard data
    // const dashboardData = await getUserDashboardData();

    return (
        <main className='dash-page space-y-6'>
            {/* Overview Section - Stats Cards */}
            <DashboardOverview stats={dashboardData.stats} />

            {/* Quick Actions */}
            <DashboardQuickActions />

            <DashboardUpcomingDeadlines />

        </main>
    );
};

export default DashboardPage;