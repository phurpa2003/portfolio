import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <BrowserRouter>
      <div className={`${isDark ? "bg-gray-900" : "bg-gray-50"}`}>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
        
        <Routes>
          <Route path="/" element={<Home isDark={isDark} />} />
          <Route path="/projects" element={<ProjectsPage isDark={isDark} />} />
          <Route path="/contact" element={<ContactPage isDark={isDark} />} />
        </Routes>

        <Footer isDark={isDark} />
      </div>
    </BrowserRouter>
  )
}

export default App