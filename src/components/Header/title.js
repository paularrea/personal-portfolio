import React from "react"
import headerStyles from "./header.module.scss"

function Logo() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "var(--bg)",
        }}
        className={headerStyles.title}
      >
        Hello! I'm Pau Larrea, a FRONTEND DEVELOPER based in Barcelona.
      </h1>
    </div>
  )
}

export default Logo
