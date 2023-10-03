import React from 'react'
import { FiChevronRight } from "react-icons/fi";

const AnimatedButton = ({ text }) => {
    return (
        <div>
            <a
                href="#contact"
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
                <FiChevronRight className="group-hover:text-[#68e0cf] inline text-lg group-hover:translate-x-1 translate-y-[-1px] ease-linear transition-all " />
            </a>
        </div>
    );
};

export default AnimatedButton