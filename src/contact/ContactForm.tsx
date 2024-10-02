import React, { useState } from 'react';

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
        <form className="w-full mx-auto p-4 bg-transaprent rounded-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem]"
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem]"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem]"
                        id="propertyType"
                        name="propertyType"
                        type="text"
                        placeholder="Type of Property"
                        value={formData.propertyType}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-4">
                    <input
                        className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[33.4375rem] h-[6.25rem]"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="tel"
                        placeholder="Your Phone Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="mb-6">
                <textarea
                    className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#5E5F63] bg-transparent w-[71.4rem] h-[14.25rem]"
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Send
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
