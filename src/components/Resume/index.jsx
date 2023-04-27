import React, { useRef } from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Index() {
    const educationCarouselRef = useRef(null);
    return (
        <section id="resume">
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-14 overflow-hidden">
                    <SubHeading text={"Studied At"} />
                    <h2 className="mt-4 text-6xl font-extrabold">Education</h2>
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
                            <Card
                                key={1}
                                duration={"2017-2019"}
                                degree={"12th"}
                                name={"Vivekanad Vidhya Mandir"}
                                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dicta a numquam, optio mollitia harum laudantium delectus ea
                            maiores doloremque sit officia `}
                            />
                            <Card
                                key={2}
                                duration={"2017-2019"}
                                degree={"12th"}
                                name={"Vivekanad Vidhya Mandir"}
                                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dicta a numquam, optio mollitia harum laudantium delectus ea
                            maiores doloremque sit officia `}
                            />
                            <Card
                                key={3}
                                duration={"2017-2019"}
                                degree={"12th"}
                                name={"Vivekanad Vidhya Mandir"}
                                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dicta a numquam, optio mollitia harum laudantium delectus ea
                            maiores doloremque sit officia `}
                            />
                            <Card
                                key={4}
                                duration={"2017-2019"}
                                degree={"12th"}
                                name={"Vivekanad Vidhya Mandir"}
                                text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Dicta a numquam, optio mollitia harum laudantium delectus ea
                            maiores doloremque sit officia `}
                            />
                        </OwlCarousel>
                    </div>
                </div>
            </article>
            <article className="py-20 flex items-center border-b border-[#585d65]">
                <div className="px-14">
                    <SubHeading text={"Coding Platforms"} />
                    <h2 className="mt-4 text-6xl font-extrabold">Coding Profiles</h2>
                </div>
            </article>
        </section>
    );
}

function Card({ duration, name, text, degree }) {
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
