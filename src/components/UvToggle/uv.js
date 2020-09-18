import React from "react"
import Switch from "@material-ui/core/Switch"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import style from "./uv.module.scss"
import "./switcher.css"

function Uv() {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <div className={style.uv_label}>
          Dark Mode
          <Switch
            style={{ color: "var(--switcher)" }}
            checked={theme === "dark"}
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            name="checkedA"
            inputProps={{ "aria-label": "secondary checkbox" }}
          />
        </div>
      )}
    </ThemeToggler>
  )
}

export default Uv
