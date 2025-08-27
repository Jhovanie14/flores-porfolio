import { CalendarDays, MapPin } from "lucide-react";
import React from "react";
import Badge from "../components/Badge";

const experiences = [
  {
    title: "Jr Full-Stack Developer",
    company: "RAG IT Solutions",
    location: "Davao City, PH",
    period: "2022 - 2023",
    description:
      "Developed and maintained multiple client projects using modern web technologies. Collaborated with design team to implement pixel-perfect UIs.",
    technologies: ["Vue", "Laravel", "Digital Ocean", "Mysql", "REST API"],
    achievements: [
      "Reduced application load time by 40%",
      "Help team of 4 developers",
      "Implemented CI/CD pipeline",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "Remote",
    period: "2024 - 2025",
    description:
      "Specialized in creating responsive, accessible web applications. Worked closely with UX designers to implement interactive user interfaces.",
    technologies: ["React", "TypeScript", "Saas", "Tailwind", "REST API"],
    achievements: [
      "Delivered 2 responsive websites",
      "Achieved 90% accessibility score",
      "Assist Sr developer to completion in a short period of time",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "Aero IDX",
    location: "Remote",
    period: "Feb 2025 - June 2025",
    description:
      "Assist development of scalable web applications serving 100K+ users. Architected microservices infrastructure and Manage GHL connection.",
    technologies: ["Vue.js", "Laravel", "Mysql", "GHL", "REST API"],
    achievements: [
      "Micro manage multiple projects",
      "Improved code coverage to 90%",
      "Reduced bug reports by 60%",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 bg-[#edfcec]/30">
      <div className="contaner mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
              Work Experience
            </h1>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto font-normal">
              My professional journey and the impact I've made along the way.
            </p>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-[#edfcec] border border-neutral-300/50 rounded-md p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex flex-col">
                    <span className="text-xl font-medium mb-1">
                      {exp.title}
                    </span>
                    <span className="text-base font-medium text-[#0a6802]">
                      {exp.company}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center text-sm text-neutral-700 ">
                      <CalendarDays className="w-4 h-4 mr-1" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center text-sm text-neutral-700">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {/* information */}
                <div className="space-y-4">
                  <p className="text-neutral-700 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="">
                    <h4 className="font-medium mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-neutral-700">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  {/* tech use*/}
                  <div>
                    <h4 className="font-medium mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} cssStyle="primary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
