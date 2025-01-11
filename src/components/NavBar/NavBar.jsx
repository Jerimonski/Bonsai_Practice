import ListDropDown from "./Dropdown/ListDropDown"
import ListProduct from "./Dropdown/ListMenu/ListProduct/ListProduct"
import ListTemplates from "./Dropdown/ListMenu/ListTemplate/ListTemplates"
ListTemplates
import { Link } from "react-router-dom"
function NavBar() {
  return (
    <div className="fixed z-50 bg-white w-full flex items-center justify-center py-2 px-4 gap-32 place-content-evenly cursor-pointer">
      <Link to={"/Home"}>
        <img className="h-22 w-24" src="BonsaiLogo.png" alt="BonsaiLogo" />
      </Link>
      <ul className="flex gap-10">
        <ListDropDown title="Product" menuOptions={<ListProduct />} />
        <ListDropDown title="Templates" menuOptions={<ListTemplates />} />
        <Link to={"/Pricing"} className="py-4">
          Pricing
        </Link>
        <Link to={"/Reviews"} className="py-4">
          Reviews
        </Link>
      </ul>
      <div className="flex gap-4">
        <button className="border-green-light border px-6 py-2 rounded-sm text-green-light font-medium text-sm hover:bg-green-light hover:text-white">
          LOG IN
        </button>
        <button className="border-green-light border px-6 py-2 rounded-sm text-white bg-green-light font-medium text-sm hover:brightness-90">
          START FREE
        </button>
      </div>
    </div>
  )
}

export default NavBar
