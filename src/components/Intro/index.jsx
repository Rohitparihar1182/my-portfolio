import React, { useState, useEffect } from "react";
import AnimatedButton from "../../animatedComponents/Button";

const titles = ["Web Developer", "Programmer", "Freelancer", "Open to work"];

export default function Index() {
    return (
        <section id="home" className="flex flex-col justify-end lg:pt-[30vh] pb-10 border-b border-[#585d65]">
            <div>
                <div className="bg-primary w-fit mt-[-12%] mx-auto p-12 lg:mx-0 lg:mt-0 lg:translate-x-[-50%] lg:p-12 aspect-square flex justify-center items-center rounded-full">
                    <h1 className="text-6xl leading-[1.2em] font-extrabold">
                        Rohit <br />
                        Parihar
                    </h1>
                </div>
            </div>
            <div className="p-12 pt-4 md:max-w-[80%]">
                <AnimatedTitle titles={titles} />
                <p className="my-8 tracking-wide font-medium text-[14px] leading-[1.7em]">
                    Hello! I am Web Developer from India, Uttarakhand. I have
                    rich experience in web site design and building, also I am
                    good at wordpress. I love to talk with you about our unique.
                </p>
                <AnimatedButton text={"Click me"} />
            </div>
        </section>
    );
}

const AnimatedTitle = ({ titles }) => {
    const [title, setTitle] = useState(titles[0]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % titles.length);
            setTitle(prev => titles[index]);
        }, 3000)
        return () => clearInterval(interval)
    })
    
    return (
        <h2 className="typewriter clr-theme text-base font-bold"><span>{title}</span></h2>
    )
};
