import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import StateChange from "../../components/ui/stateChange"
import { motion } from "motion/react"

function FaqDropdown({ children }) {
  const { onMouse, handleOnMouse } = StateChange()

  const AnswerFAQ = {
    "How does the free trial work?": `
        When you start your trial with Bonsai you'll receive full,
       unlimited access to all of Bonsai's Workflow or Workflow Plus
       Features! You will need to enter your credit card information
       to begin your trial, but don't worry - we won't charge you anything
       until the subscription ends! If you wish to cancel at any time during
       the trial period, you can do so through your Subscriptions Settings Page.`,
    "Can I change plans anytime?": `
        Yes, you can from within your account. If you have already subscribed to a plan,
        or want to downgrade or upgrade your current one, you can do this by going to your 
        "Settings" and "Subscription".`,
    "How do I pause my Bonsai subscription?": `
        We totally understand that with the nature of freelancing, work ebbs and flows 
        so you might not always need your Bonsai subscription to remain active! The good 
        news is that you can cancel or pause your monthly subscription at any time without 
        penalty. Once cancelled, you'll be able to continue logging in to access all your 
        documents and even continue to use our free features, like Time Tracking! In order 
        to cancel your subscription, login to your Bonsai account.`,
    "What is your refund policy?": `
        If you contact us within 2 weeks of being charged for your subscription, we will 
        be happy to issue a refund for you!Beyond those 2 weeks, you will need to cancel 
        or modify the subscription from the Subscriptions Tab in Settings to avoid future 
        charges, but refunds will not be issued. This applies to both monthly and annual plans.`,
  }

  const currentAnswer = AnswerFAQ[children] || []

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
    <div className="w-[750px]">
      <div
        className="hover:text-green-light flex justify-between pb-4 cursor-pointer"
        onClick={handleOnMouse}
      >
        <span className=" text-xl font-bold">{children}</span>
        <FontAwesomeIcon
          icon={faChevronDown}
          className="text-purple-dark-letters"
        />
      </div>
      {onMouse && (
        <motion.ul
          initial="exit"
          animate={onMouse ? "enter" : "exit"}
          variants={menuDrawer}
          className="pl-2 space-y-1"
        >
          <p className="text-purple-dark-letters mb-6 w-[730px]">
            {currentAnswer}
          </p>
        </motion.ul>
      )}
    </div>
  )
}

export default FaqDropdown