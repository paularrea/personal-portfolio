import React from "react"
import headerStyles from "./header.module.scss"
import { Link, graphql, useStaticQuery } from "gatsby"

function Logo() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <h1>
        <Link
          style={{
            backgroundColor: "var(--bg)",
          }}
          className={headerStyles.title}
          to="/"
        >
          Hello! I'm Pau Larrea, a FRONTEND DEVELOPER based in Barcelona.
        </Link>
      </h1>
    </div>
  )
}

export default Logo
