import logo from '../assets/logo2.svg'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'

interface FooterProps {
  marginTop?: string | null;
}

const Footer: React.FC<FooterProps> = ({ marginTop }) => {
  return (
    <footer className={`w-[100%] flex items-center bg-[#1D1F26] flex-col`}>
      <div className={`w-[90%] my-[2.5rem] flex justify-between flex-col md:flex-row gap-[1.5rem] md:gap-[0rem] py-6 ${marginTop}`} >
        <div className='w-[100%] md:w-[30%] flex flex-col gap-[1.5rem] md:gap-[0.5rem] md:gap-[1.5rem]'>
          <img src={logo} alt="" className='w-[40%] md:w-[9.4rem]' />
          <h1 className='w-[90%] md:w-[95%] text-[#fff] font-normal font-poppins text-[0.9rem] leading-[1.3rem]'>GrandBrixx is the world’s driving worldwide real estate agency — we uphold  the right property protocol and due diligence before uploading properties.</h1>
          <div className='flex items-center space-x-2 font-semibold font-poppins text-[#EE0020] leading-[1.3rem]'><FaLocationDot /> <span className='text-[#fff] text-[0.9rem]'>23 Osho Drive,Ajegunlet, Lagos</span></div>
          <div className='flex items-center space-x-2 font-semibold font-poppins text-[#EE0020] leading-[1.3rem]'><MdOutlineEmail /> <span className='text-[#fff] text-[0.9rem]'>grandbrixxproperties@gmail.com</span></div>
          <div className='flex items-center space-x-2 font-semibold font-poppins text-[#EE0020] leading-[1.3rem]'><FiPhone /> <span className='text-[#fff] text-[0.9rem]'>(+234) 8066270084</span></div>
        </div>
        <div className='w-[70%] flex justify-between'>
          <div className='w-[100%] md:w-[20%] flex flex-col gap-[0.5rem] md:gap-[1.5rem]'>
            <h1 className='font-bold  text-[#fff]'>Services</h1>
            <ul className='flex flex-col gap-[0.5rem] text-[#fff]'>
              <li>Property</li>
              <li>Listing</li>
            </ul>
          </div>
          <div className='w-[100%] md:w-[20%] flex flex-col gap-[0.5rem] md:gap-[1.5rem]'>
            <h1 className='font-bold text-[#fff]'>Support</h1>
            <ul className='flex flex-col gap-[0.5rem] text-[#fff]'>
              <li>Contact Us</li>
              <li>Register</li>
            </ul>
          </div>
          <div className='w-[100%] md:w-[20%] flex flex-col gap-[0.5rem] md:gap-[1.5rem]'>
            <h1 className='font-bold text-[#fff]'>Quick Links</h1>
            <ul className='flex flex-col gap-[0.5rem] text-[#fff]'>
              <li>About Us</li>
              <li>contact us</li>
              <li>Listing</li>
              <li>Property</li>
              <li>dashboard</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-gray-300 w-full" />
      <div className='w-[90%] py-4 flex justify-between'>
        <p className='text-[#ffff] font-semibold leading-[1.3rem] text-[0.9rem]'>&copy; <span>2024 Powered By Grandbrixx properties Ltd . All Rights Reserved.</span> </p>
        <div className='flex space-x-4'>
          <p className='text-[#ffff] font-semibold leading-[1.3rem] text-[0.9rem]'>Terms of Use</p>
          <p className='text-[#ffff] font-semibold leading-[1.3rem] text-[0.9rem]'>Privacy Policies</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer