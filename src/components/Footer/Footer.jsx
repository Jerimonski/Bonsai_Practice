function Footer() {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="grid grid-cols-3 flex flex-col p-4 space-x-14">
        <ProductColumn />
        <ResourcesColumn />
        <BonsaiColumn />
      </div>
    </div>
  )
}

export default Footer
