import React, { useEffect } from "react";

const TEXT = ["Aye You!", "Welcome"];

export default function PageLoader() {
    const [style, setStyle] = React.useState({});
    const [style2, setStyle2] = React.useState({});
    useEffect(() => {
        setTimeout(() => {
            setStyle({
                transform: "translateY(-100%)",
            });
            setTimeout(() => {
                setStyle({
                    display: "none",
                });
            }, 500);
        }, 2600);
        setTimeout(() => {
            setStyle2({
                transform: "translateY(-100%)",
            });
            setTimeout(() => {
                setStyle2({
                    display: "none",
                });
            }, 500);
        }, 2300);
    }, []);
    return (
        <div
            style={style}
            className="z-[1000] origin-top bg-[#10DAC3] transition-all duration-500 ease-in-out fixed inset-0 text-center"
        >
            <div style={style2} className=" origin-top transition-all duration-500 h-full w-full flex justify-center items-center bg-[#212121]">
                <div>
                    {TEXT.map((word, idx) => {
                        return (
                            <h2
                                className="loader-animation-title text-rose-500 text-5xl sm:text-5xl md:text-8xl lg:text-9xl font-black italic m-0"
                                key={idx}
                            >
                                {word.split("").map((letter, id) => {
                                    return (
                                        <span
                                            key={id}
                                            style={{
                                                animationDelay: `${id * 100}ms`,
                                            }}
                                            className="inline-block"
                                        >
                                            {letter}
                                        </span>
                                    );
                                })}
                            </h2>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
