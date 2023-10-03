import React, { useRef, useEffect, useState } from "react";
import logo from "../../assets/logo1.png";
import { IoMdCloudDownload } from "react-icons/io";
import Resume from '../../assets/pdf/resume.pdf'


const Index = () => {
    const observer = useRef(null);
    const [activePage, setActivePage] = useState("home");
    const [isOpen, setIsOpen] = useState(false);
    const handleHam = () => {
        setIsOpen((prev) => !prev);
    };
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

        sections.forEach((section) => {
            observer.current.observe(section);
        });

        return () => observer.current.disconnect();
    }, []);

    return (
        <header
            className={`bg-secondary fixed w-full isolate lg:isolation-auto lg:w-auto lg:top-10 lg:right-16 lg:left-16 z-[100] lg:rounded-[100px] p-4 leading-5 `}
        >
            <div className="pl-6 flex justify-between items-center">
                <a
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex gap-2 md:gap-6 items-center"
                >
                    <img src={logo} alt="logo" className="w-10" />
                    <h1 className="font-black text-sm">
                        Rohit
                        <br />
                        Parihar
                    </h1>
                </a>
                <div
                    className={`fixed lg:static -z-10 lg:z-auto left-0 w-full bg-secondary lg:w-auto top-[72px] overflow-hidden lg:overflow-visible grid lg:block transition-all duration-700 ${isOpen ? 'translate-x-0' : 'translate-x-[-120%]'} lg:translate-y-0`}
                >
                    <div className={`h-screen lg:h-auto bg-secondary pt-8 lg:pt-0 w-full lg:w-auto transition-all duration-500  lg:opacity-100`}>
                        <ul className="flex flex-col h-full items-center lg:flex-row gap-8 text-xs uppercase font-extrabold">
                            <li>
                                <a
                                    className={`${activePage === "home" ? "clr-theme" : ""
                                        }`}
                                    href="#home"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`${activePage === "about"
                                        ? "clr-theme"
                                        : ""
                                        }`}
                                    href="#about"
                                    onClick={() => setIsOpen(false)}
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`${activePage === "resume"
                                        ? "clr-theme"
                                        : ""
                                        }`}
                                    href="#resume"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Resume
                                </a>
                            </li>
                            <li>
                                <a
                                    className={`${activePage === "portfolio"
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
                                    className={`${activePage === "contact"
                                        ? "clr-theme"
                                        : ""
                                        }`}
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a
                                    href={Resume}
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-[100px] p-5 px-8 border clr-theme leading-4 border-[#68e0cf]"
                                >
                                    Download cv{" "}
                                    <IoMdCloudDownload className="inline text-lg translate-y-[-1px] translate-x-1" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="lg:hidden">
                    <button
                        className="button-three"
                        onClick={handleHam}
                        aria-expanded={isOpen}
                    >
                        <svg stroke="#fff" fill="none" class="hamburger" viewBox="-10 -10 120 120" width="50">
                            <path class="line" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70">
                            </path>
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Index;
