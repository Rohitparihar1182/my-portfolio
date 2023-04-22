import React, { useRef, useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { IoMdCloudDownload } from "react-icons/io";

const Index = () => {
    const observer = useRef(null);
    const [activePage, setActivePage] = useState("home");

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
        console.log(sections)
    
        sections.forEach((section) => {
          observer.current.observe(section);
        });
    
        return () => observer.current.disconnect();
      }, []);

    return (
        <header className="bg-secondary fixed top-10 right-16 left-16 z-[100] rounded-[100px] p-4 leading-5">
            <div className="pl-6 flex justify-between items-center">
                <a href="/" className="flex gap-6 items-center" >
                    <img src={logo} alt="logo" className="w-10" />
                    <h1 className="font-black text-sm">
                        Rohit
                        <br />
                        Parihar
                    </h1>
                </a>
                <div className="">
                    <ul className="flex gap-8 text-xs uppercase font-extrabold">
                        <li>
                            <a className={`${activePage === 'home' ? "clr-theme" : ""}`} href="#home">Home</a>
                        </li>
                        <li>
                            <a className={`${activePage === 'about' ? "clr-theme" : ""}`} href="#about">About</a>
                        </li>
                        <li>
                            <a className={`${activePage === 'resume' ? "clr-theme" : ""}`} href="#resume">Resume</a>
                        </li>
                        <li>
                            <a className={`${activePage === 'portfolio' ? "clr-theme" : ""}`} href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className={`${activePage === 'contact' ? "clr-theme" : ""}`} href="#contact">Contact</a>
                        </li>
                        <li>
                            <a className={`${activePage === 'spacer' ? "clr-theme" : ""}`} href="#spacer">Spacer</a>
                        </li>
                        <li>
                            <a
                                href="#spacer"
                                className="rounded-[100px] p-5 px-8 border clr-theme leading-4 border-[#68e0cf]"
                            >
                                Download cv{" "}
                                <IoMdCloudDownload className="inline text-lg translate-y-[-1px] translate-x-1" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Index