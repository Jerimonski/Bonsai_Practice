import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/Navbar"
import RoutesPage from "../routes/routesConfig"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./../components/userContent"

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <RoutesPage />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  )
}

export default Router
