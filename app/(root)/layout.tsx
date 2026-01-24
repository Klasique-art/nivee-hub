import { Navbar, Footer } from "@/components"
import { isAuthenticated, getCurrentUser } from "@/lib/auth"

const RootLayout = async ({children}: {children: React.ReactNode}) => { 
  const [isLoggedIn, currentUser] = await Promise.all([
    isAuthenticated(),
    getCurrentUser()
  ]) 
  
  // console.log('RootLayout - currentUser:', currentUser);
  // console.log('RootLayout - isLoggedIn:', isLoggedIn);

  return (
    <div>
        <Navbar isAuthenticated={isLoggedIn} user={currentUser} />
        {children}
        <Footer />
    </div>
  )
}

export default RootLayout