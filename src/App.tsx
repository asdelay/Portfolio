
import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import { StyledWrapper } from "./styles"

const App = () => {
  return (
    <StyledWrapper>
      <Navbar />
      <AboutMe />
      <Projects />
      <Footer />
    </StyledWrapper>
  )
}

export default App
