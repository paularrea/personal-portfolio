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
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw1.png?alt=media&token=2117ea13-44cd-4bdb-945d-affc67fa0cc5"
          alt="project image one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw2.png?alt=media&token=c2ffa11a-560e-40a7-9fd7-59b876438350"
          alt="project image two"
        />
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          Swap it is a social platform designed to post and exchange handmade
          products between people, using photographies, drawings, decoration
          items, etc., as currency.
        </p>
        <h1>Challenge and technologies</h1>
        <p>
          The platform consists of a responsive MERN stack web application made
          to put into practice acquired knowledge such as React Hooks,
          implementing libraries such as Bootstrap, socket.io and UI material
          components for the frontend. We have used NodeJS and Express to manage
          the server side using Cloudinary for image storage and management and
          MongoDB for storing user data. Deployed with heroku. pair programming.
        </p>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/swapit%2Fsw3.png?alt=media&token=27405190-91d7-40d2-9304-7303ce6ff167"
        alt="project image three"
      />
    </dir>
  )
}

export default gmImg
