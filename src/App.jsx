import {BrowserRouter as Router , Routes, Route} from "react-router-dom"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import Project from "./components/Project"

function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element= {<Home/>} />
        <Route path="/blog" element= {<Blog/>} />
        <Route path="/about" element= {<About/>} />
        <Route path="/contact" element= {<Contact/>} />
        <Route path="/project" element={<Project/>} />
        
      </Routes>
      <Footer />

    </Router>
  )
}

export default App
