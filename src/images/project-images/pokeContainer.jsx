import React from "react"
import style from "./image.module.scss"
import GitHubIcon from "@material-ui/icons/GitHub"
import { Link } from "gatsby"
import SEO from "../../components/seo"

function gmImg() {
  return (
    <dir className={style.container}>
      <SEO
        title="Who's that Pokémon?"
        description="Interactive game based on a regular feature of pokemon television episodes where the viwer guess the pokemon previusly shown as a dark silouette."
      />
      <h1 className={style.title}>Who's that Pokémon?</h1>
      <div className={style.container_icons}>
        <div>
          <a
            className={style.site}
            href="https://paularrea.github.io/Proyecto---pokemon/"
            target="blank"
          >
            Go and Play!
          </a>
        </div>
        <div>
          <a
            href="https://github.com/paularrea/Proyecto---pokemon"
            target="blank"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className={style.description}>
        <h1>About the project</h1>
        <p>
          Interactive game based on a regular feature of Pokémon television
          episodes where the viewer guess the Pokémon previusly shown as a dark
          silouette. It's a multiple-choice question, with a countdown, once
          time is over the pokemon is reveled and a messege will tell you if
          your answer is correct or incorrect.
        </p>
        <br />
        <h1>Challenge and technologies</h1>
        <p>
          As a user you have access to the pokedex where all pokemons are
          displayed with its main characteristics. Developed using
          <span className={style.bold}> Vanilla JS</span>.
        </p>
      </div>
      <Link className={style.link} to="/#projects">
        Back to projects
      </Link>
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
    
    </dir>
  )
}

export default gmImg
