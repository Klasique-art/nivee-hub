import { Navbar, Footer } from "@/components"
import { currentUser } from "@/data/dummy.general"

const RootLayout = async ({children}: {children: React.ReactNode}) => { 
  const isLoggedIn = false

  return (
    <div>
        <Navbar isAuthenticated={isLoggedIn} user={currentUser} />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout