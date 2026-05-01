const Hero = ({ isDark }) => {
  return (
    <section id="hero" className={`flex flex-col items-center justify-center text-center py-24 px-8 ${isDark ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-800"}`}>
      <h1 className="text-5xl font-bold">
        Hi, I'm <span className="text-blue-600">Dendup</span> 👋
      </h1>
      <p className={`text-lg mt-4 max-w-xl leading-relaxed ${isDark ? "text-gray-400" : "text-gray-500"}`}>
        A final year CSE student passionate about building web apps and exploring Web3 technologies.
      </p>
      <div className="flex gap-4 mt-8">
        <a
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border-2 border-blue-500 text-blue-500 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default Hero