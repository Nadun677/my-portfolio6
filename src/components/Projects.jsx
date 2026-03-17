function Projects() {

  const projects = [
    {
      title: "FitZone Website",
      image: "/src/assets/11.png",
      desc: "Modern personal portfolio showcasing skills, projects, and experience.",
      tech: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/Nadun677",
      link: "/projects/FitZone.html"
    },
    {
      title: "AI Food Delivery App",
      image: "/src/assets/food.png",
      desc: "Smart food ordering app with AI recommendations and Firebase backend.",
      tech: ["Flutter", "Firebase", "TensorFlow"],
      github: "https://github.com/Nadun677",
      link: "/projects/foodapp.html"
    },
    {
      title: "E-commerce Website",
      image: "/projects/ecommerce.png",
      desc: "Full-stack e-commerce system with authentication and payment features.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Nadun677",
      link: "/projects/ecommerce.html"
    },
    {
      title: "E-commerce Website",
      image: "/projects/ecommerce.png",
      desc: "Full-stack e-commerce system with authentication and payment features.",
      tech: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/Nadun677",
      link: "/projects/ecommerce.html"
    }
  ]

  return (
    <section id="projects" className="py-20 text-white">

      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-[#111] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {project.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-purple-600/20 text-purple-400 px-2 py-1 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <a
                  href={project.link}
                  className="bg-purple-600 px-26 py-2 rounded hover:bg-purple-700 text-sm transition"
                >
                  👁 View Project
                </a>

                

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  )
}

export default Projects