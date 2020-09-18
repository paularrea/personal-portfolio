import React from "react"
import Layout from "../components/Layout/layout"
import IntroVideo from "../components/Video/IntroVideo"
import Logo from "../components/Header/title"
import styles from "../styles/home.module.scss"

const Home = () => {
  return (
    <Layout>
      <Logo />
      <IntroVideo />
      <div className={styles.intro_text}>
        <h1>
          My name is Pau Larrea, very nice to meet you! Please take a look
          around. Here you will find a bit of myself and some of my personal
          projects.
        </h1>
      </div>
    </Layout>
  )
}

export default Home
