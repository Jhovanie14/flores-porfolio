import { stacks } from "./stacks";
import Navigation from "./Pages/Navigation";
import Hero from "./Pages/Hero";
import Projects from "./Pages/Projects";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <>
      <div className="min-h-screen bg-white">
        <ScrollToTopButton />
        <Navigation />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
