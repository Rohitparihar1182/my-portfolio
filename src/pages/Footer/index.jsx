import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

export default function Index() {
    return (
        <footer className="relative py-8 isolate lg:pb-0 lg:fixed lg:bottom-8 lg:right-0 lg:w-[92px]">
            <div className="absolute lg:hidden -z-10 w-full top-[50%] border-t border-[#585d65]"></div>
            <div className="flex lg:flex-col gap-4 items-center justify-center">
                <a rel="noreferrer" target="_blank" href="https://github.com/Rohitparihar1182">
                    <div className="flex items-center rounded-full border bg-[#373b40] border-[#585d65] hover:border-[#68e0cf] transition-all duration-300 hover-clr-theme justify-center w-14 aspect-square">
                        <BsGithub className="text-base" />
                    </div>
                </a>
                <a rel="noreferrer" target="_blank" href="https://leetcode.com/Rohitparihar/">
                    <div className="flex items-center rounded-full border bg-[#373b40] border-[#585d65] hover:border-yellow-500 transition-all duration-300 hover:text-yellow-500 justify-center w-14 aspect-square">
                        <SiLeetcode className="text-base" />
                    </div>
                </a>
                <a rel="noreferrer" target="_blank" href="https://twitter.com">
                    <div className="flex items-center rounded-full border bg-[#373b40] border-[#585d65] hover:border-[#68e0cf] transition-all duration-300 hover-clr-theme justify-center w-14 aspect-square">
                        <BsTwitter className="text-base" />
                    </div>
                </a>
            </div>
        </footer>
    );
}
