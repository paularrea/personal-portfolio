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
          {data.site.siteMetadata.title}
        </Link>
      </h1>
    </div>
  )
}

export default Logo
