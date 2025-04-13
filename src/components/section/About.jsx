import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const languages = [
    "Javascript",
    "Node Js",
    "Python",
    "React Js",
    "OOPs (Object-Oriented Programming)",
  ];
  const database = [
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "AWS(EC2,S3)",
    "Docker",
    "GitHub",
  ];
  const tools = [
    "Firebase",
    "Microservices Architecture",
    "RESTful APIs",
    "Express.js",
    "Mqtt",
    "WebSocket",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          About Me
        </h2>

        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-gray-300 mb-6">
            Passionate developer with expertise in building scalable web
            applications and creating innovative solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Database & Cloud:</h3>
              <div className="flex flex-wrap gap-2">
                {database.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
              <h3 className="text-xl font-bold mb-4">Tools & Framework:</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>B.S.C. in Computer Science</strong> - Savitribai Phule
                Pune University (2017-2020)
              </li>
              <li>
                Certification :- Java Full Stack - (Profound Edu. Tech Pune)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
            <div className="space-y-4 text-grey-300">
              <div>
                <h4 className="font-semibold">{" "}
                  Full Stack Developer at Knest Manufacturing Pvt Ltd
                  (06/2022-present){" "}
                </h4>
                <p>
                  ​As a full-stack developer, I have utilized technologies such
                  as JavaScript, Node.js, Express.js, MongoDB, AWS EC2, Redis,
                  Firebase, and WebSocket to develop and deploy scalable web
                  applications with robust APIs, real-time data processing, and
                  secure authentication.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">{" "}
                  Software Developer at Logicon Technosolutions Private Limited
                  (10/2021 - 06/2022){" "}
                </h4>
                <p>
                  Work ​For clients like Dabur and Dapada (HUL), I developed full-stack
                  solutions, including API creation, frontend and backend
                  development, portal deployment, user support, and data
                  visualization with Chart.js.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
