import FaqDropdown from "./FaqDropdown"

function QuestionsSection() {
  return (
    <div className="w-screen mb-12 w-full flex flex-col items-center">
      <h2 className="text-center text-3xl text-green-light font-bold p-8">
        Frequenly Asked Questions
      </h2>
      <FaqDropdown>How does the free trial work?</FaqDropdown>
      <FaqDropdown>Can I change plans anytime?</FaqDropdown>
      <FaqDropdown>How do I pause my Bonsai subscription?</FaqDropdown>
      <FaqDropdown>What is your refund policy?</FaqDropdown>
    </div>
  )
}

export default QuestionsSection
