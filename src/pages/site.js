import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout/layout"
import Home from "../components/web-pages/home"
import About from "../components/web-pages/about"
import Contact from "../components/web-pages/contact"
import Projects from "../components/web-pages/projects"
import Animation from "../components/Intro/Animation"

const Site = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const intro = setTimeout(() => {
      setLoaded(true)
    }, 2000)
    return () => clearTimeout(intro)
  }, [])

  return (
    <>
      {loaded ? (
        <Layout>
          <Home />
          <Projects />
          <About />
          <Contact />
        </Layout>
      ) : (
        <Animation />
      )}
    </>
  )
}

export default Site