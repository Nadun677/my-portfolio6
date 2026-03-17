import { useParams } from "react-router-dom"
import { FaGithub } from "react-icons/fa"

function ProjectDetails() {

  const { id } = useParams()

  const projectData = {
    portfolio: {
      title: "Portfolio Website",
      image: "/projects/portfolio.png",
      description: "My personal developer portfolio built using React and Tailwind CSS.",
      tech: "React, Tailwind CSS, JavaScript",
      github: "https://github.com/YOURUSERNAME/portfolio"
    },

    foodapp: {
      title: "AI Food Delivery App",
      image: "/projects/foodapp.png",
      description: "Smart food ordering app with AI recommendations.",
      tech: "Flutter, Firebase, TensorFlow",
      github: "https://github.com/YOURUSERNAME/foodapp"
    },

    ecommerce: {
      title: "E-commerce Website",
      image: "/projects/ecommerce.png",
      description: "Online shopping platform with product management.",
      tech: "PHP, MySQL, HTML, CSS",
      github: "https://github.com/YOURUSERNAME/ecommerce"
    }
  }

  const project = projectData[id]

  return (
    <div className="text-white max-w-4xl mx-auto py-20 px-6">

      <h1 className="text-4xl font-bold mb-6">
        {project.title}
      </h1>

      <img
        src={project.image}
        className="rounded-lg mb-6"
      />

      <p className="text-gray-400 mb-4">
        {project.description}
      </p>

      <p className="text-purple-400 mb-6">
        Technologies: {project.tech}
      </p>

      <a
        href={project.github}
        target="_blank"
        className="bg-purple-600 px-6 py-3 rounded hover:bg-purple-700 flex items-center gap-2 w-fit"
      >
        <FaGithub />
        View on GitHub
      </a>

    </div>
  )
}

export default ProjectDetails