const Footer = ({ isDark }) => {
  return (
    <footer id="contact" className={`py-8 px-8 border-t ${isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <h1 className="text-xl font-bold text-blue-600">Dendup.dev</h1>
        
        <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-400"}`}>
          © 2026 Dendup. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/phurpa2003" 
            target="_blank"
            className={`hover:text-blue-600 transition duration-200 cursor-pointer font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/phurpa-dendup-98393b28b/" 
            target="_blank"
            className={`hover:text-blue-600 transition duration-200 cursor-pointer font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            LinkedIn
          </a>
          <a 
            href="https://www.instagram.com/denlumere_/" 
            target="_blank"
            className={`hover:text-blue-600 transition duration-200 cursor-pointer font-medium ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Instagram
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer