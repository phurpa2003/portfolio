import { useState } from "react"

const allProjects = [
  { id: 1, name: "ChainCert", description: "Blockchain based certificate verification system built on Ethereum.", color: "bg-blue-500", emoji: "🔗", category: "Web3" },
  { id: 2, name: "VoteChain", description: "Decentralized voting system with transparent and tamper proof results.", color: "bg-purple-500", emoji: "🗳️", category: "Web3" },
  { id: 3, name: "MediVault", description: "Secure medical records management system using blockchain technology.", color: "bg-green-500", emoji: "🏥", category: "Web3" },
]

const ProjectCard = ({ name, description, color, emoji }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      <div className={`${color} h-36 flex items-center justify-center`}>
        <span className="text-5xl">{emoji}</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-gray-500 text-sm mt-2 leading-relaxed">{description}</p>
        <button className={`mt-4 w-full ${color} hover:opacity-90 text-white py-2 rounded-lg transition duration-300`}>
          View Project
        </button>
      </div>
    </div>
  )
}

const Projects = ({ isDark }) => {
  const [filter, setFilter] = useState("All")

  const filtered = allProjects.filter((project) =>
    filter === "All" ? true : project.category === filter
  )

  return (
    <section id="projects" className={`py-16 px-8 ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${isDark ? "text-white" : "text-gray-800"}`}>
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Web2", "Web3"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${filter === category ? "bg-blue-500 text-white" : "bg-white text-gray-600 hover:bg-gray-100"}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            color={project.color}
            emoji={project.emoji}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects