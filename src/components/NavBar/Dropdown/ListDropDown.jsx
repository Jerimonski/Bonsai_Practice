import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ListProduct from "./ListMenu.jsx/ListProduct"

function ListDropDown({ children }) {
  const [onMouse, setOnMouse] = useState(false)

  const handleOnMouse = () => {
    setOnMouse(!onMouse)
  }
  return (
    <li
      className="flex items-center gap-2 py-4 justify-center"
      onMouseEnter={handleOnMouse}
      onMouseLeave={handleOnMouse}
    >
      {children}
      <FontAwesomeIcon icon={faChevronDown} />

      {onMouse && <ListProduct />}
    </li>
  )
}

export default ListDropDown
