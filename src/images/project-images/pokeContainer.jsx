import React from "react"
import style from "./image.module.scss"

function gmImg() {
  return (
    <dir className={style.container}>
      <h1 className={style.title}>
        Who's that Pokémon?
      </h1>
      <div className={style.row}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/pokemon%2Fcarousel-pokemon1.png?alt=media&token=9ebe38bc-48aa-4854-a04a-511bf4365601"
          alt="pokemon project one"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-d5c1c.appspot.com/o/pokemon%2Fcarousel-pokemon2.png?alt=media&token=9ebe38bc-48aa-4854-a04a-511bf4365601"
          alt="pokemon project two"
        />
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
        Interactive game based on a regular feature of Pokémon television episodes where the viwer guess the Pokémon previusly shown as a dark silouette. It's a multiple-choise question, with a countdown, once time is over the pokemon is reveled and a messege will tell you if your answer is correct or incorrect.
        </p>
        <h1>Challenge and technologies</h1>
        <p>
        As a user you have access to the pokedex where all pokemons are dispayed with its main characteristics.
        </p>
      </div>
    </dir>
  )
}

export default gmImg
