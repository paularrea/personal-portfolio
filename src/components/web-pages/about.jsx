import React, { useState, useEffect } from "react"
import { useTransition, animated } from "react-spring"
import RevealContact from "../../components/Reveal/RevealContact"
import style from "../../styles/about.module.scss"
import Fade from "react-reveal/Fade"

const About = () => {
  const [index, setIndex] = useState(0)
  const [items] = useState([
    {
      title:
        "In a friendly non-competitive environment surrounded by talented and humble people.",
      id: 0,
    },
    {
      title:
        "In a company with strong values, always taking into account to grow sustainably and focused in helping its workers to unleash their potential.",
      id: 1,
    },
    {
      title: "On projects with which at the end of the day I can be proud of.",
      id: 2,
    },
  ])

  const fadingTextPropsTransition = useTransition(
    items[index],
    item => item.id,
    {
      from: { opacity: 1 },
      enter: { opacity: 1 },
      leave: { opacity: 1 },
      config: { tension: 1220, friction: 120 },
    }
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(state => (state + 1) % items.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [items.length])

  return (
      <div id='about' className={style.about_container}>
        <h1 className={style.component_title}>ABOUT</h1>
        <div className={style.description}>
          <p>
            Hi I am Pau, a frontend developer passionate about building
            beautiful and intuitive designs that improves people's lives. While
            I'm not coding or pushing pixels, you'll find me surfing or
            traveling around.
          </p>
        </div>

        <RevealContact />
        <div className={style.change}>
          <p style={{fontStyle:"italic"}} >My goal is to work ...</p>
          {fadingTextPropsTransition.map(({ item, key }) => (
            <animated.div style={{fontStyle:"italic"}} key={key}>
              <p>" {item.title} "</p>
            </animated.div>
          ))}
        </div>
        <Fade bottom>
        <div className={style.img}></div>
        </Fade>
      </div>
  )
}

export default About
