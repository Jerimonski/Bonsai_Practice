import { Footer } from "@/components/Footer/Footer"
import { Navbar } from "@/components/NavBar/Navbar"
import { PropsDataProvider } from "@/providers/propsContext"
import { Routes, Route, BrowserRouter } from "react-router-dom"

export default function Router(props) {
  const renderRoutes = (routes) => {
    return routes.map((route) => {
      return (
        <Route key={route.path} path={route.path} element={element}>
          {route.routes && renderRoutes(route.routes)}
        </Route>
      )
    })
  }

  return (
    <BrowserRouter>
      <PropsDataProvider>
        <div className="flex flex-col min-h-[100dvh] min-w-[100dvw]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              {renderRoutes(props.routes)}
              <Route path="*" />
            </Routes>
          </main>
          <Footer />
        </div>
      </PropsDataProvider>
    </BrowserRouter>
  )
}
