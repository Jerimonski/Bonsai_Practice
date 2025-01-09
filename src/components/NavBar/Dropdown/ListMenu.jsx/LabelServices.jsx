function LabelServices({ children, title }) {
  return (
    <div className="hover:bg-gray-200 mb-4 mx-1 w-80">
      <h4 className="text-lg p-2">{title}</h4>
      <p className="text-sm p-2 text-gray-600">{children}</p>
    </div>
  )
}

export default LabelServices
