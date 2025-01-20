import AddLabels from "./addLabels"
function Add_ons() {
  return (
    <div className="flex flex-col items-center justify-center w-screen p-6">
      <h2 className="text-3xl py-12">Super charge your work with add-ons</h2>
      <div className="shadow-2xl bg-[#F1F1F1] flex flex-col gap-2">
        <AddLabels price="Free">Collaborators</AddLabels>
        <AddLabels price="9">Partners</AddLabels>
        <AddLabels price="10">Bonsai Tax</AddLabels>
      </div>
    </div>
  )
}

export default Add_ons
