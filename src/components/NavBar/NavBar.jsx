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
    <div className="fixed z-50 bg-white w-full flex items-center justify-center py-2 px-4 gap-32 place-content-evenly cursor-pointer">
      <div className="h-22 w-24">
        <Link to={"/Home"}>
          <img className="" src="BonsaiLogo.png" alt="BonsaiLogo" />
        </Link>
      </div>
      <nav>
        <ul className="flex w-full gap-10">
          <li
            className="flex items-center gap-2 py-4"
            onMouseEnter={handleOnMouse}
          >
            Product
            <FontAwesomeIcon icon={faChevronDown} />
            {onMouse && (
              <div className="absolute top-16 bg-white w-[350px] shadow-2xl">
                <div className="hover:bg-gray-100 px-10 py-12">
                  <h2 className="text-xl">Bonsai Workflow</h2>
                  <p className="text-gray-600">
                    Look professional, win more clients and manage your business
                    from one place
                  </p>
                  <div className="relative top-12 border-t border-gray-200"></div>
                </div>
                <div className="hover:bg-gray-200 px-10 py-12">
                  <h2 className="text-xl">Bonsai Tax</h2>
                  <p className="text-gray-600">
                    Track expenses, maximize tax write-offs, and estimate taxes
                    without the headache
                  </p>
                  <div className="relative top-12 border-t border-gray-200"></div>
                </div>
                <div className="hover:bg-gray-200 px-10 py-12">
                  <h2 className="text-xl">Bonsai Cash</h2>
                  <p className="text-gray-600">
                    Bonsai’s all-in-one financial hub: No fees and lightning
                    fast payouts
                  </p>
                </div>
              </div>
            )}
          </li>
          <li className="flex items-center gap-2 py-4">
            Templates
            <FontAwesomeIcon icon={faChevronDown} />
          </li>
          <Link to={"/Pricing"} className="py-4">
            Pricing
          </Link>
          <Link to={"/Reviews"} className="py-4">
            Reviews
          </Link>
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
