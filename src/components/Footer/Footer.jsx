function Footer() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="grid grid-cols-3 flex flex-col p-4 space-x-14">
        {/* col 1 */}
        <div>
          <h3 className="font-medium mb-8 f">PRODUCT</h3>
          <ul className="space-y-1 cursor-pointer">
            <li className=" opacity-50 hover:opacity-70">Proposal</li>
            <li className=" opacity-50 hover:opacity-70">Contracts</li>
            <li className=" opacity-50 hover:opacity-70">Invoicing</li>
            <li className=" opacity-50 hover:opacity-70">Client CRM</li>
            <li className=" opacity-50 hover:opacity-70">Time Tracking</li>
            <li className=" opacity-50 hover:opacity-70">Task Tracking</li>
            <li className=" opacity-50 hover:opacity-70">Forms</li>
            <li className=" opacity-50 hover:opacity-70">Accounting</li>
            <li className=" opacity-50 hover:opacity-70">Bonsai Tax</li>
            <li className=" opacity-50 hover:opacity-70">Bonsai Cash</li>
            <li className=" opacity-50 hover:opacity-70 pt-4">Pricing</li>
            <li className=" opacity-50 hover:opacity-70">Bonsai Reviews</li>
          </ul>
        </div>
        {/* col 2 */}
        <div>
          <h3 className="font-medium mb-8">FREE RESOURCES</h3>
          <ul className="space-y-1 cursor-pointer">
            <li className=" opacity-50 hover:opacity-70">
              Freelance Resources
            </li>
            <li className=" opacity-50 hover:opacity-70">
              Freelance Blog by Bonsai
            </li>
            <li className=" opacity-50 hover:opacity-70">
              How to Write a Contract
            </li>
            <li className=" opacity-50 hover:opacity-70">
              Online Signature Maker
            </li>
            <li className=" opacity-50 hover:opacity-70 pt-4">Time Tracking</li>
            <li className=" opacity-50 hover:opacity-70">
              Self-Employed Taxes Hub
            </li>
            <li className=" opacity-50 hover:opacity-70">
              Self-Employed Tax Calculator
            </li>
            <li className=" opacity-50 hover:opacity-70">
              Self-Employed Tax Deductions
            </li>
            <h4 className="font-medium pt-4">Templates</h4>
            <li className=" opacity-50 hover:opacity-70">Invoice Templates</li>
            <li className=" opacity-50 hover:opacity-70">Proposal Templates</li>
            <li className=" opacity-50 hover:opacity-70">Contract Templates</li>
            <li className=" opacity-50 hover:opacity-70">
              Agreement Templates
            </li>
            <li className=" opacity-50 hover:opacity-70">
              Scope of Work Templates
            </li>
            <li className=" opacity-50 hover:opacity-70">Quote Templates</li>
            <li className=" opacity-50 hover:opacity-70">
              Credit Note Templates
            </li>
            <li className=" opacity-50 hover:opacity-70">Estimate Templates</li>
            <li className="` opacity-50 hover:opacity-70">Form Templates</li>
          </ul>
        </div>
        {/* col 3 */}
        <div>
          <h3 className="font-medium mb-8">BONSAI</h3>
          <ul className="space-y-1 cursor-pointer">
            <li className="` opacity-50 hover:opacity-70">About</li>
            <li className="` opacity-50 hover:opacity-70">Careers</li>
            <li className="` opacity-50 hover:opacity-70">Support</li>
            <li className="` opacity-50 hover:opacity-70">LinkedIn</li>
            <li className="` opacity-50 hover:opacity-70">Twitter</li>
            <li className="` opacity-50 hover:opacity-70">Privacy policy</li>
            <li className="` opacity-50 hover:opacity-70">Legal</li>
            <li className="` opacity-50 hover:opacity-70 pt-4">Affiliates</li>
            <li className="` opacity-50 hover:opacity-70">Write for Us</li>
            <li className="` opacity-50 hover:opacity-70 pt-4">Comparisons</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
