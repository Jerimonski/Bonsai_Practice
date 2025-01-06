import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ListItems from "./../../ui/components/listItems"
import { motion } from "motion/react"

function DropdownList({ children }) {
  const listItemsDropdown = {
    "Invoice Templates": [
      "Invoice Generator",
      "Blank Invoice Template",
      "Consultant Invoice Template",
      "Editable Invoice Template",
      "Graphic Design Invoice",
      "Web Design Invoice",
      "Contractor Invoice Template",
      "Photography Invoice Template",
      "Self Employed Invoice Template",
    ],
    "Proposal Templates": [
      "Website Proposal Template",
      "Digital Marketing Proposal Template",
      "Social Media Marketing Proposal",
      "Graphic Design Proposal",
      "Freelance Proposal Template",
      "SEO Proposal Template",
    ],
    "Contract Templates": [
      "Online Contract",
      "Graphic Design Contract",
      "Freelance Contract Template",
      "Social Media Marketing Contract",
      "Software Development Contract",
      "Web Design Contract",
      "Video Production Contract",
      "Public Relations Contract",
      "Translation Contract",
    ],
    "Agreement Templates": [
      "Retainer Agreement Template",
      "Influencer Agreement Template",
      "Collaboration Agreement Template",
      "Software Development Agreement",
      "Marketing Agreement Template",
    ],
    "Scope of Work Templates": [
      "Website Development Scope of Work",
      "Digital Marketing Scope of Work",
      "Consultant Statement of Work Template",
      "Software Development Scope of Work",
    ],
    "Quote Templates": [
      "Freelance Quotation Template",
      "Graphic Design Quotation Template",
      "Interior Design Quotation Template",
      "Video Production Quotation Template",
      "Social Media Marketing Quotation",
      "Credit Note Templates",
      "Estimate Templates",
      "Form Templates",
    ],
    Comparisons: [
      "Freshbooks Alternatives",
      "Quickbooks Alternatives",
      "Wave vs Quickbooks",
      "Xero vs Quickbooks",
      "Freshbooks vs Quickbooks",
    ],
  }
  const [isOpen, setIsOpen] = useState(false)

  const handleOptions = () => {
    setIsOpen(!isOpen)
  }
  const currentTemplates = listItemsDropdown[children] || []

  //   motionFrame
  const menuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  }
  return (
    <div>
      <div className="flex">
        <ListItems>{children}</ListItems>
        <button className="pl-1" onClick={handleOptions}>
          <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
        </button>
      </div>
      {isOpen && (
        <motion.ul
          initial="exit"
          animate={isOpen ? "enter" : "exit"}
          variants={menuDrawer}
          className="pl-2 space-y-1"
        >
          {currentTemplates.map((template, index) => (
            <ListItems key={index}>{template}</ListItems>
          ))}
        </motion.ul>
      )}
    </div>
  )
}

export default DropdownList
