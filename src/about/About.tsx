import { ImHome3 } from "react-icons/im"
import aboutHero from '../assets/aboutHero.svg'
import offerIcon1 from '../assets/offerIcon1.svg'
import offerIcon2 from '../assets/offerIcon2.svg'
import offerIcon3 from '../assets/offerIcon3.svg'
import teamPix from '../assets/team.svg'
import partner1 from '../assets/partner1.svg'
import partner2 from '../assets/partner2.svg'
import partner3 from '../assets/partner3.svg'
import partner4 from '../assets/partner4.svg'
import partner5 from '../assets/partner5.svg'

const whatOffer = [
  {
    logo: offerIcon1,
    title: 'Excellent Sales',
    description: 'We have a team of experts who  effectively market your property to potential buyers or tenants. With our expertise in advertising and promotion, we can help you reach a wider audience and maximize your property’s exposure in the market.',
  },
  {
    logo: offerIcon2,
    title: 'Professional Valuers',
    description: 'Our professional valuers have extensive knowledge and experience in property valuation, ensuring accurate and reliable assessments.we provide Valuation services for all purposes. Whether you need a property valuation for insurance, taxation, or any other reason.'
  },
  {
    logo: offerIcon3,
    title: 'Trusted Services',
    description: 'we are a trusted name in the real estate industry, known for our quality services and customer satisfaction. '
  },
  {
    logo: '',
    title: 'Clear-Cut Services',
    description: 'We specialize in Real Estate Services, including short-term rentals, letting, leasing, and sales. Whether you’re looking for a place to stay temporarily or a long-term rental, we can help you find the perfect property. We have a variety of options available to suit different budgets and preferences.'
  }
]

const coreValue = [
  {
    title: 'Integrity and Transparency',
    description: 'Upholding honesty and clear communication in every transaction. Trust is the foundation of real estate relationships, and transparency builds long-lasting partnerships with clients.'
  },
  {
    title: 'Customer-Centric Focus',
    description: 'Prioritizing the needs and goals of clients, offering personalized service and attention to detail that ensures a smooth and satisfying experience, whether buying, selling, or renting.'
  },
  {
    title: 'Innovation and Adaptability',
    description: 'Embracing technology and new trends in the real estate market to offer modern solutions and stay competitive. Constantly adapting to industry changes to provide cutting-edge services and experiences.'
  }
]

const team = [
  {
    pix: teamPix,
    name: 'Samuel Uju',
    role: 'Founder'
  },
  {
    pix: teamPix,
    name: 'Samuel Uju',
    role: 'Marketer'
  },
  {
    pix: teamPix,
    name: 'Samuel Uju',
    role: 'Founder'
  },
  {
    pix: teamPix,
    name: 'Samuel Uju',
    role: 'Site Manager'
  },
]



const partner = [
  partner1, partner2, partner3, partner4, partner5
]













