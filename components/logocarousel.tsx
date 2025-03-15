"use client"
import Slider from "react-infinite-logo-slider";
import {
	SiNextdotjs,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiPrisma,
	SiTailwindcss,
	SiShadcnui,
	SiRazorpay,
	SiDocker,
	SiPostman,
	SiGit,
	SiGithub,
	SiHostinger,
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
    SiAmazon,
} from "react-icons/si";



const Component = () => {
	return (
		<Slider
			width="200px"
			duration={60}
			pauseOnHover={true}
			blurBorders={false}
			blurBorderColor={"#fff"}
		>
			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiNextdotjs size={30} />
					<div>Next.js</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiReact size={30} />
					<div>React</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiNodedotjs size={30} />
					<div>Node.js</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiExpress size={30} />
					<div>Express.js</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiMongodb size={30} />
					<div>MongoDB</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiPrisma size={30} />
					<div>Prisma</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiTailwindcss size={30} />
					<div>Tailwind CSS</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiShadcnui size={30} />
					<div>ShadCN UI</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiRazorpay size={30} />
					<div>Razorpay</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiAmazon size={30} />
					<div>AWS</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiDocker size={30} />
					<div>Docker</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiPostman size={30} />
					<div>Postman</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiGit size={30} />
					<div>Git</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiGithub size={30} />
					<div>GitHub</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiHostinger size={30} />
					<div>Hostinger</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiHtml5 size={30} />
					<div>HTML5</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiCss3 size={30} />
					<div>CSS3</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiJavascript size={30} />
					<div>JavaScript</div>
				</div>
			</Slider.Slide>

			<Slider.Slide>
				<div className="flex flex-col items-center">
					<SiTypescript size={30} />
					<div>TypeScript</div>
				</div>
			</Slider.Slide>
		</Slider>
	);
};

export default Component;
