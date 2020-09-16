import React from "react"
import Fade from "react-reveal/Fade"
import cv from "../../cv/cv Pau Larrea 2020.pdf"
import style from "./reveal.module.scss"

const RevealContact = () => {
  return (
    <Fade left delay={300} duration={2000}>
      <div className={style.container}>
          <h3 className={style.letscreate}>
            Let's <span className={style.create}>create</span>.
          </h3>
          <p className={style.reach_me}>Reach me out!</p>
          <div className={style.links_container}>
            <div className={style.btn}>
              <a href={cv} target="_blank" rel="noopener noreferrer">
                Download CV
              </a>
            </div>
            <div className={style.btn}>
              <a
                href="mailto:paularrea12@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get in touch
              </a>
            </div>
          </div>
      </div>
    </Fade>
  )
}

export default RevealContact
