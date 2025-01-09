import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import LabelServices from "./LabelServices"
function ListMenuDropDown() {
  const [onMouse, setOnMouse] = useState(false)

  const handleOnMouse = () => {
    setOnMouse(!onMouse)
  }

  return (
    <div className="absolute top-16 bg-white w-[360px] shadow-2xl">
      <div
        className="hover:bg-gray-100 px-10 py-12"
        onMouseEnter={handleOnMouse}
        onMouseLeave={handleOnMouse}
      >
        <h2 className="text-xl">Bonsai Workflow</h2>
        <div className="flex">
          <p className="text-gray-600 mr-2">
            Look professional, win more clients and manage your business from
            one place
          </p>
          {onMouse && (
            <div>
              <FontAwesomeIcon icon={faChevronRight} />
              <div className="absolute grid grid-cols-2 top-0 bg-white w-max ml-12 px-4 pt-4 pb-12">
                <LabelServices title="Invoices">
                  Get paid faster with automatic invoicing. online payments and
                  more
                </LabelServices>
                <LabelServices title="Proposals">
                  Create client-winning proposals with open receipts, custom
                  packages and electronic approvals
                </LabelServices>
                <LabelServices title="Contracts">
                  Protect your business with fully-customizable contract
                  templates. Edit and e-sign hassle free.
                </LabelServices>
                <LabelServices title="Client CRM">
                  Add leads, manage existing clients and track projects easily
                  from one place
                </LabelServices>
                <LabelServices title="Forms & Automations">
                  Boost client intake and automate feedback with custom web
                  forms and questionnaires
                </LabelServices>
                <LabelServices title="Time Tracking">
                  Stay organized with Bonsai's all-in-one time tracker,
                  automated timesheets and billing system
                </LabelServices>
                <LabelServices title="Accounting">
                  Manage your finances easily with income reports, expense
                  tracking, tax reminders and more
                </LabelServices>
                <LabelServices title="Task Tracking">
                  Stress-free task management with project templates and
                  integrated timesheets
                </LabelServices>
              </div>
            </div>
          )}
        </div>
        <div className="relative top-12 border-t border-gray-200"></div>
      </div>
      <div className="hover:bg-gray-200 px-10 py-12">
        <h2 className="text-xl">Bonsai Tax</h2>
        <p className="text-gray-600">
          Track expenses, maximize tax write-offs, and estimate taxes without
          the headache
        </p>
        <div className="relative top-12 border-t border-gray-200"></div>
      </div>
      <div className="hover:bg-gray-200 px-10 py-12">
        <h2 className="text-xl">Bonsai Cash</h2>
        <p className="text-gray-600">
          Bonsai’s all-in-one financial hub: No fees and lightning fast payouts
        </p>
        <div className="relative top-12 border-t border-gray-200"></div>
      </div>
    </div>
  )
}
export default ListMenuDropDown