const About = () => {
  return (
    <div className="w-full flex items-center bg-[#F8F7FC] flex-col ">
      <div className="w-[90%] flex flex-col md:flex-row my-[1rem] md:my-[4rem] justify-between">
        <div className="shrink-0 md:space-y-[4rem] flex flex-col-reverse md:flex-col">
          <div className="flex items-center  text-[1.1rem] md:text-[1.3rem] text-center text-[#EE0020] mt-[1.5rem] md:mt-[0] font-semibold leading-[1.9rem] font-poppins"><ImHome3 className="hidden md:block" /> <p>About GrandBrixx Properties Limited</p></div>
          <img src={aboutHero} alt="" className="md:w-[37.5rem] md:h-[28.18625rem]" />
        </div>
        <div className="flex flex-col items-center md:items-start justify-center md:w-[37.5rem]">
          <p className="font-poppins text-[1.5rem] md:text-[2.25rem] text-center md:text-left font-semibold leading-[2.25rem] md:leading-[3.375rem] text-[#000000] md:text-[#EE0020] ">Property Selling</p>
          <p className="font-poppins text-[0.875rem] md:text-[1.25rem] font-normal leading-[1.875rem] md:leading-[3.125rem] text-[#000000] text-center md:text-left">we specialize in Real Estate Services, including short-term rentals, letting, leasing, and sales. Whether you’re looking for a place to stay temporarily or a long-term rental, we can help you find the perfect property. We have a variety of options available to suit different budgets and preferences.</p>
          <button className="w-[15.3rem] h-[3.75rem] rounded bg-[#EE0020] text-[#ffff] font-poppins font-semibold text-[1.25rem] leading-[1.875rem]">Contact us</button>
        </div>
      </div>
      <section className="w-full h-[44.8rem] flex justify-center bg-center bg-no-repeat items-center relative" style={{ backgroundImage: 'url(/bg-full-2.svg)', backgroundSize: 'cover' }}>
        <div className="w-[90%] md:space-y-8">
          <div className="flex items-center text-[#EE0020] text-center text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 /> <p>Trusted Real estate agency</p></div>
          <h1 className="font-poppins text-[#000] font-semibold text-[1.5rem] md:text-[2.5rem] leading-[3.8rem] text-center md:text-left mb-[1rem] md:mb-[0rem]">What We have To Offer</h1>
          <div className="flex overflow-auto no-scrollbar">
            {
              whatOffer.map((offer, index) => (
                <div key={index} className="h-[25.875rem] md:h-[25.875rem] w-[23.125rem] md:w-[33.25rem] mr-[3rem] shrink-0 flex flex-col justify-between p-6 bg-[#FFF] shadow-[0px_4px_4px_0px_#00000040] rounded-[0.625rem] mb-1">
                  <img src={offer.logo} alt="Icon" className="w-12 h-12" />
                  <h1 className="font-poppins text-[2rem] font-semibold leading-[3rem] text-left text-[#EE0020] mt-6">{offer.title}</h1>
                  <p className="flex-grow mt-6 text-left font-poppins text-base font-normal leading-[1.2rem] md:leading-6 text-[#000000]">{offer.description}</p>
                  <button className="text-[#EE0020] font-poppins text-base font-bold leading-6  bg-none text-left">Contact us</button>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className="w-full h-[42.375rem] md:h-[52.6875rem] flex flex-col items-center bg-center justify-center space-y-6" style={{ backgroundImage: 'url(/bg-full-3.svg)', }}>
        <div className="flex items-center text-[#EE0020] text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 size={17} /><p>Trusted <span className="text-[#ffff]">Real estate agency</span></p></div>
        <h1 className="font-poppins text-[#fff] font-semibold text-[2rem] md:text-[2.5rem] leading-[3rem] md:leading-[3.8rem]">Cover <span className="text-[#EE0020]">Values</span></h1>
        <div className="w-[90%] flex overflow-auto no-scrollbar">
          {
            coreValue.map((values, index) => (
              <div className="w-[32rem] h-[20.375rem] bg-[#FFF] rounded-[0.625rem] p-6 shrink-0 mr-[2rem] mb-[0.5rem]" key={index}>
                <h1 className="text-[#EE0020] font-poppins text-[2rem] font-semibold leading-[3rem]">{values.title}</h1>
                <p className="font-poppins text-base font-normal leading-[2.5rem] text-[#000000] p-6">{values.description}</p>
              </div>

            ))
          }
        </div>
      </section>
      <section className="w-full md:h-[48.9375rem] flex justify-center bg-center bg-no-repeat bg-cover" style={{ backgroundImage: 'url(/bg-full-4.svg)', }}>
        <main className="md:w-[90%] relative flex flex-col items-center md:items-start justify-center md:space-y-4">
          <div className="flex items-center text-[#EE0020] text-center text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 size={17} /><p>Trusted Real estate agency</p></div>
          <h1 className="font-poppins text-[#000] font-semibold text-[2rem] md:text-[2.5rem] leading-[3rem] md:leading-[3.8rem]">Meet The Team </h1>
          <div className="flex flex-wrap justify-center md:justify-between md:gap-[5rem] gap-[2rem] w-full">
            {
              team.map((team, index) => (
                <div className="w-[90%] md:w-[30.125rem] h-[9.875rem] rounded-[0.3125rem] shadow-[0px_4px_4px_0px_#00000040] flex p-5" key={index}>
                  <div className="flex-shrink-0">
                    <img src={team.pix} alt="Team DP" className="w-[7.875rem] h-[7.125rem]" />
                  </div>
                  <div className="ml-[1rem] md:ml-[1.5rem] flex flex-col justify-center">
                    <h1 className="font-poppins text-[1rem] md:text-[1.875rem]  font-bold md:font-medium leading-[2.8125rem]">{team.name}</h1>
                    <p className="font-poppins text-[0.8rem] md:text-[1.5rem] font-medium leading-[2.25rem]">{team.role}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </main>
      </section>
      <section className="w-full flex justify-center">
        <div className="w-[90%] space-y-[2rem] mb-[2rem] mt-[1rem]">
          <div className="flex items-center text-[#EE0020] text-[1.3rem] font-semibold leading-[1.9rem] font-poppins"><ImHome3 size={17} /><p>Trusted By</p></div>
          <div className="flex justify-between overflow-auto no-scrollbar gap-[2rem] md:gap-[0]">
            {
              partner.map((partner, index) => (
                <img src={partner} alt="partner logo" key={index} />
              ))

            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default About