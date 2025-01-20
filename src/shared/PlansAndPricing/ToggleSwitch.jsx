import { useState } from "react"
import { motion } from "framer-motion"

function ToggleSwitch() {
  const [isYearly, setIsYearly] = useState(false)

  const handleToggle = () => {
    setIsYearly(!isYearly)
  }

  return (
    <div className="flex items-center gap-4">
      {/* Monthly Label */}
      <span
        className={`text-lg font-medium ${
          !isYearly ? "text-black" : "text-gray-400"
        }`}
      >
        MONTHLY
      </span>

      {/* Toggle Switch */}
      <div
        className="relative flex items-center cursor-pointer w-16 h-10 bg-green-light rounded-full p-1"
        onClick={handleToggle}
      >
        {/* Slider */}
        <motion.div
          className="w-8 h-8 bg-white rounded-full"
          layout
          initial={{ x: 0 }}
          animate={{ x: isYearly ? 24 : 0 }}
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        />
      </div>

      {/* Yearly Label */}
      <span
        className={`text-lg font-medium ${
          isYearly ? "text-black" : "text-gray-400"
        }`}
      >
        YEARLY
      </span>
    </div>
  )
}

export default ToggleSwitch
