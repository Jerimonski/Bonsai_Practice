import ListItems from "./listItems"
import DropdownList from "../dropdownList"

function BonsaiColumn() {
  return (
    <div className="w-max">
      <h3 className="font-medium mb-8">BONSAI</h3>
      <ul className="space-y-1 cursor-pointer">
        <ListItems>About</ListItems>
        <ListItems>Careers</ListItems>
        <ListItems>Support</ListItems>
        <ListItems>LinkedIn</ListItems>
        <ListItems>Twitter</ListItems>
        <ListItems>Privacy policy</ListItems>
        <ListItems>Legal</ListItems>
        <li className="` opacity-50 hover:opacity-70 pt-4">Affiliates</li>
        <ListItems>Write for Us</ListItems>
        <DropdownList>Comparisons</DropdownList>
      </ul>
    </div>
  )
}

export default BonsaiColumn
