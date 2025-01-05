import { Routes, Route } from "react-router-dom"
import Home from "../shared/homePage"
import Pricing from "../shared/pricing"
import Reviews from "../shared/reviews"

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Pricing />} />
      <Route path="/register" element={<Reviews />} />
    </Routes>
  )
}

export default RoutesPage
