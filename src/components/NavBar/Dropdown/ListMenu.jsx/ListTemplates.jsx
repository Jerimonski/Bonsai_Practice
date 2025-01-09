function ListTemplates() {
  return (
    <div className="absolute top-16 bg-white w-[350px] shadow-2xl">
      <div className="hover:bg-gray-100 px-10 py-12">
        <h2 className="text-xl">Bonsai Workflow</h2>
        <p className="text-gray-600">
          Look professional, win more clients and manage your business from one
          place
        </p>
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
      </div>
    </div>
  )
}

export default ListTemplates
