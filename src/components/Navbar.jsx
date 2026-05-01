import { Link } from "react-router-dom"

const Navbar = ({ isDark, setIsDark }) => {
  return (
    <nav className={`px-8 py-4 flex items-center justify-between shadow-md ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <Link to="/" className="text-xl font-bold text-blue-600">
        Dendup.dev
      </Link>
      <div className="flex gap-6">
        <Link
          to="/"
          className={`hover:text-blue-600 transition duration-200 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          Home
        </Link>
        <Link
          to="/projects"
          className={`hover:text-blue-600 transition duration-200 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`hover:text-blue-600 transition duration-200 font-medium ${isDark ? "text-gray-300" : "text-gray-600"}`}
        >
          Contact
        </Link>
      </div>
      <button
        onClick={() => setIsDark(!isDark)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-200"
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  )
}

export default Navbar