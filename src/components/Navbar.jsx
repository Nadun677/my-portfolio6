function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 p-4 flex justify-between px-10 z-50">
      <h1 className="text-xl font-bold text-purple-400">Nadun</h1>

      <div className="space-x-6 hidden md:block">
        <a href="#home" className="hover:text-purple-400 transition">Home</a>
        <a href="#skills" className="hover:text-purple-400 transition">Skils</a>
        <a href="#experience" className="hover:text-purple-400">Work</a>
        <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
        <a href="#contact" className="hover:text-purple-400 transition">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar