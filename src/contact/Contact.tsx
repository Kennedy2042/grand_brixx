import { MdEmail, MdLocationOn, MdLocalPhone } from "react-icons/md"
import map from '../assets/googleMap.svg'
import ContactForm from "./ContactForm"




const contact = [
  {
    icon: <MdEmail className="w-[5rem] h-[5rem]" />,
    title: 'Mail Address',
    description: 'grandbrixxproperties@gmail.com'
  },
  {
    icon: <MdLocationOn className="w-[5rem] h-[5rem]" />,
    title: 'Office Address',
    description: 'grandbrixxproperties@gmail.com'
  },
  {
    icon: <MdLocalPhone className="w-[5rem] h-[5rem]" />,
    title: 'Phone Number',
    description: 'grandbrixxproperties@gmail.com'
  },
]


const Contact = () => {




  return (
    <div className="w-full  bg-[#F8F7FC] flex flex-col justify-center items-center">
      <div className="md:w-[90%] md:h-[58.375rem] flex justify-between items-center md:flex-row flex-col-reverse p-3 md:p-0 ">
        <div className=" space-y-4 md:space-y-0">
          {
            contact.map((contact, index) => (
              <div className="md:w-[30.125rem] md:h-[9.875rem] flex md:p-5" key={index}>
                <div className=" flex items-center  text-[#EE0020]">
                  {
                    contact.icon
                  }
                </div>
                <div className="md:ml-[1.5rem] flex flex-col justify-center">
                  <h1 className="font-poppins text-[1.5rem] font-semibold leading-[2.25rem] text-[#000000]">{contact.title}</h1>
                  <p className="font-poppins text-[0.9375rem] font-normal leading-[1.40625rem] text-[#000000]">{contact.description}</p>
                </div>
              </div>
            ))
          }
        </div>
        <div className="mb-4">
          <img src={map} alt="" className="" />
        </div>
      </div>
      <section className="w-full bg-[#FFF] flex  justify-center">
        <main className="md:w-[76.75rem] md:h-[63.3125rem] rounded-[0.625rem] bg-[#F8F7FC] my-[1rem] md:my-[3rem] shadow-[0px_4px_4px_0px_#00000040] p-3 md:p-[4rem] md:space-y-8">
          <h1 className="font-poppins text-[1.5rem] md:text-[2.5rem] font-semibold leading-[3.75rem] tracking-[0.05em] text-[#000000]">Drop us a line</h1>
          <p className="font-poppins text-base md:text-[1.25rem] font-normal leading-[1.875rem] text-[#5E5F63]">Your email address will not be published. Required fields are marked *</p>
            <ContactForm/>
        </main>
      </section>
    </div>
  )
}

export default Contact