import { ImHome3 } from "react-icons/im"
import { FaCamera, FaHeart, FaRegCheckCircle } from "react-icons/fa";
import perfect from '../assets/perfectHouse.svg'
import frienlyImage from '../assets/friendlyImage.svg'
import properties1 from '../assets/properties1.svg'
import properties2 from '../assets/properties2.svg'
import properties3 from '../assets/properties3.svg'
import typeOfHouse1 from '../assets/typeOfHouse1.svg'
import typeOfHouse2 from '../assets/typeOfHouse2.svg'
import typeOfHouse3 from '../assets/typeOfHouse3.svg'
import typeOfHouse4 from '../assets/typeOfHouse4.svg'
import location_thumb4 from '../assets/location-thumb4.svg'
import { FaLocationDot } from "react-icons/fa6";
import { LuBedDouble } from "react-icons/lu";
import { GiBathtub } from "react-icons/gi";
import { IoGolfSharp } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { MdShare } from "react-icons/md";
import { HiArrowUpRight } from "react-icons/hi2";
import { GrPhone } from "react-icons/gr";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const latestProperties = [
    {
        img: properties1,
        type: 'Luxury family Home',
        price: '#1,000,000',
        location: 'uzor street, Ajeromi, Ajegunle, Lagos.',
        bed: 3,
        bath: 3,
        agentName: 'Adekunle Gold'
    },
    {
        img: properties2,
        type: 'Luxury family Home',
        price: '#1,000,000',
        location: 'uzor street, Ajeromi, Ajegunle, Lagos.',
        bed: 3,
        bath: 3,
        agentName: 'Adekunle Gold'
    },
    {
        img: properties3,
        type: 'Luxury family Home',
        price: '#1,000,000',
        location: 'uzor street, Ajeromi, Ajegunle, Lagos.',
        bed: 3,
        bath: 3,
        agentName: 'Adekunle Gold'
    },
]

const location = [
    {
        img: perfect,
        name: 'Wilmer',
        propertiesCount: 13,
    },
    {
        img: perfect,
        name: 'Tincan',
        propertiesCount: 16,
    },
    {
        img: perfect,
        name: 'Newroad',
        propertiesCount: 23,
    },
]

const typeOfProperties = [
    {
        img: typeOfHouse1,
        title: 'Multifamily Homes',
        number: 13
    },
    {
        img: typeOfHouse2,
        title: 'Multifamily Homes',
        number: 13
    },
    {
        img: typeOfHouse3,
        title: 'Commercial House',
        number: 13
    },
    {
        img: typeOfHouse4,
        title: 'Service Apartment',
        number: 13
    },
]


