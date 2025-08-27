import React from "react";
import Badge from "../components/Badge";
import Card from "../components/Card";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 79 },
      { name: "Next.js", level: 80 },
      { name: "Vue.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "PHP", level: 87 },
      { name: "Laravel", level: 87 },
      { name: "PostgreSQL", level: 77 },
      { name: "MySQL", level: 85 },
      { name: "REST API", level: 80 },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Digital Ocean", level: 78 },
      { name: "Cursor", level: 83 },
      { name: "Git", level: 95 },
      { name: "Vercel", level: 90 },
      { name: "Postman", level: 85 },
    ],
  },
];

const certifications = [
  "Laravel Certified Developer",
  "React Certified Developer",
  "Vue Certified Developer",
  "MySql Certified Developer",
  "React Advanced Patterns",
];
function Skills() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
              Skills & Expertise
            </h1>
            <p className="text-xl text-stone-700 max-w-2xl mx-auto font-normal">
              Technologies and tools I use to bring ideas to life.
            </p>
          </div>
          {/* skills card */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <div className="mb-6">
                  <h1 className="text-center text-xl font-medium">
                    {category.title}
                  </h1>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center ">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="w-full bg-[#f1fcef] rounded-full h-2">
                        <div
                          className="bg-[#0a6802] h-2 rounded-full transition-all duration-1000 ease-in-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
          <Card className="bg-[#edfcec] border border-neutral-300/50 rounded-md p-6">
            <div className="text-center">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
                Certifications
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert, i) => (
                <Badge cssStyle="secondary" key={i}>
                  {cert}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Skills;
