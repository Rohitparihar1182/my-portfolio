import React from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import { SiGraphql } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { BsGithub, BsFillDatabaseFill } from "react-icons/bs";
import Heading from "../common/Heading";

export default function Index() {
    return (
        <section id="about">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-14">
                    <SubHeading text={"My Story"} />
                    <Heading heading={'About Me'} />
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
                    <div className="grid grid-cols-2 mt-4 gap-4">
                        <div>
                            <div className="grid grid-cols-3 mb-3">
                                <div className="col-span-1 uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        AGE:
                                    </h3>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold">21</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 mb-3">
                                <div className="col-span-1 uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        EMAIL:
                                    </h3>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-sm whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                                        rohitsinghparihar78384@gmail.com
                                    </h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        PHONE:
                                    </h3>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold">
                                        +91 7830558297
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid grid-cols-3 mb-3">
                                <div className="col-span-1 uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        Residence:
                                    </h3>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold">India</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 mb-3">
                                <div className="col-span-1 uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        ADDRESS:
                                    </h3>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold">
                                        Bageshwar, Uttarakhand
                                    </h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-3">
                                <div className="col-span-1 uppercase">
                                    <h3 className="text-sm clr-theme font-bold">
                                        Freelance:
                                    </h3>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-sm font-bold">
                                        Available
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="py-20 border-b border-[#585d65]">
                <div className="px-14">
                    <div>
                        <SubHeading text={"What I do"} />
                        <Heading heading={'Technical Skills'} />
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
