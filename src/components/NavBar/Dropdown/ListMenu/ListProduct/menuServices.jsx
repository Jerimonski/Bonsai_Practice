import LabelServices from "./LabelServices"
import LabelHoverMenu from "../../../../ui/components/labelHoverMenu"
function menuServices() {
  return (
    <LabelHoverMenu>
      <LabelServices title="Invoices">
        Get paid faster with automatic invoicing. online payments and more
      </LabelServices>
      <LabelServices title="Proposals">
        Create client-winning proposals with open receipts, custom packages and
        electronic approvals
      </LabelServices>
      <LabelServices title="Contracts">
        Protect your business with fully-customizable contract templates. Edit
        and e-sign hassle free.
      </LabelServices>
      <LabelServices title="Client CRM">
        Add leads, manage existing clients and track projects easily from one
        place
      </LabelServices>
      <LabelServices title="Forms & Automations">
        Boost client intake and automate feedback with custom web forms and
        questionnaires
      </LabelServices>
      <LabelServices title="Time Tracking">
        Stay organized with Bonsai's all-in-one time tracker, automated
        timesheets and billing system
      </LabelServices>
      <LabelServices title="Accounting">
        Manage your finances easily with income reports, expense tracking, tax
        reminders and more
      </LabelServices>
      <LabelServices title="Task Tracking">
        Stress-free task management with project templates and integrated
        timesheets
      </LabelServices>
    </LabelHoverMenu>
  )
}

export default menuServices
