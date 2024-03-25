import React, { useRef } from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import Heading from "../common/Heading";

const education = [
	{
		name: "Amrapali Institute Of Technology",
		duration: "2019-2022",
		text: `During my BCA program at Amrapali Institute of Technology and Applied Science, I gained a comprehensive understanding of computer science fundamentals and practical skills. The coursework covered a wide range of subjects, including programming, data structures, algorithms, database management, and web development.`,
		degree: "Bachelor of Computer Applications (BCA)",
	},
	{
		name: "Vivekanand Vidhya Mandi",
		duration: "2017-2019",
		text: `My higher secondary education at Vivekanand Vidhya Mandir provided a solid academic background and helped me develop critical thinking and analytical skills. The curriculum emphasized subjects such as Mathematics, Physics, and Computer Science, which laid the groundwork for my interest in technology and logical reasoning.`,
		degree: "Higher Secondary Education (Class 12th)",
	},
	{
		name: "Vivekanand Vidhya Mandi",
		duration: "2015-2017",
		text: `My secondary education at Vivekanand Vidhya Mandir played a vital role in shaping my academic foundation. The curriculum encompassed various subjects, including Mathematics, Science, Social Studies, and English. Through this educational journey, I acquired essential communication skills, time management abilities, and a strong work ethic`,
		degree: "Secondary Education (Class 10th)",
	},
];

const experience = [
	{
		company: "Offshore Marketers",
		duration: "6 Months",
		text: `In the WordPress domain, I actively contributed to developing and customizing WordPress websites. I gained hands-on experience in implementing themes, customizing themes and optimizing website performance. Collaborating closely with the development team, I participated in tasks such as front-end design modifications, content management, and troubleshooting technical issues.`,
		designation: "Wordpress Developer",
	},
	{
		company: "Quadb Technologies",
		duration: "8 Months",
		text: `During my eight-month internship, I gained valuable experience working on diverse projects, including the development of the Heebee web POS and customer site. Additionally, I undertook the exciting challenge of creating a comprehensive HRM system from scratch, utilizing the powerful combination of Tauri, React, and Tailwind CSS.`,
		designation: "React Js Developer",
	},
];

const codingSkills = [
	{
		name: "HTML, CSS",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
		perc: "80",
	},
	{
		name: "JavaScript",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
		perc: "70",
	},
	{
		name: "React",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
		perc: "70",
	},
	{
		name: "Java",
		text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a numquam",
		perc: "60",
	},
];

const responsive = {
	0: {
		items: 1,
		nav: true,
	},
	768: {
		items: 2,
		nav: true,
	},
};

