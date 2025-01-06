import ListItems from "./../../ui/components/listItems"
import DropdownList from "./../../ui/components/dropdownList"

function ResourcesColumn() {
  return (
    <div>
      <h3 className="font-medium mb-8">FREE RESOURCES</h3>
      <ul className="space-y-1 cursor-pointer">
        <ListItems>Freelance Resources</ListItems>
        <ListItems>Freelance Blog by Bonsai</ListItems>
        <ListItems>How to Write a Contract</ListItems>
        <ListItems>Online Signature Maker</ListItems>
        <li className=" opacity-50 hover:opacity-70 pt-4">Time Tracking</li>
        <ListItems>Self-Employed Taxes Hub</ListItems>
        <ListItems>Self-Employed Tax Calculator</ListItems>
        <ListItems>Self-Employed Tax Deductions</ListItems>

        <h4 className="font-medium pt-4">Templates</h4>
        <DropdownList>Invoice Templates</DropdownList>
        <DropdownList>Proposal Templates</DropdownList>
        <DropdownList>Contract Templates</DropdownList>
        <DropdownList>Agreement Templates</DropdownList>
        <DropdownList>Scope of Work Templates</DropdownList>
        <DropdownList>Quote Templates</DropdownList>
        <ListItems>Credit Note Templates</ListItems>
        <ListItems>Estimate Templates</ListItems>
        <ListItems>Form Templates</ListItems>
      </ul>
    </div>
  )
}

export default ResourcesColumn
