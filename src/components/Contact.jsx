function Contact() {
  return (
    <section id="contact" className="mt-40 px-10 pb-20 text-center">

      <h2 className="text-3xl font-bold mb-10 text-purple-400">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-8">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 bg-black/40 border border-white/20 rounded-lg"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 bg-black/40 border border-white/20 rounded-lg"
        />

        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 bg-black/40 border border-white/20 rounded-lg"
        />

        <button className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
          Send Message
        </button>

      </div>

    </section>
  )
}

export default Contact