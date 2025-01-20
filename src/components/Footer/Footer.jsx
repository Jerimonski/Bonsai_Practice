import ProductColumn from "./FooterColumns/ProductColumn"
import ResourcesColumn from "./FooterColumns/ResourcesColumn"
import BonsaiColumn from "./FooterColumns/BonsaiColumn"

function Footer() {
  return (
    <div className="flex items-center w-screen justify-center py-16">
      <div className="grid grid-cols-3 gap-44">
        <ProductColumn />
        <ResourcesColumn />
        <BonsaiColumn />
      </div>
    </div>
  )
}

export default Footer
