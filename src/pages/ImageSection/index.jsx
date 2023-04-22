import React from "react";
import avatar from '../../assets/avatar.jpg'

export default function index() {
    return <div className="fixed top-0 left-0 h-full w-[45%] bg-black">
        <div className="absolute inset-0 bg-[#68e0cf]/30"></div>
        <img src={avatar} alt="me" className="w-full h-full object-cover" />
    </div>;
}
