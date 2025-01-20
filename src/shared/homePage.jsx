import CartelStartFree from "./CartelStartFree/cartelStartFree"
import QuestionsSection from "./QuestionsSection/QuestionsSection"
import Add_ons from "./Add-ons/add_ons"
import PlansAndPricing from "./PlansAndPricing/PlansAndPricing"

function HomePage() {
  return (
    <>
      <PlansAndPricing />
      <Add_ons />
      <CartelStartFree />
      <QuestionsSection />
    </>
  )
}

export default HomePage
