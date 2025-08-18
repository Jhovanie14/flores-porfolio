import { useState } from "react";
import reactsvg from "./assets/react.svg";
import profile from "./assets/profile.png"
import { stacks } from "./stacks";

function App() {
  const [openProject, setOpenProject] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-black text-white p-6">
        <div className=" grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
          {/* left content */}
          <div className="space-y-8">
            {/* Profile Headear */}
            <div className="flex items-center gap-4">
              <img
                className="rounded-full"
                width={80}
                height={60}
                src={profile}
                alt="Profile"
              />
              <div>
                <h1 className="text-2xl font-mono uppercase">
                  Jhovanie Flores
                </h1>
                <p className=" text-gray-400 uppercase">Software Developer</p>
              </div>
            </div>
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I specialize in developing cross-platform web applications by
                integrating Laravel and Vue.js/React.js for seamless
                functionality. I am adept at creating robust and visually
                appealing websites, utilizing Tailwind CSS or SCSS to craft
                engaging user interfaces. My broad skill set encompasses PHP,
                JavaScript, MySql, Laravel, Tailwind CSS, Vue.js, React.js,
                enabling me to make significant contributions throughout the
                development process.
              </p>
              <button className="text-sm px-3 py-2 font-medium rounded-3xl bg-white border hover:bg-black text-black hover:text-white hover:border-white">
                More About Me
              </button>
            </div>
            {/* social links */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <button>IG</button>
                <button>Github</button>
                <button>Linkedin</button>
              </div>
              <div className="text-gray-400 text-sm">
                <p>© by Jhovanie in React</p>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white">
                    Licensing
                  </a>
                  <a href="#" className="hover:text-white">
                    2025
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Right content */}
          <div className="space-y-8">
            {/* Menu button - only show on mobile */}
            <div className="flex justify-end lg:hidden">
              <button className="text-white">-</button>
            </div>
            {/* Projects Section */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">My Projects</h2>
                <button
                  onClick={() => setOpenProject(true)}
                  className="text-xl transform transition duration-300 hover:scale-125"
                >
                  →
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square bg-gray-900 rounded-lg overflow-hidden md:hover:scale-110 transform transition duration-200"
                  >
                    <img
                      src="/placeholder.svg"
                      alt={`Project ${i}`}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Stack  Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-mono">My Stack</h2>
                <button className="text-xl transform transition duration-300 hover:scale-125">
                  →
                </button>
              </div>
              <div className="flex gap-4">
                {stacks.map((stack) => (
                  <div key={stack.id}>
                    <img
                      src={stack.image}
                      alt=""
                      className="w-14 h-14 bg-transparent hover:scale-125 transform transition duration-300 object-contain"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Contact & Client Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contact Section */}
              <section className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-mono">Contact</h2>
                  <button className="text-xl transform transition duration-300 hover:scale-125">→</button>
                </div>
              </section>
              {/* Client Section */}
              <section className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-4xl font-mono">100%</h3>
                <p className="text-gray-400">Happy Clients</p>
                <div className="flex -space-x-2 mt-4">
                  {[1, 2, 3].map((i) => (
                    <img
                      key={i}
                      src="/placeholder.svg"
                      alt=""
                      height={40}
                      width={40}
                      className="rounded-full border-2 border-gray-900"
                    />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* open project modal */}
        {openProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50 "
              onClick={() => setOpenProject(false)} // close on backdrop click
            ></div>
            <div className="relative bg-transparent rounded-2xl shadow-lg p-6 border border-gray-900 w-6xl transform transition-all duration-300">
              <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
              <p className="mb-6 text-gray-600">
                This is a simple modal built with TailwindCSS.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setOpenProject(false)}
                  className=" px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
