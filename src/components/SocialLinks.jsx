import {
FaFacebook,
FaYoutube,
FaInstagram,
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa"

import { FaXTwitter } from "react-icons/fa6"

function SocialLinks() {
  return (
    <div className="flex gap-6 mt-6 text-3xl text-purple-400">

      {/* GitHub */}
      <a 
        href="https://github.com/Nadun677" 
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="GitHub"
      >
        <FaGithub />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://lk.linkedin.com/in/nadun-konara-211502333"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="LinkedIn"
      >
        <FaLinkedin />
      </a>

      {/* X */}
      <a 
        href="https://x.com/nimanshana31529"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="X Account"
      >
        <FaXTwitter />
      </a>

      {/* Facebook */}
      <a 
        href="https://www.facebook.com/share/1NMHFNkNzg/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="Facebook"
      >
        <FaFacebook />
      </a>
      {/* Facebook */}
      <a 
        href="https://www.facebook.com/share/1CN4eCMyJY/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="Facebook"
      >
        <FaFacebook />
      </a>

      {/* Instagram */}
      <a 
        href="https://www.instagram.com/_nadun_nimanshana_"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="Instagram"
      >
        <FaInstagram />
      </a>

      {/* YouTube */}
      <a 
        href="https://youtube.com/@huggysstreaming?si=YZmJ1jE4uM3OIbhm"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white hover:scale-125 transition"
        title="YouTube"
      >
        <FaYoutube />
      </a>

      {/* Email */}
      <a 
        href="mailto:nadunnimansha067@gmail.com"
        className="hover:text-white hover:scale-125 transition"
        title="Email"
      >
        <FaEnvelope />
      </a>

    </div>
  )
}

export default SocialLinks