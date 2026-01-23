import { DashboardNav } from "@/components"
import { currentUser } from "@/data/dummy.general"

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {

    return (
        <DashboardNav user={currentUser}>
            {children}
        </DashboardNav>
    )
}

export default DashboardLayout