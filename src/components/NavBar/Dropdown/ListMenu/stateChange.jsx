import { useState } from "react"

function stateChange() {
  const [onMouse, setOnMouse] = useState(false)

  const handleOnMouse = () => {
    setOnMouse(!onMouse)
  }
  return {
    onMouse,
    handleOnMouse,
  }
}

export default stateChange
