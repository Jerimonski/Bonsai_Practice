function labelHoverMenu({ children }) {
  return (
    <div className="absolute grid grid-cols-2 top-0 bg-white w-max ml-12 px-4 pt-4 pb-12">
      {children}
    </div>
  )
}

export default labelHoverMenu
