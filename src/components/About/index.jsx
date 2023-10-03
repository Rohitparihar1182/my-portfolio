import React from "react";
import SubHeading from "../../animatedComponents/SubHeading";
import { SiGraphql } from "react-icons/si";
import { IoCodeSlash } from "react-icons/io5";
import { BsGithub, BsFillDatabaseFill } from "react-icons/bs";
import Heading from "../common/Heading";

const personalDetail = [
	{
		name: "age",
		value: "21",
	},
	{
		name: "email",
		value: "rohitsinghparihar78384@gmail.com",
	},
	{
		name: "phone",
		value: "+91 7830558297",
	},
	{
		name: "residence",
		value: "India",
	},
	{
		name: "address",
		value: "Bgr, Uttarakhand",
	},
	{
		name: "freelance",
		value: "available",
	},
];

export default function Index() {
	return (
		<section id="about">
			<article className="py-20 flex items-center border-b border-[#585d65]">
				<div className="px-4 md:px-14">
					<SubHeading text={"My Story"} />
					<Heading heading={"About Me"} />
					<p className="mb-6 mt-10 tracking-wide font-medium text-[14px] leading-[1.7em]">
						Welcome to my portfolio site, crafted with React and
						enhanced with the power of Tailwind CSS. This dynamic
						website showcases my skills, projects, and experiences
						in an engaging and visually appealing manner. With clean
						code and seamless interactivity, I have created a
						platform to demonstrate my expertise, creativity, and
						passion for web development. Explore my portfolio to get
						a glimpse of my work and discover how I can contribute
						to your projects.
					</p>
					<p className="my-8 tracking-wide font-medium text-[14px] leading-[1.7em]">
						<a
							href="https://github.com/Rohitparihar1182/my-portfolio"
							className="underline clr-theme"
						>
							View Code
						</a>
					</p>
					<div className="grid md:grid-cols-2 gap-4">
						{personalDetail.map((item, idx) => (
							<div className="flex" key={idx}>
								<div className="min-w-[11ch] uppercase">
									<h3 className="text-sm clr-theme font-bold">
										{item.name}:
									</h3>
								</div>
								<div className="overflow-hidden">
									<h3 className="whitespace-nowrap text-ellipsis text-sm font-bold">
										{item.value}
									</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</article>
			<article className="py-20 border-b border-[#585d65]">
				<div className="px-4 md:px-14">
					<div>
						<SubHeading text={"What I do"} />
						<Heading heading={"Technical Skills"} />
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
								description="Proficient in implementing fundamental data structures such as arrays, linked lists, stacks, queues, and trees. Skilled in algorithm design and analysis, including sorting algorithms, searching algorithms, and graph algorithms. Experienced in optimizing code for efficiency and scalability."
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
								description="Experienced in developing dynamic and interactive web applications using HTML5, CSS3, and JavaScript. Proficient in front-end frameworks like React.js and skilled in implementing responsive designs, user authentication, and integrating APIs for seamless functionality."
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
								description="Proficient in version control using Git, including repository management, branching, merging, and conflict resolution. Experienced in collaborating with distributed teams using GitHub, utilizing features such as pull requests and code reviews for effective teamwork and code quality assurance."
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
								description="Knowledgeable in working with both relational and non-relational databases. Skilled in writing SQL queries and optimizing database performance. Experienced in database design, data modeling, and working with technologies like MongoDB, MySQL, or PostgreSQL."
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
			<p className="my-8 tracking-wide font-medium text-[13px] leading-[1.7em]">
				{description}
			</p>
		</div>
	);
}
