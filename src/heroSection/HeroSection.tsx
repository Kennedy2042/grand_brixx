const HeroSection = () => {
  return (
    <div className="h-[53.25rem] md:h-[40rem] w-full bg-center flex flex-col items-center justify-center space-y-6 bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/hero-section-bg.svg)' }}>
      <p className="text-[1.1rem] font-medium text-[#FFFFFF] leading-[1.7rem] font-poppins text-center">More than <span className="text-[#EE0020] ">500+</span>house available for sell & rent in country</p>
      <h1 className="leading-[1.875rem] md:leading-[4.7rem] font-bold text-[1.25rem] md:text-[3.1rem] text-[#FFFFFF] font-poppins tracking-17p text-center">FIND YOUR <span className="text-[#EE0020]">DREAM</span> HOME</h1>
      <div>
        <button className="rounded h-[3.9rem] w-[7.4rem] bg-[#EE0020] text-[#FFFFFF] font-medium leading-[2.1rem] text-[1.4rem]">Buy</button>
        <button className="rounded h-[3.9rem] w-[7.4rem] bg-[#FFFFFF] text-[#000000] font-medium leading-[2.1rem] text-[1.4rem] ml-[1rem]">Rent</button>
      </div>
      <form className="hidden md:block p-6 space-x-4 bg-[#ffff] rounded">
        <input type="text" placeholder="Enter Keyword" className="border-2 border-[#EAE3E3] text-[#000000] font-poppins text-[1.1rem] leading-[1.7rem] text-center p-3 text-black placeholder-black outline-none font-medium" />
        <select name="" id="" className="border-2 border-[#EAE3E3] text-[#000000] font-poppins text-[1.1rem] leading-[1.7rem] text-center p-3 text-black font-medium">
          <option value="1">Property Type</option>
        </select>
        <input type="text" placeholder="Type Location" className="border-2 border-[#EAE3E3] text-[#000000] font-poppins text-[1.1rem] leading-[1.7rem] text-center p-3 text-black placeholder-black outline-none font-medium" />
        <input type="text" placeholder="Price" className="border-2 border-[#EAE3E3] text-[#000000] font-poppins text-[1.1rem] leading-[1.7rem] text-center p-3 text-black placeholder-black outline-none font-medium" />
        <button className="border-2 border-[#EAE3E3] bg-[#EE0020] text-[#FFFFFF] font-medium text-[1.1rem] leading-[1.7rem] font-poppins text-center p-3">Search Now</button>
      </form>
    </div>
  )
}

export default HeroSection