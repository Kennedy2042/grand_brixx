import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo2.svg'
import headerVector from '../assets/headerVector.svg'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdClose } from 'react-icons/io'

const Route = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/listing", name: "Listing" },
    { path: "/dashboard", name: "Dashboard" },
    { path: "/contact", name: "Contact" },
]

const Header = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className=' w-full flex h-[10vh] justify-between items-center sticky top-[0] shadow-headBoxShadow bg-white z-10 '>
            <div className='w-[4%] h-full bg-[#EE0020] flex items-center justify-center'>
                <img src={headerVector} alt="Vector Logo" className='w-[50%] h-[50%]' />
            </div>
            <div className='flex w-[96%] justify-center items-center'>
                <div className='w-[90%] flex justify-between'>
                    <div className='w-[30%] md:w-[9.4rem] flex items-center'>
                        <img src={logo} alt="logo" className=' w-[100%] md:w-[100%] md:h-[100%]' />
                    </div>
                    <ul className=' justify-between w-[40%] hidden md:flex items-center font-inter leading-[1.5rem] font-medium'>
                        {
                            Route.map((e) => (
                                <li key={e.path} className=' text-[#101011]'>
                                    <NavLink 
                                    to={e.path}
                                    className={({isActive})=>
                                    isActive ? 'text-[#EE0020]' : '' }
                                    >{e.name}</NavLink>
                                </li>
                            ))
                        }
                    </ul>
                    <button className='hidden md:block w-[10.5rem] h-[3.5rem] rounded text-[1.3rem] text-[#FFFFFF] font-semibold bg-[#EE0020] font-poppins'>Get a Quote</button>
                    <div className='md:hidden'>
                        {
                            menu ?
                                <IoMdClose className='text-[1.5rem]' onClick={() => setMenu(false)} />
                                :
                                <RxHamburgerMenu className='text-[1.5rem]' onClick={() => setMenu(true)} />

                        }
                    </div>
                    {
                        menu ? <div className='w-[40%] bg-red-500 absolute h-[40vh] right-[0] top-[100%] flex justify-center items-center bg-yellow-700'>
                            <ul className='flex flex-col justify-evenly h-[100%] w-[85%]'>
                                {
                                    Route.map((e) => (
                                        <li key={e.path} className=' text-[#101011] text-[1rem]' onClick={() => setMenu(false)}>
                                            <NavLink to={e.path}>{e.name}</NavLink>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div> : null
                    }
                </div>
            </div>

        </div>
    )
}

export default Header