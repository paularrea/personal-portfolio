import React from "react"
import style from "./image.module.scss"

function gmImg() {
  return (
    <dir className={style.container}>
      <h1 className={style.title}>
        "You must be the change <br></br> you want to see in the world" - Gandhi
      </h1>
      <div className={style.row}>
        <img
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move1.png?alt=media&token=2a134d8c-97ba-4df6-a827-2ad4b28d386d'
            alt="project image one"
        />
        <img
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move2.png?alt=media&token=107f883e-a04c-48b8-9425-abb71223a33b'
            alt="project image two"
        />
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          Green Move app is a platform to promote environmental and social
          projects. You can support actions that are happening in your city,
          join them or create your own movement and involve people. Always with
          the intention of changing the world for the better.
        </p>
        <h1>Challenge and technologies</h1>
        <p>
          This was my first MERN stack project developed in one week working in
          pair programming.
        </p>
      </div>
      <img
            src='https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/greenmove%2Fgreen-move3.png?alt=media&token=107f883e-a04c-48b8-9425-abb71223a33b'
            alt="project image three"
      />
    </dir>
  )
}

export default gmImg
