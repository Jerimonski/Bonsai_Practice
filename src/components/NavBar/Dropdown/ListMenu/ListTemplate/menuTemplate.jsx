import MenuOptions from "./menuoptions"

function menuTemplate() {
  return (
    <div className="absolute flex flex-col top-16 bg-white shadow-2xl pt-4 pb-20 p-8 h-[480px]">
      <MenuOptions>Contract Templates</MenuOptions>
      <MenuOptions>Proposal Templates</MenuOptions>
      <MenuOptions>Invoice Templates</MenuOptions>
      <MenuOptions>Agreement Templates</MenuOptions>
      <MenuOptions>Quote Templates</MenuOptions>
      <MenuOptions>Scope of Work Templates</MenuOptions>
      <MenuOptions>Brief Templates</MenuOptions>
    </div>
  )
}

export default menuTemplate
