import { HashRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import logo from "./assets/logo.png"
import "./App.css"

function App() {
  return (
    <HashRouter>
      <div className="app">
        <nav className="navbar">
          <div className="logo-container">
            <Link to="/"> <img src={logo} className="logo" alt="Img" /> </Link>
          </div>
          <div className="nav-links">
            <Link to="/"> HOME </Link>
            <Link to="/about"> ABOUT </Link>
            <Link to="/projects"> PROJECTS </Link>
            <Link to="/contact"> CONTACT </Link>
          </div>
        </nav>
        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer> Copyright © West Willow Will: Coding For Change. www-code.org, All rights reserved. </footer>
      </div>
    </HashRouter>
  )
}

export default App