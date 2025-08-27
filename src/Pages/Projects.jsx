import React from "react";
import Badge from "../components/Badge";
import { ExternalLink, GitBranch, Github } from "lucide-react";
const projects = [
  {
    title: "MLS search and makerting platform",
    description:
      "A full-stack e-commerce solution with Vue, Laravel, Mysql and Gohighlevel integration. Features include user authentication, payment processing, and admin dashboard.",
    image: "/arrow1.png",
    technologies: ["Vue", "Laravel", "GoHighlevel", "Mysql", "Rest Api"],
    github: "https://github.com/Jhovanie14/arrowidx",
    demo: "https://app.aeroidx.com/login",
  },
  {
    title: "Life Insurance App",
    description:
      "A full-stack Life Insurance solution with Vue, Laravel, Mysql and REST API. Features include user authentication, payment processing, and admin dashboard.",
    image: "/heavens-dashboard.png",
    technologies: ["Vue", "Laravel", "Mysql", "Rest Api"],
    github: "#",
    demo: "#",
  },
  {
    title: "Pet Pardon Platform",
    description:
      "A full-stack Pet Rescue and Donations solution with Vue, Laravel, Mysql and REST API. Features include user authentication, payment processing, and admin dashboard.",
    image: "/petweb.png",
    technologies: ["Vue", "Laravel", "Mysql", "Rest Api"],
    github: "",
    demo: "https://petweb.ragph.com/active-campaign",
  },
];

function Projects() {
  return (
    <div id="projects" className="py-20 bg-[#edfcec]/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
              Featured Projects
            </h2>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto font-normal mb-8">
              Here are some of my recent projects that showcase my skills and
              passion for development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-[#edfcec]">
                {/* Card Header */}
                <div className="group hover:shadow-lg transition-all duration-300 border-gray-600/50 hover:border-[#0a6802]/50">
                  <div className="p-0`">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
                {/* Card Content */}
                <div className="p-6">
                  <h1 className="text-xl font-medium mb-2">{project.title}</h1>
                  <p className="text-sm text-neutral-800 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge cssStyle="primary" key={techIndex}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {/* Card Footer */}
                <div className="flex p-6 pt-0 gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex flex-1 items-center justify-center py-2 text-neutral-700 font-medium text-base rounded-md border border-neutral-700/20 shadow"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex flex-1 items-center justify-center py-2 text-white text-base font-medium rounded-md bg-[#0a6802] hover:bg-[#167e0d]"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
