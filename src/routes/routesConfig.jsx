import { Routes, Route } from "react-router-dom"
import Home from "../shared/homePage"
import Pricing from "../shared/pricing"
import Reviews from "../shared/reviews"

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Reviews" element={<Reviews />} />
    </Routes>
  )
}

export default RoutesPage
