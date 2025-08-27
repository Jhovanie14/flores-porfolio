import React from "react";
import Badge from "../components/Badge";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Resume from "../assets/Jhovanie-Flores-Resume.pdf";

function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="about" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* image and profile */}
          <div className="mb-8">
            <img
              className="w-48 h-48 mx-auto ring-4 ring-[#0a6802]/20 rounded-full mb-6"
              src="profile.png"
              alt="Profile"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              Hi, I'm <span className="text-[#0a6802]">Jhovanie Flores</span>
            </h1>
            <p className="text-xl md:text-2xl text-balance text-neutral-800 mb-8">
              Full-Stack Developer & Problem Solver
            </p>
            <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              I craft digital experiences with clean code and thoughtful design.
              Passionate about building scalable applications that make a
              difference.
            </p>
          </div>
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <Badge cssStyle="primary">React</Badge>
            <Badge cssStyle="primary">Vue</Badge>
            <Badge cssStyle="primary">Laravel</Badge>
            <Badge cssStyle="primary">Typescript</Badge>
            <Badge cssStyle="primary">Vercel</Badge>
          </div>
          {/* Related word */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            <button
              onClick={scrollToProjects}
              className="flex items-center px-4 py-2 text-white text-base font-medium rounded-md bg-[#0a6802] hover:bg-[#167e0d]"
            >
              View My Work
              <ExternalLink className="w-4 h-4 ml-2" />
            </button>
            <a
              href={Resume}
              download
              className="px-4 py-2 text-neutral-700 font-medium text-base rounded-md border border-neutral-700/20 shadow"
            >
              Download Resume
            </a>
          </div>
          {/* social links */}
          <div className="flex items-center justify-center gap-6">
            <button className="px-3 py-3 rounded-lg hover:bg-amber-600/80 hover:text-sky-900 transition-colors">
              <Linkedin />
            </button>
            <button className="px-3 py-3 rounded-md hover:bg-amber-600/80 hover:text-sky-900 transition-colors">
              <Github />
            </button>
            <button className="px-3 py-3 rounded-md hover:bg-amber-600/80 hover:text-sky-900 transition-colors">
              <Mail />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
