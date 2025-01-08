import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import { useState } from "react"
function NavBar() {
  const [onMouse, setOnMouse] = useState(false)

  const handleOnMouse = () => {
    setOnMouse(!onMouse)
  }

  return (
    <div className="fixed z-50 bg-white w-full flex items-center justify-center py-4 px-4 gap-32 place-content-evenly cursor-pointer">
      <div className="h-22 w-24">
        <Link to={"/Home"}>
          <img className="" src="BonsaiLogo.png" alt="BonsaiLogo" />
        </Link>
      </div>
      <nav>
        <ul className="flex w-full gap-10">
          <li
            className="flex items-center gap-2"
            onMouseEnter={handleOnMouse}
            onMouseLeave={handleOnMouse}
          >
            Templates
            <FontAwesomeIcon icon={faChevronDown} />
            {onMouse && <div>dropdownMenu</div>}
          </li>
          <li className="flex items-center gap-2">
            Templates
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <Link to={"/Pricing"}>Pricing</Link>
          <Link to={"/Reviews"}>Reviews</Link>
        </ul>
      </nav>
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
