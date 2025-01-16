import stateChange from "../stateChange"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import LabelMenuServices from "./menuServices"
function ListMenuDropDown() {
  const { onMouse, handleOnMouse } = stateChange()

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
              <LabelMenuServices />
            </div>
          )}
        </div>
        <div className="relative top-12 border-t border-gray-200" />
      </div>
      <div className="hover:bg-gray-200 px-10 py-12">
        <h2 className="text-xl">Bonsai Tax</h2>
        <p className="text-gray-600">
          Track expenses, maximize tax write-offs, and estimate taxes without
          the headache
        </p>
        <div className="relative top-12 border-t border-gray-200" />
      </div>
      <div className="hover:bg-gray-200 px-10 py-12">
        <h2 className="text-xl">Bonsai Cash</h2>
        <p className="text-gray-600">
          Bonsai’s all-in-one financial hub: No fees and lightning fast payouts
        </p>
        <div className="relative top-12 border-t border-gray-200" />
      </div>
    </div>
  )
}
export default ListMenuDropDown
