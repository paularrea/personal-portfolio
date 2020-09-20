import React from "react"
import videoStyle from "./introVideo.module.scss"
import ReactPlayer from 'react-player/lazy'
import url from "../../../static/JOSIE.mp4"


function IntroVideo() {
  return (
      <ReactPlayer
      url={url}
      playing
      muted
      loop
      width='60%'
      height='auto'
      className={videoStyle.video}
    />
  )
}

export default IntroVideo
