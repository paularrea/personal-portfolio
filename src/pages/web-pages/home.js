import React from "react"
import IntroVideo from "../../components/Video/introVideo.jsx"
import styles from "../../styles/home.module.scss"
import SEO from "../../components/seo"
import InfiniteSroll from "../../components/infoHome/InfiniteSroll.jsx"

const Home = () => {
  return (
    <div id="home" className={styles.container}>
      <SEO
      description="Portfolio website of the frontend web developer Pau Larrea, with
       all the available material (projects, contact, cv...)."/>
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Hello! I'm Pau, and I'm a FRONTEND DEVELOPER based in Barcelona.
        </h1>
        <IntroVideo />
      </div>
      <div className={styles.intro_infinite}>
      <InfiniteSroll/>
      </div>
    </div>
  )
}

export default Home
