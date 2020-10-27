import React from "react"
import style from "../../styles/initial.animation.module.scss"
import Fade from "react-reveal/Fade"

const Animation = () => {
  
  return (
    <div className={style.on_load}>
      <Fade top>
        <div className={style.animation}>Pau Larrea.</div>
      </Fade>
    </div>
  )
}

export default Animation