export default function Index() {
	const educationCarouselRef = useRef(null);
	const experienceCarouselRef = useRef(null);

	return (
		<section id="resume">
			<article className="py-20 flex items-center border-b overflow-x-hidden border-[#585d65]">
				<div className="px-4 md:px-14 overflow-hidden">
					<SubHeading text={"Studied At"} />
					<Heading heading={"Education"} />
					<div className="container-fluid mt-12 pb-16 md:pb-0 relative ">
						<div className="carousel-trigger isolate absolute bottom-[0] left-[50%] translate-x-[-50%] md:left-auto md:translate-x-0 md:bottom-auto md:top-[-100px] md:right-0">
							<button
								className="w-[56px] bg-primary aspect-square rounded-full border border-[#585d65] text-lg font-bold leading-10"
								onClick={() =>
									educationCarouselRef.current.prev()
								}
							>
								{/* <IoIosArrowBack className="mx-auto font-bold" /> */}
								<IoIosArrowRoundBack className="mx-auto font-bold" />
							</button>
							<button
								className="w-[56px] bg-primary ml-4 aspect-square rounded-full border border-[#585d65]  text-lg font-bold leading-10"
								onClick={() =>
									educationCarouselRef.current.next()
								}
							>
								<IoIosArrowRoundForward className="mx-auto font-bold" />
								{/* <IoIosArrowForward className="mx-auto font-bold" /> */}
							</button>

							<div className="h-[1px] bg-[#585d65] z-[-1] w-[10000px] top-[50%] bottom-0 absolute left-0"></div>
						</div>
						<OwlCarousel
							ref={educationCarouselRef}
							items={window.innerWidth > 768 ? 2 : 1}
							className="owl-theme"
							loop
							responsive={responsive}
							margin={8}
							navContainerClass="absolute top-[-100px] z-[30] right-0"
							navClass={["hidden", "hidden"]}
							nav={false}
							dots={false}
							animateOut="slideOutDown"
							smartSpeed={500}
							animateIn="flipInX"
						>
							{education.map((edu, idx) => {
								return (
									<EducationCard
										key={idx + 1}
										degree={edu.degree}
										text={edu.text}
										name={edu.name}
										duration={edu.duration}
									/>
								);
							})}
						</OwlCarousel>
					</div>
				</div>
			</article>
			<article className="py-20 flex items-center border-b border-[#585d65]">
				<div className="px-4 md:px-14 overflow-hidden">
					<SubHeading text={"Studied At"} />
					<Heading heading={"Experience"} />
					<div className="container-fluid mt-12 pb-16 md:pb-0 relative ">
						<div className="carousel-trigger isolate absolute bottom-[0] left-[50%] translate-x-[-50%] md:left-auto md:translate-x-0 md:bottom-auto md:top-[-100px] md:right-0">
							<button
								className="w-[56px] bg-primary aspect-square rounded-full border border-[#585d65] text-lg font-bold leading-10"
								onClick={() =>
									experienceCarouselRef.current.prev()
								}
							>
								{/* <IoIosArrowBack className="mx-auto font-bold" /> */}
								<IoIosArrowRoundBack className="mx-auto font-bold" />
							</button>
							<button
								className="w-[56px] bg-primary ml-4 aspect-square rounded-full border border-[#585d65]  text-lg font-bold leading-10"
								onClick={() =>
									experienceCarouselRef.current.next()
								}
							>
								<IoIosArrowRoundForward className="mx-auto font-bold" />
								{/* <IoIosArrowForward className="mx-auto font-bold" /> */}
							</button>
							<div className="h-[1px] bg-[#585d65] z-[-1] w-[10000px] top-[50%] bottom-0 absolute left-0"></div>
						</div>
						<OwlCarousel
							ref={experienceCarouselRef}
							items={window.innerWidth > 768 ? 2 : 1}
							className="owl-theme"
							loop
							responsive={responsive}
							margin={8}
							navContainerClass="absolute top-[-100px] z-[30] right-0"
							navClass={["hidden", "hidden"]}
							nav={false}
							dots={false}
							animateOut="slideOutDown"
							smartSpeed={500}
							animateIn="flipInX"
						>
							{experience.map((exp, idx) => {
								return (
									<ExperienceCard
										key={idx + 1}
										company={exp.company}
										designation={exp.designation}
										text={exp.text}
										duration={exp.duration}
									/>
								);
							})}
						</OwlCarousel>
					</div>
				</div>
			</article>

			<article className="py-20 border-b border-[#585d65]">
				<div className="px-4 md:px-14">
					<SubHeading text={"Coding Languages"} />
					<Heading heading="Languages" />
					<div className="mt-12 grid grid-cols-2 gap-3">
						{codingSkills.map((skill, idx) => (
							<CodingSkillsCard
								name={skill.name}
								text={skill.text}
								perc={skill.perc}
								key={idx}
							/>
						))}
					</div>
				</div>
			</article>
		</section>
	);
}

function EducationCard({ duration, name, text, degree }) {
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

function ExperienceCard({ duration, company, text, designation }) {
	return (
		<div className="pr-8">
			<div className="flex gap-4">
				<h4 className="writing-lr text-[11px] clr-theme font-bold">
					{duration}
				</h4>
				<h3 className="grow text-[18px] font-extrabold max-w-[12ch]">
					{company}
				</h3>
			</div>
			<div>
				<p className="mb-6 mt-6 tracking-wide font-medium text-[14px] leading-[1.7em]">
					<span className="font-extrabold">{designation}:</span>&nbsp;{" "}
					{text}
				</p>
			</div>
		</div>
	);
}

const CIRCLE_PERIMETER = 188.49555921538757;

function CodingSkillsCard({ perc, name, text }) {
	const dashOffset = (perc / 100) * CIRCLE_PERIMETER;
	return (
		<div>
			<div className="">
				<div className="inline-block relative scale-125">
					<svg className="w-20 h-20">
						<circle
							className="text-transparent"
							strokeWidth="3"
							stroke="currentColor"
							fill="transparent"
							r="30"
							cx="40"
							cy="40"
						></circle>
						<circle
							className="clr-theme"
							strokeWidth="3"
							strokeLinecap="round"
							stroke="currentColor"
							fill="none"
							r="30"
							cx="40"
							cy="40"
							strokeDasharray={CIRCLE_PERIMETER}
							strokeDashoffset={CIRCLE_PERIMETER - dashOffset}
						></circle>
					</svg>
					<span className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] clr-theme text-[9px] ">
						{perc}%
					</span>
				</div>
				<div className="mt-4">
					<h3 className="grow text-base font-extrabold">{name}</h3>
				</div>
				<div className="mt-4">
					<p className="mb-6 mt-6 tracking-wide font-medium text-[14px] leading-[1.7em]">
						{text}
					</p>
				</div>
			</div>
		</div>
	);
}
