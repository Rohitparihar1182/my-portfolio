import React from "react";

export default function index() {
    return (
        <div className="h-[600px] image-section lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-[30%] xl:w-[45%] bg-black">
            <div className=" lg:block absolute inset-0 bg-[#68e0cf]/20"></div>
            <img src={"avatar1.jpg"} alt="Rohit Parihar" className=" lg:block w-full h-full object-cover" />
        </div>
    );
}
