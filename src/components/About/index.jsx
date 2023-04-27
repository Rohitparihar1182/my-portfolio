import React, { useRef, useState } from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import { SiGraphql } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { BsGithub, BsFillDatabaseFill } from "react-icons/bs";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
];

export default function Index() {
    const carouselRef = useRef(null);
    return (
        <section id="about">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-14">
                    <SubHeading text={"My Story"} />
                    <h2 className="mt-4 text-6xl font-extrabold">About Me</h2>
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
                        <h2 className="mt-4 text-6xl font-extrabold">
                            Technical Skills
                        </h2>
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
                    <div className="mt-12">
                        <SubHeading text={"Programming Langauages"} />
                        <h2 className="mt-4 text-6xl font-extrabold">
                            Languages
                        </h2>
                        <div className="container-fluid mt-12 relative">
                            <div className="carousel-trigger absolute top-[-50%] right-0">
                                <button
                                    className="w-[56px] aspect-square rounded-full border border-[#585d65] text-lg font-bold leading-10"
                                    onClick={() => carouselRef.current.prev()}
                                >
                                    {/* <IoIosArrowBack className="mx-auto font-bold" /> */}
                                    <IoIosArrowRoundBack className="mx-auto font-bold" />
                                </button>
                                <button
                                    className="w-[56px] ml-4 aspect-square rounded-full border border-[#585d65]  text-lg font-bold leading-10"
                                    onClick={() => carouselRef.current.next()}
                                >
                                    <IoIosArrowRoundForward className="mx-auto font-bold" />
                                    {/* <IoIosArrowForward className="mx-auto font-bold" /> */}
                                </button>
                            </div>
                            <OwlCarousel
                                ref={carouselRef}
                                items={2}
                                className="owl-theme"
                                loop
                                margin={8}
                                navContainerClass="absolute top-[-100px] z-[30] right-0"
                                navClass={["hidden", "hidden"]}
                                nav={false}
                                dots={false}
                                
                            >
                                {images.map((image, idx) => (
                                    <div
                                        key={idx}
                                    >
                                        <img
                                            src={image}
                                            alt="temp"
                                            className="img"
                                        />
                                    </div>
                                ))}
                            </OwlCarousel>
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
