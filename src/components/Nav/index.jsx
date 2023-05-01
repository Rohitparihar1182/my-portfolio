import React, { useRef, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdCloudDownload } from "react-icons/io";

const Index = () => {
    const observer = useRef(null);
    const [activePage, setActivePage] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const handleHam = () => {
        setIsOpen(prev => !prev)
    }
    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const navLink = document.querySelector(
                            `a[href="#${entry.target.id}"]`
                        );
                        if (navLink) {
                            setActivePage(navLink.innerText.toLowerCase());
                        }
                    }
                });
            },
            { rootMargin: "0px", threshold: 0.5 }
        );

        const sections = document.querySelectorAll("section");
        console.log(sections);

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => observer.current.disconnect();
    }, []);

    return (
        <header className={`bg-secondary fixed w-full lg:top-10 lg:right-16 lg:left-16 overflow-hidden z-[100] lg:rounded-[100px] p-4 leading-5 ${isOpen ? 'h-full' : ''}`}>
            <div className="pl-6 flex justify-between items-center">
                <a href="/" onClick={() => setIsOpen(false)} className="flex gap-6 items-center">
                    
                    <img src={logo} alt="logo" className="w-10" />
                    <h1 className="font-black text-sm">
                        Rohit
                        <br />
                        Parihar
                    </h1>
                </a>
                <div className={`absolute lg:static left-0 w-full lg:w-auto h-[100vh-72px] top-[72px] ${isOpen ? 'block' : 'hidden'} lg:block`}>
                    <ul className="flex flex-col h-full items-center lg:flex-row gap-8 text-xs uppercase font-extrabold">
                        <li>
                            <a
                                className={`${
                                    activePage === "home" ? "clr-theme" : ""
                                }`}
                                href="#home"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${
                                    activePage === "about" ? "clr-theme" : ""
                                }`}
                                href="#about"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${
                                    activePage === "resume" ? "clr-theme" : ""
                                }`}
                                href="#resume"
                                onClick={() => setIsOpen(false)}
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${
                                    activePage === "portfolio"
                                        ? "clr-theme"
                                        : ""
                                }`}
                                href="#portfolio"
                                onClick={() => setIsOpen(false)}
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                className={`${
                                    activePage === "contact" ? "clr-theme" : ""
                                }`}
                                href="#contact"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                        <li>
                            <a
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="rounded-[100px] p-5 px-8 border clr-theme leading-4 border-[#68e0cf]"
                            >
                                Download cv{" "}
                                <IoMdCloudDownload className="inline text-lg translate-y-[-1px] translate-x-1" />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button className={`${isOpen ? 'block' : 'hidden'}`} onClick={handleHam}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="18"
                        >
                            <g fill="#fff" fill-rule="evenodd">
                                <path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z" />
                            </g>
                        </svg>
                    </button>
                    <button className={`${isOpen ? 'hidden' : 'block'}`} onClick={handleHam}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="21"
                            height="22"
                        >
                            <path
                                fill="#fff"
                                fill-rule="evenodd"
                                d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Index;
