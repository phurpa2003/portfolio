import Projects from "../components/Projects"

const ProjectsPage = ({ isDark }) => {
  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
      <div className="py-16 px-8">
        <p className={`text-center text-lg mb-8 ${isDark ? "text-gray-400" : "text-gray-500"}`}>
          Here are all the projects I've worked on
        </p>
        <Projects isDark={isDark} />
      </div>
    </div>
  )
}

export default ProjectsPage