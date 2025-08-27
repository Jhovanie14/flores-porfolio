import { stacks } from "./stacks";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";
import { useEffect, useState } from "react";
import { Check, X } from "lucide-react";

function App() {
  const [status, setStaSus] = useState(null);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStaSus(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <>
      <div className="min-h-screen bg-white relative">
        {/* ✅ Toast Notification */}
        {status && (
          <div
            className={`fixed z-100 top-10 right-5 px-4 py-3 rounded-lg shadow-lg text-white transition-all duration-300 ${
              status === "success" ? "bg-[#0a6802]" : "bg-red-600"
            }`}
          >
            {status === "success" ? (
              <div className="flex items-center">
                <Check className="w-4 h-4 mr-2" />{" "}
                <span className="text-white font-medium text-lg">
                  Message sent successfully!
                </span>
              </div>
            ) : (
              <div className="flex items-center">
                <X className="w-4 h-4 mr-2" />
                <span className="text-white font-medium text-lg">
                  Failed to send. Please try again.
                </span>
              </div>
            )}
          </div>
        )}
        <ScrollToTopButton />
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact status={setStaSus} />
        </main>
      </div>
    </>
  );
}

export default App;
