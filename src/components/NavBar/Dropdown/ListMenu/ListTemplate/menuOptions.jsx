import stateChange from "../../../../ui/stateChange"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import LabelSubMenu from "./labelSubMenu"
function menuOptions({ children }) {
  const { onMouse, handleOnMouse } = stateChange()
  const SubMenuTemplates = {
    "Contract Templates": [
      "Free Contract Maker",
      "Social Media Management Contract Template",
      "Graphic Contract Template",
      "Digital Marketing Contract Template",
    ],
    "Proposal Templates": [
      "Graphic Design Proposal Template",
      "Business Proposal Template",
      "Brand Ambassador Proposal Template",
      "Date Entry Proposal Letter Template",
    ],
    "Invoice Templates": [
      "Social Media Invoice Template",
      "Contract Invoice Template",
      "Web Design Invoice Template",
      "Influencer Invoice Template",
    ],
    "Agreement Templates": [
      "Influencer Agreement Template",
      "Influencer Collaboration Agreement Template",
      "Monthly Retainer Agreement Template",
      "Writer Agreement Template",
    ],
    "Quote Templates": [
      "Web Design Quotation Template",
      "Interior Design Quotation Template",
      "Digital Marketing Quotation Template",
      "Video Production Quotation Template",
    ],
    "Scope of Work Templates": [
      "Website Development Scope of Work template",
      "Digital Marketing Scope of Work template",
      "Consultant Scope of Work Template",
      "Interior Design Scope of Work Template",
    ],
    "Brief Templates": [
      "Design Brief Template",
      "Architecture Design Brief",
      "Fashion Design Brief",
      "Creative Brief Template",
    ],
  }
  const currentTemplates = SubMenuTemplates[children] || []
  return (
    <div
      className="flex justify-between"
      onMouseLeave={handleOnMouse}
      onMouseEnter={handleOnMouse}
    >
      <div className="flex justify-between hover:bg-gray-200 items-center w-64 p-4">
        <span className="text-gray-600">{children}</span>
        {onMouse && <FontAwesomeIcon icon={faChevronRight} />}
      </div>
      {onMouse && (
        <div className="absolute top-0 ml-72 w-96 flex flex-col items-center justify-content">
          <div className="absolute bg-white h-[480px] shadow-2xl">
            <h3 className="text-2xl py-4 mx-8">Feature {children}</h3>
            <div>
              {currentTemplates.map((template, index) => (
                <LabelSubMenu key={index}>{template}</LabelSubMenu>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default menuOptions
