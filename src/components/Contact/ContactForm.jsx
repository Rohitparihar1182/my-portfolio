import React, { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://formspree.io/f/xvojvqwq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful submission (e.g., show a thank you message)
                console.log('Form submitted successfully');
            } else {
                // Handle error
                console.error('Form submission failed');
            }
            setFormData({
                fullName: '',
                email: '',
                message: ''
            });
        } catch (err) {
            console.log("Some error occured")
        }

    }
    return (
        <div>
            <form className="flex flex-col gap-10" onSubmit={(e) => handleSubmit(e)}>
                <div className="relative">
                    <label
                        htmlFor="name"
                        className="uppercase text-xs font-extrabold absolute w-fit inline-block translate-y-[-50%] px-2 left-8 bg-primary"
                    >
                        Full Name <span className="clr-theme">*</span>
                    </label>
                    <input
                        type="text"
                        name="fullName"
                        id="name"
                        value={formData.fullName}
                        onChange={(e) => handleChange(e)}
                        placeholder="eg: John lennon"
                        className="w-full bg-transparent px-8 h-[64px] border-[#585d65] border rounded-[32px] resize-none text-[14px]"
                    />
                </div>
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="uppercase text-xs font-extrabold absolute w-fit inline-block translate-y-[-50%] px-2 left-8 bg-primary"
                    >
                        Email <span className="clr-theme">*</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="eg: Johnlennon@gmail.com"
                        className="w-full bg-transparent px-8 h-[64px] border-[#585d65] border rounded-[32px] resize-none text-[14px]"
                    />
                </div>
                <div className="relative">
                    <label
                        htmlFor="message"
                        className="uppercase text-xs font-extrabold absolute w-fit inline-block translate-y-[-50%] px-2 left-8 bg-primary"
                    >
                        Message <span className="clr-theme">*</span>
                    </label>
                    <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="10"
                        value={formData.message}
                        onChange={(e) => handleChange(e)}
                        placeholder="To Write"
                        className="w-full overflow-hidden max-h-[150px] bg-transparent p-8 border-[#585d65] border rounded-[32px] resize-none text-[14px]"
                    ></textarea>
                </div>
                <StyledBtn text="Send Message" />
            </form>
        </div>
    );
}

const StyledBtn = ({ text }) => {
    return (
        <div>
            <button
                href="#spacer"
                className="group w-fit font-extrabold uppercase text-xs flex justify-center align-center gap-1 rounded-[100px] p-5 px-8 border leading-4 border-[#585d65] hover:border-[#68e0cf] ease-linear transition-all duration-300 "
            >
                <span className="inline-block relative h-[18px] overflow-y-hidden">
                    <span className="block">
                        {(text + "").split("").map((char, idx) => (
                            <span
                                key={idx}
                                style={{ transitionDelay: `${idx * 25}ms` }}
                                className="group-hover:translate-y-[-16px] ease-linear transition-all duration-200 inline-block"
                            >
                                {char === " " ? "\u00a0" : char}
                            </span>
                        ))}
                    </span>
                    <span className="clr-theme block ">
                        {(text + "").split("").map((char, idx) => (
                            <span
                                key={idx}
                                style={{ transitionDelay: `${idx * 25}ms` }}
                                className="group-hover:translate-y-[-16px]  ease-linear transition-all duration-200 inline-block"
                            >
                                {char === " " ? "\u00a0" : char}
                            </span>
                        ))}
                    </span>
                </span>
            </button>
        </div>
    );
};
