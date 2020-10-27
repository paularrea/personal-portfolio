import React from "react"
import Layout from "../components/Layout/layout"
import Home from "../components/web-pages/home"
import About from "../components/web-pages/about"
import Contact from "../components/web-pages/contact"
import Projects from "../components/web-pages/projects"
// import Site from "./site"

const App = () => {
  return (
    <Layout>
      <Home />
      <Projects />
      <About />
      <Contact />
    </Layout>
  )
}
export default App
