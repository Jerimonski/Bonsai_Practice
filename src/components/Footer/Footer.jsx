import ProductColumn from "./FooterColumns/ProductColumn"
import ResourcesColumn from "./FooterColumns/ResourcesColumn"
import BonsaiColumn from "./FooterColumns/BonsaiColumn"

function Footer() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-3 flex flex-col gap-14 mx-52">
        <ProductColumn />
        <ResourcesColumn />
        <BonsaiColumn />
      </div>
    </div>
  )
}

export default Footer
