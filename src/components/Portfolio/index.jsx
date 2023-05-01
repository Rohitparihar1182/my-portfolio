import React, { useState } from "react";
import Heading from "../common/Heading";
import SubHeading from "../../animatedComponents/SubHeading";

const portfolioItems = [
    {
        name: "Name",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vel nihil ipsam voluptatum pariatur dolor velit fugiat iste odio iure!",
        img: "https://unsplash.it/500/500",
    },
    {
        name: "Name",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vel nihil ipsam voluptatum pariatur dolor velit fugiat iste odio iure!",
        img: "https://unsplash.it/500/500",
    },
    {
        name: "Name",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vel nihil ipsam voluptatum pariatur dolor velit fugiat iste odio iure!",
        img: "https://unsplash.it/500/500",
    },
    {
        name: "Name",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vel nihil ipsam voluptatum pariatur dolor velit fugiat iste odio iure!",
        img: "https://unsplash.it/500/500",
    },
    {
        name: "Name",
        content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae vel nihil ipsam voluptatum pariatur dolor velit fugiat iste odio iure!",
        img: "https://unsplash.it/500/500",
    },
];

export default function Index() {
    const [activeTab, setActiveTab] = useState(0);
    const handleClick = (tabID) => {
        if (tabID !== activeTab) setActiveTab(tabID);
    };
    return (
        <section id="portfolio" className=" hidden md:block">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-4 md:px-14px-14">
                    <SubHeading text={"My Work"} />
                    <Heading heading={"Portfolio"} />
                    <div className="mt-12">
                        {/* accordion */}
                        <div className="flex flex-nowrap gap-3">
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

function PortfolioCard({ name, content, idx, activeTab, handleClick }) {
    const ariaExpanded = true;
    return (
        <div
            className={`relative overflow-hidden rounded-[30px] transition-all duration-300 ease-in p-4 max-h-72 cursor-pointer isolate ${
                activeTab === idx ? "basis-full" : "basis-[84px]"
            }`}
            onClick={() => handleClick(idx)}
        >
            <h2 id={`portfolio-title-${idx}`} className="">
                <button
                    className=""
                    aria-controls={`portfolio-content-${idx}`}
                    aria-expanded={ariaExpanded}
                >
                    {name}
                </button>
            </h2>
            <div
                id={`portfolio-content-${idx}`}
                className=""
                aria-labelledby={`portfolio-title-${idx}`}
                role="region"
            >
                <p style={activeTab === idx ? {transition: 'all 300ms linear 300ms', opacity: 1} : {transition: 'all 100ms linear', opacity: 0}}>{content}</p>
                <img
                    src="https://images.unsplash.com/photo-1682258687337-9d2ca99054cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt={name}
                    className="absolute inset-0 object-cover w-full h-full -z-10"
                />
            </div>
        </div>
    );
}
