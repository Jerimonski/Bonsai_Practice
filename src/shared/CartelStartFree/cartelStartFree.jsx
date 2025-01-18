import ButtonStartFree from "./../../components/ui/buttonStartFree"
function cartelStartFree() {
  return (
    <div className="flex items-center justify-center w-screen p-14">
      <div className="bg-blue-light-bg flex items-center justify-between h-60 w-[900px] p-10">
        <h2 className="text-4xl font-normal">
          It’s <span className="text-green-light">your</span> business. <br />
          We’re here to help it grow.
        </h2>
        <ButtonStartFree />
      </div>
    </div>
  )
}

export default cartelStartFree
