import React from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import Heading from "../common/Heading";
import ContactForm from "./ContactForm";
import MyInfo from './MyInfo'

export default function Index() {
    return (
        <section id="contact" className="py-20 px-4 md:px-14">
            <div>
                <SubHeading text={"Let's Talk"} />
                <Heading heading={'Contact'} />
            </div>
            <div className="grid lg:grid-cols-1 gap-12 mt-16">
                <MyInfo
                    name="Rohit Parihar"
                    designation="Web Developer"
                    age="22"
                    residence="India"
                    freelance="available"
                    address="Bgr, Uttarakhand"
                    phone="+91 7830558297"
                    email="rohitsinghparihar78384@gmail.com"
                />
                <ContactForm />
            </div>
        </section>
    );
}
