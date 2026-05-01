const skills = [
  { name: "React", bg: "bg-blue-50", text: "text-blue-600", hover: "hover:bg-blue-100" },
  { name: "Node.js", bg: "bg-green-50", text: "text-green-600", hover: "hover:bg-green-100" },
  { name: "JavaScript", bg: "bg-yellow-50", text: "text-yellow-600", hover: "hover:bg-yellow-100" },
  { name: "Tailwind CSS", bg: "bg-cyan-50", text: "text-cyan-600", hover: "hover:bg-cyan-100" },
  { name: "MongoDB", bg: "bg-red-50", text: "text-red-600", hover: "hover:bg-red-100" },
  { name: "Solidity", bg: "bg-indigo-50", text: "text-indigo-600", hover: "hover:bg-indigo-100" },
  { name: "Python", bg: "bg-pink-50", text: "text-pink-600", hover: "hover:bg-pink-100" },
  { name: "Git", bg: "bg-teal-50", text: "text-teal-600", hover: "hover:bg-teal-100" },
]

const Skills = ({ isDark }) => {
  return (
    <section className={`py-16 px-8 ${isDark ? "bg-gray-800" : "bg-white"}`}>
      <h2 className={`text-3xl font-bold text-center mb-10 ${isDark ? "text-white" : "text-gray-800"}`}>
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className={`${skill.bg} ${skill.text} ${skill.hover} font-semibold text-center py-4 rounded-xl transition duration-200`}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills