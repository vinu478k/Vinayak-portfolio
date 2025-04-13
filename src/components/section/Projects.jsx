import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {" "}
          Fearured Projects
        </h2>
        <div className="grid geid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Knest Fs(File System)</h3>
            <p className="text-gray-400 mb-4">
              Collaborated with the frontend team and design team to gather
              software requirements and plan development. Developed backend APIs
              using Express.js with user authentication, authorization, and
              role-based access control for different departments. Integrated
              MongoDB for data storage and AWS S3 for managing file/zip folder
              storage with controlled access based on user roles. Implemented
              Redis server for in-memory caching to enhance performance and
              reduce database load. Implemented role management to ensure secure
              CRUD operations on stored files. Deployed the backend server on an
              AWS EC2 instance using PM2 for process management and scalability.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Javascript",
                "Node Js",
                "React Js",
                "MongoDB",
                "AWS(EC2,S3)",
                "RESTful APIs",
                "Express.js",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div>
                <a></a>
            </div> */}
          </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">
              Object Detection(Aluminum Framework) Computer vision Project
            </h3>
            <p className="text-gray-400 mb-4">
              Retrieved data from a Python server and managed it using MongoDB.
              Configured Firebase for uploading and downloading files. Created a
              REST API to store results from AI/ML scripts. Collaborated with
              the AI/ML team for script execution and assisted in image
              processing, while communicating with Arduino via serial
              communication in Python. Proficient in designing and building APIs
              for efficient handling of image data locally, including features
              for uploading, processing, and retrieving images for thorough
              testing and validation.Skilled in developing secure Node.js APIs
              for transmitting image data to servers, ensuring robust
              authentication and data encryption measures are in place. Migrated
              the Vezanti server from Python to Node.js using rclnodejs for
              seamless ROS 2 integration, enhancing system performance and
              maintainability.Implemented Redis caching and WebSocket
              communication to enable efficient, real-time data exchange and
              improve overall responsiveness.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Javascript",
                "NodeJs",
                "Python",
                "Docker",
                "Mqtt",
                "MongoDB",
                "AWS(EC2,S3)",
                "RESTful APIs",
                "Express.js",
              ].map((tech, key) => (
                <span
                  key={key}
                 className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div>
                <a></a>
            </div> */}
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Sensor Grid</h3>
            <p className="text-gray-400 mb-4">
              Developed a Sensor Grid API in Node.js for data exchange between
              sensors and hardware. Configured Firebase for notifications and
              integrated MongoDB to store sensor data. Managed data flow between
              sensors and the database through APIs. Deployed the API server on
              an EC2 instance of AWS running Ubuntu.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Javascript",
                "Node Js",
                "Docker",
                "Mqtt",
                "MongoDB",
                "AWS(EC2,S3)",
                "RESTful APIs",
                "Express.js",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div>
                <a></a>
            </div> */}
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Dabur Web Portal</h3>
            <p className="text-gray-400 mb-4">
              Developed a Sensor Grid API in Node.js for data exchange between
              sensors and hardware. Configured Firebase for notifications and
              integrated MongoDB to store sensor data. Managed data flow between
              sensors and the database through APIs. Deployed the API server on
              an EC2 instance of AWS running Ubuntu.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Javascript",
                "PM2",
                "RESTful APIs",
                "Express.js",
                "HTML",
                "Bootstrap",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div>
                <a></a>
            </div> */}
          </div>

          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Dapada Portal</h3>
            <p className="text-gray-400 mb-4">
              Analyzed requirements and gathered feedback from clients for
              enhancements. Developed and implemented the requested improvements
              to the portal. Provided user support and deployed the portal on
              Azure and client systems. Created charts using Chart.js for data
              analysis and reporting.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
            {[
                "Javascript",
                "PM2",
                "RESTful APIs",
                "Express.js",
                "HTML",
                "Bootstrap",
              ].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                >
                  {tech}
                </span>
              ))}
            </div>
            {/* <div>
                <a></a>
            </div> */}
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
