import PlansCard from "./PlansCard"
import ToggleSwitch from "./ToggleSwitch"

function PlansAndPricing() {
  return (
    <div className="flex flex-col w-screen">
      <div className="flex justify-center gap-20">
        <h2 className="text-4xl">Plans & Pricing</h2>
        <ToggleSwitch />
      </div>
      <PlansCard />
    </div>
  )
}

export default PlansAndPricing
