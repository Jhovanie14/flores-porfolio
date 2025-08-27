import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Logo from "../assets/logo.png";
import {
  Briefcase,
  Code,
  FolderKanban,
  Table,
  TableOfContents,
  User,
} from "lucide-react";

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // const mobileMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-neutral-300"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-[#0a6802]">
            <img src={Logo} alt="Logo" className="w-16 h-16 object-contain" />
          </div>
          {/* desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Button onClick={() => scrollToSection("about")}>About</Button>
            <Button onClick={() => scrollToSection("projects")}>
              Projects
            </Button>
            <Button onClick={() => scrollToSection("skills")}>Skills</Button>
            <Button onClick={() => scrollToSection("experience")}>
              Experience
            </Button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-2 text-white rounded-md font-medium bg-[#0a6802] hover:bg-[#167e0d] transition-colors"
            >
              Contact
            </button>
          </div>
          {/* mobile */}
          <div className="relative md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} ref={buttonRef}>
              <TableOfContents />
            </button>
            {isOpen && (
              <div
                ref={navRef}
                className="absolute z-50 top-10 right-0 bg-[#edfcec] p-6 rounded-lg shadow-md transition-all ease-in-out duration-300"
              >
                <ul className="w-48 flex flex-col text-left justify-start gap-4">
                  <li className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <Button onClick={() => scrollToSection("about")}>
                      About
                    </Button>
                  </li>
                  <li className="flex items-center">
                    <FolderKanban className="w-4 h-4 mr-2" />
                    <Button onClick={() => scrollToSection("projects")}>
                      Projects
                    </Button>
                  </li>
                  <li className="flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    <Button onClick={() => scrollToSection("skills")}>
                      Skills
                    </Button>
                  </li>
                  <li className="flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <Button onClick={() => scrollToSection("experience")}>
                      Experience
                    </Button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="w-full px-4 py-2 text-white rounded-md font-medium bg-[#0a6802] hover:bg-[#167e0d] transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
