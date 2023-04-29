import React, { useRef } from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Heading from "../common/Heading";

const education = [
    {
        name: "Amrapali Institute Of Technology",
        duration: "2019-2022",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam, optio mollitia harum laudantium delectus ea maiores doloremque sit officia `,
        degree: "BCA",
    },
    {
        name: "Vivekanand Vidhya Mandi",
        duration: "2017-2019",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam, optio mollitia harum laudantium delectus ea maiores doloremque sit officia `,
        degree: "Class 12th",
    },
    {
        name: "Vivekanand Vidhya Mandi",
        duration: "2015-2017",
        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam, optio mollitia harum laudantium delectus ea maiores doloremque sit officia `,
        degree: "Class 10th",
    },
];

const experience = [
    {
        company: "Offshore Marketers",
        duration: "2 Months",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam, optio mollitia harum laudantium delectus ea maiores doloremque sit officia",
        designation: "Wordpress Developer",
    },
    {
        company: "Quadb Technologies",
        duration: "4 Months",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam, optio mollitia harum laudantium delectus ea maiores doloremque sit officia",
        designation: "React Js Developer",
    },
];

const codingSkills = [
    {
        name: "HTML, CSS",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
        perc: "80",
    },
    {
        name: "JavaScript",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
        perc: "70",
    },
    {
        name: "React",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
        perc: "70",
    },
    {
        name: "Java",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
        perc: "60",
    },
];

export default function Index() {
    const educationCarouselRef = useRef(null);
    const experienceCarouselRef = useRef(null);
    return (
        <section id="resume">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-14 overflow-hidden">
                    <SubHeading text={"Studied At"} />
                    <Heading heading={"Education"} />
                    <div className="container-fluid mt-12 relative ">
                        <div className="carousel-trigger absolute top-[-50%] right-0">
                            <button
                                className="w-[56px] aspect-square rounded-full border border-[#585d65] text-lg font-bold leading-10"
                                onClick={() =>
                                    educationCarouselRef.current.prev()
                                }
                            >
                                {/* <IoIosArrowBack className="mx-auto font-bold" /> */}
                                <IoIosArrowRoundBack className="mx-auto font-bold" />
                            </button>
                            <button
                                className="w-[56px] ml-4 aspect-square rounded-full border border-[#585d65]  text-lg font-bold leading-10"
                                onClick={() =>
                                    educationCarouselRef.current.next()
                                }
                            >
                                <IoIosArrowRoundForward className="mx-auto font-bold" />
                                {/* <IoIosArrowForward className="mx-auto font-bold" /> */}
                            </button>
                        </div>
                        <OwlCarousel
                            ref={educationCarouselRef}
                            items={2}
                            className="owl-theme"
                            loop
                            margin={8}
                            navContainerClass="absolute top-[-100px] z-[30] right-0"
                            navClass={["hidden", "hidden"]}
                            nav={false}
                            dots={false}
                        >
                            {education.map((edu, idx) => {
                                return (
                                    <EducationCard
                                        key={idx + 1}
                                        degree={edu.degree}
                                        text={edu.text}
                                        name={edu.name}
                                        duration={edu.duration}
                                    />
                                );
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </article>
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-14 overflow-hidden">
                    <SubHeading text={"Studied At"} />
                    <Heading heading={"Experience"} />
                    <div className="container-fluid mt-12 relative ">
                        <div className="carousel-trigger absolute top-[-50%] right-0">
                            <button
                                className="w-[56px] aspect-square rounded-full border border-[#585d65] text-lg font-bold leading-10"
                                onClick={() =>
                                    experienceCarouselRef.current.prev()
                                }
                            >
                                {/* <IoIosArrowBack className="mx-auto font-bold" /> */}
                                <IoIosArrowRoundBack className="mx-auto font-bold" />
                            </button>
                            <button
                                className="w-[56px] ml-4 aspect-square rounded-full border border-[#585d65]  text-lg font-bold leading-10"
                                onClick={() =>
                                    experienceCarouselRef.current.next()
                                }
                            >
                                <IoIosArrowRoundForward className="mx-auto font-bold" />
                                {/* <IoIosArrowForward className="mx-auto font-bold" /> */}
                            </button>
                        </div>
                        <OwlCarousel
                            ref={experienceCarouselRef}
                            items={2}
                            className="owl-theme"
                            loop
                            margin={8}
                            navContainerClass="absolute top-[-100px] z-[30] right-0"
                            navClass={["hidden", "hidden"]}
                            nav={false}
                            dots={false}
                        >
                            {experience.map((exp, idx) => {
                                return (
                                    <ExperienceCard
                                        key={idx + 1}
                                        company={exp.company}
                                        designation={exp.designation}
                                        text={exp.text}
                                        duration={exp.duration}
                                    />
                                );
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </article>

            <article className="py-20 border-b border-[#585d65]">
                <div className="px-14">
                    <SubHeading text={"Coding Languages"} />
                    <Heading heading="Languages" />
                    <div className="mt-12 grid grid-cols-3 gap-3">
                        {codingSkills.map((skill, idx) => (
                            <CodingSkillsCard
                                name={skill.name}
                                text={skill.text}
                                perc={skill.perc}
                                key={idx}
                            />
                        ))}
                    </div>
                </div>
            </article>
        </section>
    );
}

function EducationCard({ duration, name, text, degree }) {
    return (
        <div className="pr-8">
            <div className="flex gap-4">
                <h4 className="writing-lr text-[11px] clr-theme font-bold">
                    {duration}
                </h4>
                <h3 className="grow text-[18px] font-extrabold max-w-[18ch]">
                    {name}
                </h3>
            </div>
            <div>
                <p className="mb-6 mt-6 tracking-wide font-medium text-[14px] leading-[1.7em]">
                    <span className="font-extrabold">{degree}:</span>&nbsp;{" "}
                    {text}
                </p>
            </div>
        </div>
    );
}

function ExperienceCard({ duration, company, text, designation }) {
    return (
        <div className="pr-8">
            <div className="flex gap-4">
                <h4 className="writing-lr text-[11px] clr-theme font-bold">
                    {duration}
                </h4>
                <h3 className="grow text-[18px] font-extrabold max-w-[12ch]">
                    {company}
                </h3>
            </div>
            <div>
                <p className="mb-6 mt-6 tracking-wide font-medium text-[14px] leading-[1.7em]">
                    <span className="font-extrabold">{designation}:</span>&nbsp;{" "}
                    {text}
                </p>
            </div>
        </div>
    );
}

const CIRCLE_PERIMETER = 188.49555921538757;

function CodingSkillsCard({ perc, name, text }) {
    const dashOffset = (perc / 100) * CIRCLE_PERIMETER;
    return (
        <div>
            <div className="">
                <div className="inline-block relative scale-125">
                    <svg class="w-20 h-20">
                        <circle
                            class="text-transparent"
                            stroke-width="3"
                            stroke="currentColor"
                            fill="transparent"
                            r="30"
                            cx="40"
                            cy="40"
                        ></circle>
                        <circle
                            class="clr-theme"
                            stroke-width="3"
                            stroke-linecap="round"
                            stroke="currentColor"
                            fill="none"
                            r="30"
                            cx="40"
                            cy="40"
                            stroke-dasharray={CIRCLE_PERIMETER}
                            stroke-dashoffset={CIRCLE_PERIMETER - dashOffset}
                        ></circle>
                    </svg>
                    <span class="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] clr-theme text-[9px] ">
                        {perc}%
                    </span>
                </div>
                <div className="mt-4">
                <h3 className="grow text-base font-extrabold">
                    {name}
                </h3>
                </div>
                <div className="mt-4">
                <p className="mb-6 mt-6 tracking-wide font-medium text-[14px] leading-[1.7em]">
                    {text}
                </p>
                </div>
            </div>
        </div>
    );
}
