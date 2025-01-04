import Router from "./router/index"
import { routes } from "./routes/routesConfig"

function App() {
  return <Router routes={routes} />
}

export default App
