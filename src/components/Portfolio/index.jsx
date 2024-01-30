import React, { useState } from "react";
import Heading from "../common/Heading";
import SubHeading from "../../animatedComponents/SubHeading";
import EcommerceAdminImage from '../../assets/portfolioItems/ecommerceAdmin.png';
import EcommerceStoreImage from '../../assets/portfolioItems/ecommerceStore.png';
import PragatiHRMImage from '../../assets/portfolioItems/pragatiHRM.png';
import QuizAppImage from '../../assets/portfolioItems/quizApp.png';
import HeebeeImage from '../../assets/portfolioItems/heebee.png';
import Logo from '../../assets/logo6.png';

const portfolioItems = [
    {
        name: "Pragati HRM",
        content:
            `I created a Human Resource Management (HRM) system for the
            company, leveraging Tauri and React. This involved building a user-friendly interface and integrating essential
            functionalities to enhance HR processes and improve efficiency within the organization.`,
        img: PragatiHRMImage,
    },
    {
        name: "Ecommerce Admin",
        content:
            "Unfinished!!!",
        img: EcommerceAdminImage,
    },
    {
        name: "Ecommerce Store",
        content:
            "Unfinished!!!",
        img: EcommerceStoreImage,
    },
    {
        name: "Quiz App",
        content:
            `Developed a quiz app utilizing React and the Open Trivia Database, providing users with
            an interactive platform to test their knowledge and engage in trivia challenges.`,
        img: QuizAppImage,
    },
    {
        name: "Heebee Webpos",
        content:
            ` Contributed to the development of HeeBee WebPOS project , utilizing React and Redux technologies for building a robust and efficient point-of-sale system.`,
        img: HeebeeImage,
    },
];

export default function Index() {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (tabID) => {
        if (tabID !== activeTab) setActiveTab(tabID);
    };
    return (
        <section id="portfolio" className="md:block">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-4 md:px-14">
                    <SubHeading text={"My Work"} />
                    <Heading heading={"Portfolio"} />
                    <div className="mt-12">
                        {/* accordion */}
                        <div className="flex flex-nowrap flex-col md:flex-row lg:flex-col 2xl:flex-row gap-3">
                            {portfolioItems.map((item, idx) => (
                                <PortfolioCard
                                    key={idx}
                                    name={item.name}
                                    content={item.content}
                                    img={item.img}
                                    idx={idx}
                                    activeTab={activeTab}
                                    handleClick={handleClick}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

function PortfolioCard({ name, content, idx, activeTab, handleClick, img }) {
    return (
        <div
            className={`relative overflow-hidden rounded-[30px] transition-all duration-300 ease-in p-4 max-h-72 cursor-pointer isolate ${activeTab === idx ? "basis-[350px] md:basis-full lg:basis-[350px] 2xl:basis-full" : "basis-[64px]"
                }`}
            onClick={() => handleClick(idx)}
        >
            <h2 id={`relative z-10 portfolio-title-${idx}`} className="text-lg">
                <button
                    className="clr-theme font-bold text-md"
                    aria-controls={`portfolio-content-${idx}`}
                    aria-expanded={activeTab === idx}
                >
                    {activeTab === idx ? (<span className="whitespace-nowrap absolute z-10 top-4">{name}</span>) : (<img src={Logo} alt="logo" className="max-w-[19.09px]" />)}
                </button>
            </h2>
            <div
                id={`portfolio-content-${idx}`}
                className="relative z-10 mt-2 leading-5 font-semibold text-sm"
                aria-labelledby={`portfolio-title-${idx}`}
                role="region"
            >
                <p style={activeTab === idx ? { transition: 'all 300ms linear 300ms', opacity: 1 } : { transition: 'all 100ms linear', opacity: 0 }}>{content}</p>
            </div>
            <img
                draggable='false'
                src={img}
                alt={name}
                className="absolute inset-0 object-cover w-full h-full -z-10"
            />
            <div className={`absolute inset-0 object-cover w-full h-full -z-9 transition duration-300 ${activeTab === idx ? " bg-black/30" : ""}`}></div>
        </div>
    );
}
