import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function ListDropDown({ title, menuOptions }) {
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
      {title}
      <FontAwesomeIcon icon={faChevronDown} />

      {onMouse && menuOptions}
    </li>
  )
}

export default ListDropDown
