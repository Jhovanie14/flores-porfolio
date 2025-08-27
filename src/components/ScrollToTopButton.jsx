import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsvisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsvisible(true);
      } else {
        setIsvisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed z-40 bottom-6 right-6 p-3 rounded-full bg-[#0a6802] text-white shadow-lg hover:bg-[#167e0d] transition-all"
      >
        <Rocket className="w-8 h-8" />
      </button>
    )
  );
}
