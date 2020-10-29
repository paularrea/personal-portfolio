import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout/layout";
import Home from "./web-pages/home";
import About from "./web-pages/about";
import Contact from "./web-pages/contact";
import Projects from "./web-pages/projects";
import style from "../styles/home.module.scss";
import Fade from "react-reveal/Fade";
import Dialog from '@material-ui/core/Dialog';
import SEO from '../components/seo';

const App = () => {
  const [visible, setVisible] = useState(false);
  // const [loaded, setLoaded] = useState(false)

  // useEffect(() => {
  //   const intro = setTimeout(() => {
  //     setLoaded(true)
  //   }, 2000)
  //   return () => clearTimeout(intro)
  // }, [])

  const onClose = () => {
    setVisible(false);
  }

  return (
    // <div>
    //   {loaded ? (
    //     <Layout>
    //       <Home />
    //       <Projects />
    //       <About />
    //       <Contact />
    //     </Layout>
    //   ) : (
    // <div className={style.on_load}>
    //   <Fade top>
    //   <div className={style.animation}>Pau Larrea .</div>
    //   </Fade>
    // </div>
    //   )}
    // </div>

    <>
      <SEO
      title="Pau Larrea frontend developer web site"
      description="Portfolio website of the frontend web developer Pau Larrea, with
       all the available material (projects, contact, cv...)."/>
      <Dialog
        open={visible}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className={style.on_load}>
          <Fade top>
            <div className={style.animation}>Pau Larrea .</div>
          </Fade>
        </div>
      </Dialog>
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
