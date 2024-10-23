import React, { useState } from 'react';
import icon1 from '../assets/contactIcon1.svg'
import icon3 from '../assets/contactIcon3.svg'
import icon4 from '../assets/contactIcon4.svg'
import icon5 from '../assets/contactIcon5.svg'
import icon2 from '../assets/contactIcon2.svg'

interface ContactFormFields {
    name: string;
    email: string;
    propertyType: string;
    phoneNumber: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormFields>({
        name: '',
        email: '',
        propertyType: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log(formData);
    };

    return (
        <form className="w-full bg-transaprent rounded-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                <div className="mb-4 relative">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem] font-poppins text-[1.5rem] font-normal leading-[2.25rem] text-[#5E5F63] "
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <div className='w-[1.2rem] md:w-[1.625rem] h-[1.2rem] md:h-[1.625rem] absolute top-[2.3rem] right-[1rem] md:right-[1.9rem]'>
                        <img src={icon1} alt="" className='w-full h-full' />
                    </div>
                </div>

                <div className="mb-4 relative">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem] font-poppins text-[1.5rem] font-normal leading-[2.25rem] text-[#5E5F63]"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter email  address"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div className='w-[1.2rem] md:w-[1.625rem] h-[1.2rem] md:h-[1.625rem] absolute top-[2.3rem] right-[1rem] md:right-[1.9rem]'>
                        <img src={icon2} alt="" className='w-full h-full' />
                    </div>
                </div>

                <div className="mb-4 relative">
                    <select
                        className=" appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem] font-poppins text-[1.5rem] font-normal leading-[2.25rem] text-[#5E5F63]"
                        id="propertyType"
                        name="propertyType"
                        // type="text"
                        // placeholder="Type of Property"
                        value={formData.propertyType}
                    // onChange={handleChange}
                    >
                        <option value="1"> Type of Property</option>
                    </select>
                    <div className='w-[1.2rem] md:w-[1.625rem] h-[1.2rem] md:h-[1.625rem] absolute top-[2.3rem] right-[1rem] md:right-[1.9rem]'>
                        <img src={icon3} alt="" className='w-full h-full' />
                    </div>
                </div>

                <div className="mb-4 relative">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem] font-poppins text-[1.5rem] font-normal leading-[2.25rem] text-[#5E5F63]"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                    <div className='w-[1.2rem] md:w-[1.625rem] h-[1.2rem] md:h-[1.625rem] absolute top-[2.3rem] right-[1rem] md:right-[1.9rem]'>
                        <img src={icon4} alt="" className='w-full h-full' />
                    </div>
                </div>
            </div>

            <div className="mb-6 relative">
                <textarea
                    className=" appearance-none border rounded w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[71.4rem] h-[14.25rem] font-poppins text-[1.5rem] font-normal leading-[2.25rem] text-[#5E5F63]"
                    id="message"
                    name="message"
                    placeholder="Write your message here"
                    value={formData.message}
                    onChange={handleChange}
                />
                <div className='w-[1.2rem] md:w-[1.625rem] h-[1.2rem] md:h-[1.625rem] absolute top-[2.3rem] right-[1rem] md:right-[1.9rem]'>
                    <img src={icon5} alt="" className='w-full h-full' />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <button
                    className="w-full md:w-[17.75rem] h-[4.6875rem] bg-[#EE0020] rounded-[0.3125rem] font-poppins text-[2rem] font-semibold leading-[3rem] text-[#FFFFFF]"
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
