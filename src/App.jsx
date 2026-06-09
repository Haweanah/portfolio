import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css"

export default function App () {
  return (<div className="container">
      <Navbar/>
      <Hero/>
      <About/>
     
    </div>
  
  )
}