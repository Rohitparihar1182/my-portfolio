import React from "react";
import avatar from "../../assets/avatar1.jpg";

export default function index() {
    return (
        <div className="h-[600px] image-section lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-[30%] xl:w-[45%] bg-black">
            <div className="hidden lg:block absolute inset-0 bg-[#68e0cf]/20"></div>
            <img src={avatar} alt="Rohit Parihar" className="hidden lg:block w-full h-full object-cover" />
        </div>
    );
}
