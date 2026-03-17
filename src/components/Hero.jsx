import SocialLinks from "./SocialLinks"
import profile from "../assets/IMG-20220611-WA01471.jpg"

function Hero() {
  return (
    
    
    <section id="home" className="min-h-screen flex items-center justify-between px-10 text-white">
      
      {/* Left Side */}
      <div>

        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-purple-400">Nadun Konara</span>
        </h1>

        <p className="text-gray-300 text-lg mb-6">
          Web Developer | Mobile App Developer | IT Support
        </p>

        <SocialLinks />

        {/* Buttons */}
        <div className="mt-8 flex gap-4">

          <a
            href="public/cv/K M N N KONARAA CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition"
          >
            View CV
          </a>

          <a
            href="public/cv/K M N N KONARAA CV.pdf"
            download
            className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500 transition"
          >
            Download CV
          </a>

      <button
        onClick={() => {
          const contactSection = document.getElementById("contact");
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
      >
        Contact Me
      </button>

        </div>

      </div>

      {/* Right Side Photo */}
      <div>
        <img
          src={profile}
          alt="Nadun"
          className="w-72 h-72 object-cover rounded-full border-4 border-purple-500 shadow-lg"
        />
      </div>

    </section>
  )
}

export default Hero