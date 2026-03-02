import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Work from "./components/Work"
import Project from "./components/Project"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Work />
      <Project />
      <Contact />
    </div>
  )
}

export default App