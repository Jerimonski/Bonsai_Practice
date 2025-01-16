function labelSubMenu({ children }) {
  return (
    <div className="border text-gray-600 hover:scale-110 my-2 mx-8 py-6 w-96 text-center bg-gradient-to-r from-blue-200 via-orange-300 to-blue-200">
      <span>{children}</span>
    </div>
  )
}

export default labelSubMenu
