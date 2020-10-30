import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout/layout"
import Home from "./web-pages/home"
import About from "./web-pages/about"
import Contact from "./web-pages/contact"
import Projects from "./web-pages/projects"
import SEO from "../components/seo"

const App = () => {

  return (
    <>
      <SEO
        title="Pau Larrea frontend developer web site"
        description="Portfolio website of the frontend web developer Pau Larrea, with
       all the available material (projects, contact, cv...)."
      />
      <Layout>
        <Home />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  )
}

export default App
