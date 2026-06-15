import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import "./App.css"

export default function App () {
  return (<div className="container">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
     
    </div>
  
  )
}