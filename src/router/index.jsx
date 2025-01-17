import Footer from "../components/Footer/Footer"
import Navbar from "../components/NavBar/NavBar"
import RoutesConfig from "../routes/routesConfig"
import { BrowserRouter } from "react-router-dom"
import { UserProvider } from "./../components/userContent"

function Router() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Navbar />
        <RoutesConfig />
        <Footer />
      </UserProvider>
    </BrowserRouter>
  )
}

export default Router
