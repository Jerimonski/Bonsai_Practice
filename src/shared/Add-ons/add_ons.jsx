import AddLabels from "./addLabels"
function Add_ons() {
  return (
    <div className="flex flex-col items-center justify-center w-screen p-10">
      <h2 className="text-2xl p-8">Super charge your work with add-ons</h2>
      <div className="shadow-xl bg-[#F1F1F1]">
        <AddLabels price="Free">Collaborators</AddLabels>
        <AddLabels price="9">Partners</AddLabels>
        <AddLabels price="10">Bonsai Tax</AddLabels>
      </div>
    </div>
  )
}

export default Add_ons
