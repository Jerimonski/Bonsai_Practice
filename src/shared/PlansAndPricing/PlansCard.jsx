import ButtonStartFree from "./../../components/ui/buttonStartFree"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

function PlansCard() {
  // this can be a fokin json
  const plansCard = [
    {
      name: `Starter`,
      description: `Ideal for freelancers and contractors just starting out.`,
      price: 24,
      services: [
        `All Templates`,
        `Unlimited Clients & Projects`,
        `Invoicing & Payments`,
        `Proposals & Contracts`,
        `Tasks & Time Tracking`,
        `Client CRM`,
        `Expense Tracking`,
        `Up to 5 Project Collaborators`,
      ],
    },
    {
      name: `Professional`,
      description: `Everything a growing independent business needs to thrive.`,
      price: 39,
      services: [
        `Everything in Starter plus..`,
        `Custom Branding`,
        `Forms & Questionnaires`,
        `Workflow Automations`,
        `Client Portal`,
        `QuickBooks Integration`,
        `Calendly Integration`,
        `Zapier Integration`,
        `Up to 15 Project Collaborators`,
      ],
    },
    {
      name: `Business`,
      description: `The perfect package for small businesses and agencies.`,
      price: 79,
      services: [
        `Everything in Starter and Professional plus...`,
        `Subcontractor Management`,
        `Hiring Agreement Templates (1099 contracts)`,
        `Subcontractor Onboarding`,
        `Talent Pool`,
        `3 Team Seats (additional seats $9/month)`,
        `Accountant Access`,
        `Connect Multiple Bank Accounts`,
        `Unlimited Subcontractors`,
        `Unlimited Project Collaborators`,
      ],
    },
  ]
  return (
    <div className="flex justify-center gap-12 p-10">
      {plansCard.map((plan, index) => (
        <div
          key={index}
          className="bg-[#FBFCFF] border-2 rounded px-10 pt-14 pb-16 w-[350px] flex flex-col"
        >
          {/* titleCard */}
          <div className="py-5 pr-8">
            <h3 className="text-2xl font-medium">{plan.name}</h3>
            <p className="text-purple-dark-letters text-sm py-2">
              {plan.description}
            </p>
          </div>
          {/* PriceCard */}
          <div className="space-x-3 border-b-2 border-green-light pb-1">
            <span className="text-3xl font-semibold relative bottom-7">$</span>
            <span className="text-6xl font-semibold relative bottom-2">
              {plan.price}
            </span>
            <span className="text-2xl">/MONTH</span>
          </div>
          {/* ServicesList */}
          <div className="py-10">
            {plan.services.map((benefit, key) => (
              <div key={key} className="flex items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="pr-2 text-green-light"
                />
                <li className="text-purple-dark-letters list-none py-2">
                  {benefit}
                </li>
              </div>
            ))}
          </div>
          {/* button */}
          <div className="mt-auto h-14">
            <ButtonStartFree />
          </div>
        </div>
      ))}
    </div>
  )
}

export default PlansCard
