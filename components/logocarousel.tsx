"use client";

import Slider from "react-infinite-logo-slider";
import { Bot, Cpu, Database, Workflow } from "lucide-react";
import {
  SiNextdotjs, SiReact, SiNodedotjs, SiExpress, SiMongodb, SiPrisma,
  SiTailwindcss, SiShadcnui, SiRazorpay, SiDocker, SiPostman, SiGit,
  SiGithub, SiHostinger, SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiAmazonwebservices, SiPython, SiFastapi, SiLangchain, SiKubernetes,
  SiNginx, SiRedis, SiPostgresql, SiMysql, SiSqlite, SiElectron,
  SiRabbitmq, SiPrometheus, SiGrafana, SiK6, SiGithubactions, SiVite,
  SiRailway, SiJenkins, SiOpenjdk, SiJest, SiPydantic, SiZod, SiCivo,
  SiOpenai, SiSocketdotio, SiJsonwebtokens,
} from "react-icons/si";

// Technologies used across GT Restro, the engineering lab and earlier projects.
const technologies = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "HTML5", Icon: SiHtml5 },
  { name: "CSS3", Icon: SiCss3 },
  { name: "Tailwind CSS", Icon: SiTailwindcss },
  { name: "ShadCN UI", Icon: SiShadcnui },
  { name: "Vite", Icon: SiVite },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "Express.js", Icon: SiExpress },
  { name: "Socket.IO", Icon: SiSocketdotio },
  { name: "JWT", Icon: SiJsonwebtokens },
  { name: "Python", Icon: SiPython },
  { name: "FastAPI", Icon: SiFastapi },
  { name: "Java", Icon: SiOpenjdk },
  { name: "LangGraph", Icon: Workflow },
  { name: "LangChain", Icon: SiLangchain },
  { name: "Groq", Icon: Cpu },
  { name: "Ollama", Icon: Bot },
  { name: "Whisper", Icon: SiOpenai },
  { name: "PostgreSQL", Icon: SiPostgresql },
  { name: "pgvector", Icon: Database },
  { name: "MySQL", Icon: SiMysql },
  { name: "Redis", Icon: SiRedis },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "SQLite", Icon: SiSqlite },
  { name: "Prisma", Icon: SiPrisma },
  { name: "Electron", Icon: SiElectron },
  { name: "RabbitMQ", Icon: SiRabbitmq },
  { name: "Razorpay", Icon: SiRazorpay },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
  { name: "NGINX", Icon: SiNginx },
  { name: "Prometheus", Icon: SiPrometheus },
  { name: "Grafana", Icon: SiGrafana },
  { name: "k6", Icon: SiK6 },
  { name: "GitHub Actions", Icon: SiGithubactions },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "Jest", Icon: SiJest },
  { name: "Pydantic", Icon: SiPydantic },
  { name: "Zod", Icon: SiZod },
  { name: "AWS", Icon: SiAmazonwebservices },
  { name: "Civo", Icon: SiCivo },
  { name: "Railway", Icon: SiRailway },
  { name: "Hostinger", Icon: SiHostinger },
  { name: "Postman", Icon: SiPostman },
  { name: "Git", Icon: SiGit },
  { name: "GitHub", Icon: SiGithub },
];

export default function TechnologySlider() {
  return (
    <Slider width="150px" duration={140} pauseOnHover blurBorders={false}>
      {technologies.map(({ name, Icon }) => (
        <Slider.Slide key={name}>
          <div className="flex flex-col items-center gap-2 text-sm">
            <Icon size={30} aria-hidden="true" />
            <span>{name}</span>
          </div>
        </Slider.Slide>
      ))}
    </Slider>
  );
}
