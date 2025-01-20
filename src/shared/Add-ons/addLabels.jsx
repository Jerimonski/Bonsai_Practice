function addLabels({ children, price }) {
  const adds = {
    Collaborators: `
        Invite other users to specific projects 
        for limited access and functionality.`,
    Partners: `
        Invite other users for full account 
        access and company management.`,
    "Bonsai Tax": `
        Track expenses, identify write-offs, 
        and estimate quarterly taxes easily.`,
  }

  const currentAdd = adds[children] || ""
  return (
    <div className="w-[1000px] p-10 flex justify-between mt-2 rounded-md bg-white">
      <div>
        <h4 className="text-xl font-medium">{children}</h4>
        <p className="text-sm text-purple-dark-letters">{currentAdd}</p>
      </div>
      {price === "Free" || price === 0 ? (
        <span className="text-3xl font-medium">Free</span>
      ) : (
        <div className="flex flex-col text-center">
          <span className="text-4xl font-medium p-2">${price}</span>
          <span className="text-xs font-light">/MONTH</span>
        </div>
      )}
    </div>
  )
}

export default addLabels
