import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Contact from "./components/Contact";
import ParticlesBg from "./components/ParticlesBg";
import Skills from "./components/Skills";

function App() {
  return (
    <BrowserRouter>
      <div className="relative bg-[#0F001F] text-white min-h-screen overflow-hidden">

        {/* Background */}
        <ParticlesBg />

        {/* Purple glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[200px] opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 rounded-full blur-[200px] opacity-40 -z-10"></div>

        {/* Content */}
        <Navbar />
        <Hero />
        <Skills />
        <Work />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Projects />} />
          
        </Routes>

        <Contact />

      </div>
    </BrowserRouter>
  );
}

export default App;