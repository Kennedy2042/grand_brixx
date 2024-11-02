const Listing = () => {
  return (
    <div className="w-full flex justify-center ">
      <section className="w-[90%] mt-[3rem] flex justify-between">
        <div className="w-[25%] h-[100vh]">
          <input type="text" placeholder="Search Houses" className="relative w-full h-[3.5rem] bg-[#F6F3FF] rounded-[10px] p-4" />
        </div>
        <div className=" w-[70%] h-[100vh]">
          <span className="h-[3.5rem] w-full border rounded-[10px] flex items-center p-4" style={{ borderColor: '#757575' }}>
            Showing 12 of 21 Results
          </span>
        </div>
      </section>
    </div>
  )
}

export default Listing