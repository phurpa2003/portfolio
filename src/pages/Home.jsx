import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Projects from "../components/Projects"

const Home = ({ isDark }) => {
  return (
    <div>
      <Hero isDark={isDark} />
      <Skills isDark={isDark} />
      <Projects isDark={isDark} />
    </div>
  )
}

export default Home