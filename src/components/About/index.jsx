import React from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import { SiGraphql } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { BsGithub, BsFillDatabaseFill } from "react-icons/bs";
import Heading from "../common/Heading";

const personalDetail = [
    {
        name: "age",
        value: "21",
    },
    {
        name: "email",
        value: "rohitsinghparihar78384@gmail.com",
    },
    {
        name: "phone",
        value: "+91 7830558297",
    },
    {
        name: "residence",
        value: "India",
    },
    {
        name: "address",
        value: "Bgr, Uttarakhand",
    },
    {
        name: "freelance",
        value: "available",
    },
];

export default function Index() {
    return (
        <section id="about">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-4 md:px-14">
                    <SubHeading text={"My Story"} />
                    <Heading heading={"About Me"} />
                    <p className="mb-6 mt-10 tracking-wide font-medium text-[14px] leading-[1.7em]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta a numquam, optio mollitia harum laudantium
                        delectus ea maiores doloremque sit officia consequuntur,
                        aliquid quos neque in iste repudiandae veritatis
                        incidunt consequatur eveniet dolor aliquam ipsa? Vero
                        rem enim qui consequuntur.
                    </p>
                    <p className="my-8 tracking-wide font-medium text-[14px] leading-[1.7em]">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Dicta a numquam, optio mollitia harum laudantium
                        delectus ea maiores doloremque sit officia consequuntur,
                        aliquid quos neque in iste repudiandae veritatis
                        incidunt consequatur eveniet dolor aliquam ipsa? Vero
                        rem enim qui consequuntur.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {personalDetail.map((item, idx) => (
                            <div className="flex" key={idx}>
                                <div className="min-w-[11ch] uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        {item.name}:
                                    </h3>
                                </div>
                                <div className="overflow-hidden">
                                    <h3 className="whitespace-nowrap text-ellipsis text-sm font-bold">
                                        {item.value}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </article>
            <article className="py-20 border-b border-[#585d65]">
                <div className="px-4 md:px-14">
                    <div>
                        <SubHeading text={"What I do"} />
                        <Heading heading={"Technical Skills"} />
                        <div className="mt-12 grid grid-cols-2 gap-6">
                            <Card
                                icon={
                                    <SiGraphql className="clr-theme text-4xl" />
                                }
                                title={
                                    <span>
                                        Data Structures <br />& Algorithms
                                    </span>
                                }
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat vitae? Odio quibusdam in quis?"
                            />
                            <Card
                                icon={
                                    <IoCodeSlash className="clr-theme text-4xl" />
                                }
                                title={
                                    <span>
                                        Web <br />
                                        Development
                                    </span>
                                }
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat vitae? Odio quibusdam in quis?"
                            />
                            <Card
                                icon={
                                    <BsGithub className="clr-theme text-4xl" />
                                }
                                title={
                                    <span>
                                        Git & <br />
                                        Github
                                    </span>
                                }
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat vitae? Odio quibusdam in quis?"
                            />
                            <Card
                                icon={
                                    <BsFillDatabaseFill className="clr-theme text-4xl" />
                                }
                                title={
                                    <span>
                                        Database <br />
                                        Management
                                    </span>
                                }
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repellat vitae? Odio quibusdam in quis?"
                            />
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
}

function Card({ icon, title, description }) {
    return (
        <div className="flex flex-col">
            <div className="">{icon}</div>
            <h3 className="mt-5 text-base font-extrabold">{title}</h3>
            <p className="my-8 tracking-wide font-medium text-[14px] leading-[1.7em]">
                {description}
            </p>
        </div>
    );
}