const Home = () => {
    return (
        <div className="w-full flex items-center flex-col bg-[#F8F7FC] ">
            <div className="w-[90%] flex justify-between h-[58.375rem] items-center">
                <section className="w-[35rem] h-[47.60125rem] bg-red-600"></section>
                <section className="w-[47%] space-y-[2.5rem]">
                    <div className="flex items-center text-[#EE0020] text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 /> <p>Trusted Real estate agency</p></div>
                    <h1 className="font-poppins text-[#000] font-semibold text-[2.3rem] leading-[3.4rem]">Find Your Dream House Setting At GrandBrixx.</h1>
                    <p className="text-[1rem] font-normal font-poppins text-[#000] leading-[1.4rem]">GrandBrixx is the world’s driving worldwide real estate  agency — we uphold  the right property protocol and due diligence before uploading properties. </p>
                    <section className="flex space-x-6">
                        <div className="flex items-center">
                            <img src={perfect} alt="house logo" className="w-[5.6rem] h-[5.9rem]" />
                            <p className="font-poppins font-semibold text-[1.3rem] leading-[1.9rem] text-[#000]">Perfect Duplex Houses</p>
                        </div>
                        <div className="flex items-center">
                            <img src={frienlyImage} alt="house logo" className="w-[5.6rem] h-[5.9rem]" />
                            <p className="font-poppins font-semibold text-[1.3rem] leading-[1.9rem] text-[#000]">Friendly Team Support</p>
                        </div>
                    </section>
                    <section className="flex items-center space-x-6">
                        <div className="rounded border border-[#00000038] w-[13.4rem] flex flex-col items-center h-[10.8rem] justify-center flex-shrink-0">
                            <p className="text-[#EE0020] font-poppins text-[4rem] leading-[6rem] font-semibold">05</p>
                            <span className="font-poppins font-normal text-base leading-[1.5rem]">Years of experience</span>
                        </div>
                        <ul className="space-y-5">
                            <li className="flex items-center font-normal text-base leading-[1.5rem] space-x-2"><FaRegCheckCircle className="text-[#EE0020] flex-shrink-0" size={24} /> <span>24/7  access to electricity and light</span></li>
                            <li className="flex items-center font-normal text-base leading-[1.5rem] space-x-2"><FaRegCheckCircle className="text-[#EE0020] flex-shrink-0" size={24} /> <span>We value you. Therefore, we have ensured all our estates have high security for your safety</span></li>
                            <li className="flex items-center font-normal text-base leading-[1.5rem] space-x-2"><FaRegCheckCircle className="text-[#EE0020] flex-shrink-0" size={24} /> <span>Water Supply, when the well is dry, you will understand the worth of water.</span></li>
                        </ul>
                    </section>
                    <button className="w-[15.3rem] h-[3.75rem] rounded bg-[#EE0020] text-[#ffff] font-poppins font-semibold text-[1.25rem] leading-[1.875rem]">More about us</button>
                </section>
            </div>
            <section className="w-full h-[44.8rem] flex justify-center bg-center bg-no-repeat items-center relative" style={{ backgroundImage: 'url(/bg-full-2.svg)', backgroundSize: 'cover' }}>
                <div className="w-[90%] space-y-8">
                    <div className="flex items-center text-[#EE0020] text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 /> <p>Trusted Real estate agency</p></div>
                    <h1 className="font-poppins text-[#000] font-semibold text-[2.5rem] leading-[3.8rem]">View Latest Properties</h1>
                    <div className="w-[2.5rem] h-[2.5rem] absolute right-[9rem] top-[6rem] text-[1.5rem] text-[#EE0020] rounded-full flex items-center justify-center bg-[#fff]"><GoArrowLeft /></div>
                    <div className="w-[2.5rem] h-[2.5rem] absolute right-[5rem] top-[6rem] text-[1.5rem] rounded-full flex items-center justify-center bg-[#EE0020] text-[#fff]"><GoArrowRight /></div>

                    <div className="flex justify-between">
                        {
                            latestProperties.map((property, index) => (
                                <div key={index} className="w-[23.0625rem] h-[28.1875rem] flex flex-col items-center rounded-[10px] bg-[#FFFFFF] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-4 relative space-y-4">
                                    <div className="w-full h-[13.75rem] rounded-[0.625rem] bg-cover bg-center bg-no-repeat " style={{ backgroundImage: `url(${property.img})` }}>
                                        <button className="absolute w-[6.25rem] h-[2rem] top-[1.9375rem] left-[1.5rem] rounded-[1.25rem] bg-[#EE0020] font-poppins text-[0.9375rem] font-semibold leading-[1.40625rem] text-center text-[#fff]">For rent</button>
                                        <button className="absolute w-[6.25rem] h-[2rem] top-[4.875rem] left-[1.6875rem] rounded-[1.25rem] bg-[#fff] font-poppins text-[0.9375rem] font-semibold leading-[1.40625rem] text-center text-[#000]">Open</button>
                                        <div className="absolute w-[2.625rem] h-[2.4375rem] top-[3.9375rem] left-[19.5625rem] bg-[#fff] text-[#EE0020] flex items-center justify-center text-[1.25rem]"><FaCamera /></div>
                                        <div className="absolute w-[2.625rem] h-[2.4375rem] top-[6.4375rem] left-[19.5625rem] bg-[#fff] text-[#EE0020] flex items-center justify-center text-[1.25rem]"><FaHeart /></div>
                                    </div>
                                    <div className="flex w-full justify-between font-poppins text-base text-[#000000] font-semibold leading-[1.5rem]">
                                        <p>{property.type}</p>
                                        <span className="text-[#EE0020]">{property.price}</span>
                                    </div>
                                    <div className='flex items-center space-x-2 text-[#EE0020] w-full'><FaLocationDot /> <span className='font-poppins text-[0.8125rem] font-normal leading-[1.21875rem] tracking-[0.05em] text-[#000]'>23 Osho Drive,Ajegunle, Lagos.</span></div>
                                    <div className="border-b border-[#00000036] flex w-full py-3">
                                        <div className="flex-1 flex flex-col items-center justify-center border-r border-[#00000036] px-1">
                                            <div className="flex items-center space-x-2 font-poppins font-semibold text-base leading-[1.5rem]">
                                                <span>{property.bed}</span> <LuBedDouble />
                                            </div>
                                            <p className="font-poppins text-[0.9375rem] font-normal leading-[1.40625rem] tracking-[0.05em]">Bedrooms</p>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center justify-center border-r border-[#00000036] px-1">
                                            <div className="flex items-center space-x-2 font-poppins font-semibold text-base leading-[1.5rem]">
                                                <span>{property.bath}</span> <GiBathtub />
                                            </div>
                                            <p className="font-poppins text-[0.9375rem] font-normal leading-[1.40625rem] tracking-[0.05em]">Bathrooms</p>
                                        </div>
                                        <div className="flex-1 flex flex-col items-center justify-center px-1">
                                            <div className="flex items-center space-x-2 font-poppins font-semibold text-base leading-[1.5rem]">
                                                <span>3450</span> <IoGolfSharp />
                                            </div>
                                            <p className="font-poppins text-[0.9375rem] font-normal leading-[1.40625rem] tracking-[0.05em]">Square ft</p>
                                        </div>
                                    </div>
                                    <section className="w-full flex justify-between">
                                        <div className="flex items-center">
                                            <div className="w-[1.875rem] h-[1.875rem] bg-[#F6F3FF] rounded-full flex items-center justify-center"><BiUser /></div>
                                            <span className="font-poppins text-[0.8125rem] font-semibold leading-[1.21875rem] text-[#000000] ml-2">{property.agentName}</span>
                                        </div>
                                        <div className="w-[1.875rem] h-[1.4375rem] bg-[#F6F3FF] flex items-center justify-center"><MdShare /></div>
                                    </section>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="w-full h-[52.6875rem] flex flex-col items-center bg-center justify-center space-y-6" style={{ backgroundImage: 'url(/bg-full-3.svg)', }}>
                <div className="flex items-center text-[#EE0020] text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 size={17} /><p>Trusted <span className="text-[#ffff]">Real estate agency</span></p></div>
                <h1 className="font-poppins text-[#fff] font-semibold text-[2.5rem] leading-[3.8rem]">Find Location By <span className="text-[#EE0020]">Location</span></h1>
                <div className="flex space-x-8">
                    <div className="flex flex-col justify-around">
                        {location.map((location, index) => (
                            <div key={index} className="w-[23.5rem] h-[6.8125rem] border-2 border-[#FFFFFF21] flex items-center justify-around">
                                <div className="h-full flex items-center">
                                    <img src={location.img} alt={`${location.name} logo`} className="w-[5.6rem] h-[5.9rem]" />
                                </div>
                                <div>
                                    <p className="font-poppins text-[1.25rem] font-semibold leading-[1.875rem] text-[#fff]">{location.name}</p>
                                    <p className="font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-[#EE0020]">{location.propertiesCount} properties</p>
                                </div>
                                <div className="text-[#EE0020] text-[1.5rem]"><HiArrowUpRight /></div>
                            </div>
                        ))}
                    </div>
                    <div>
                        <img src={location_thumb4} alt="home image" className="w-[26.0625rem] h-[29.875rem]" />
                    </div>
                    <div className="flex flex-col justify-around">
                        {location.map((location, index) => (
                            <div key={index} className="w-[23.5rem] h-[6.8125rem] border-2 border-[#FFFFFF21] flex items-center justify-around">
                                <div className="h-full flex items-center">
                                    <img src={location.img} alt={`${location.name} logo`} className="w-[5.6rem] h-[5.9rem]" />
                                </div>
                                <div>
                                    <p className="font-poppins text-[1.25rem] font-semibold leading-[1.875rem] text-[#fff]">{location.name}</p>
                                    <p className="font-poppins text-[0.875rem] font-normal leading-[1.3125rem] text-[#EE0020]">{location.propertiesCount} properties</p>
                                </div>
                                <div className="text-[#EE0020] text-[1.5rem]"><HiArrowUpRight /></div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="w-[14.3125rem] h-[3.75rem] rounded-[0.3125rem] text-[#fff] bg-[#EE0020] font-poppins text-[1.25rem] font-semibold leading-[1.875rem]">more location</button>
            </section>
            <section className="w-full h-[38.375rem] flex justify-center bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/bg-full-4.svg)', }}>
                <main className="w-[90%] relative flex flex-col justify-center space-y-4">
                    <div className="flex items-center text-[#EE0020] text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 size={17} /><p>Trusted Real estate agency</p></div>
                    <h1 className="font-poppins text-[#000] font-semibold text-[2.5rem] leading-[3.8rem]">Property By Type</h1>
                    <main className="w-full flex space-x-7 overflow-auto">
                            {
                                typeOfProperties.map((property, index) => (
                                    <div key={index} className="w-[18.75rem] h-[20.125rem] flex flex-col items-center space-y-4">
                                        <div className="w-[18.75rem] h-[15.1875rem] rounded-[0.625rem] bg-[#fff] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex items-center justify-center relative ">
                                            <img src={property.img} alt="Type of house" />
                                            <div className="absolute w-[3.0625rem] h-[3.0625rem] top-[0.6875rem] left-[14.375rem] bg-[#fff] shadow-[0px_4px_4px_0px_#00000040] rounded-full flex items-center justify-center font-poppins text-[1rem] font-normal leading-[1.5rem] text-[#EE0020]">{property.number}</div>
                                        </div>
                                        <p className="font-poppins text-[1.125rem] font-semibold leading-[1.6875rem] text-[#000]">{property.title}</p>
                                        <p className="font-poppins text-[1rem] font-semibold leading-[1.5rem] text-[#EE0020]">{property.number} Properties</p>
                                    </div>

                                ))
                            }

                    </main>
                    <div className="w-[74.5625rem] h-[10.1875rem] top-[33.3125rem] border-t border-[1px] border-[#00000038] bg-[#FFF] rounded-[0.625rem] absolute flex items-center justify-center">
                        <div className="w-[67rem] h-[7.9375rem] rounded-[0.625rem] border-[1px] border-[#00000038] bg-[#EE0020] p-4 flex justify-between">
                            <article>
                                <p className="font-poppins text-[1rem] font-semibold leading-[1.5rem] text-[#fff]">About US</p>
                                <p className="font-poppins text-[1.5rem] font-semibold leading-[2.25rem] text-[#fff]">Consult With Our Agency For Listing</p>
                                <p className="font-poppins text-[0.875rem] font-semibold leading-[1.3125rem] text-[#fff]">Our company provides a full range of services for the construction</p>
                            </article>
                            <div className="flex text-[#fff] items-center space-x-4">
                                <GrPhone size={35} />
                                <article>
                                    <p className="font-poppins text-[1rem] font-semibold leading-[1.5rem]">Phone Number</p>
                                    <p className="font-poppins text-[1rem] font-semibold leading-[1.5rem]">08066270084</p>
                                </article>
                                <button className="w-[10.875rem] h-[3.75rem] bg-[#FFFFFF] rounded-[0.3125rem] font-poppins text-[1.25rem] font-semibold leading-[1.875rem] text-[#000]">contact us</button>
                            </div>
                        </div>
                    </div>

                </main>
            </section>
        </div>
    )
}

export default Home