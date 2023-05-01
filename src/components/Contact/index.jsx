import React, { useState } from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import Heading from "../common/Heading";

export default function Index() {
    return (
        <section id="contact" className="py-20 px-4 md:px-14">
            <div>
                <SubHeading text={"Let's Talk"} />
                <Heading heading={'Contact'} />
            </div>
            <div className="grid lg:grid-cols-1 gap-12 mt-16">
                <MyInfo
                    name="Rohit Parihar"
                    designation="Web Developer"
                    age="22"
                    residence="India"
                    freelance="available"
                    address="Bgr, Uttarakhand"
                    phone="+91 7830558297"
                    email="rohitsinghparihar78384@gmail.com"
                />
                <ContactForm />
            </div>
        </section>
    );
}

function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        email:'',
        message: ''
    })

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData(prev => {
            return { ...prev , [name] : value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: '',
            email:'',
            message: ''
        });
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

function MyInfo({
    name,
    designation,
    age,
    residence,
    freelance,
    address,
    phone,
    email,
}) {
    return (
        <div className="border-[#585d65] border rounded-[32px]">
            <div className="p-[30px] max-w-full overflow-hidden flex flex-col h-full justify-between gap-8">
                <div>
                    <h2 className="font-extrabold text-2xl">{name}</h2>
                    <h4 className="font-bold clr-theme text-[11px] mt-1 uppercase">{designation}</h4>
                </div>
                <div className="flex flex-col gap-4 text-[14px]">
                    <div className="flex gap-3 font-bold max-w-full">
                        <h2 className="uppercase clr-theme w-[12ch]">E-mail:</h2>
                        <h2 className="text-ellipsis">{email}</h2>
                    </div>
                    <div className="flex gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Age:</h2>
                        <h2 className="">{age}</h2>
                    </div>
                    <div className="flex gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Residence:</h2>
                        <h2 className="">{residence}</h2>
                    </div>
                    <div className="flex gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Freelance:</h2>
                        <h2 className="">{freelance}</h2>
                    </div>
                    <div className="flex gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Address:</h2>
                        <h2 className="">{address}</h2>
                    </div>
                    <div className="flex gap-3 font-bold">
                        <h2 className="uppercase clr-theme w-[12ch]">Phone:</h2>
                        <h2 className="">{phone}</h2>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-mf-dafoe">Rohit</h4>
                </div>
            </div>
        </div>
    );
}
