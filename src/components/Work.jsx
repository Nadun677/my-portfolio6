import { FaLaptopCode } from "react-icons/fa"

function WorkExperience() {
  return (
    <section id="experience" className="py-20 text-white">

      <h2 className="text-4xl font-bold text-center mb-12">
        Work Experience
      </h2>

      <div className="max-w-4xl mx-auto">

        <div className="bg-gray-900 p-8 rounded-xl shadow-lg hover:scale-105 transition">

          <FaLaptopCode className="text-purple-400 text-4xl mb-4" />

          <h3 className="text-2xl font-semibold mb-2">
            IT Support Intern(2025 January - November)
          </h3>

          <p className="text-purple-400 mb-2">
            FBC Asia Pacific Lanka
          </p>

          <p className="text-gray-400 mb-4">
            Assisted in managing and maintaining IT infrastructure, including laptops, desktops, and network devices, to ensure smooth daily operations. Supported the installation, configuration, and troubleshooting of operating systems and software applications for internal teams. Helped implement basic networking tasks such as configuring IP addresses, managing Wi-Fi access points, and ensuring reliable connectivity across departments.
          </p>

          <a
            href="#projects"
            className="inline-block bg-purple-600 px-6 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            View My Projects
          </a>

        </div>

      </div>

    </section>
  )
}

export default WorkExperience