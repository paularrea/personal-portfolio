import React from "react"
import videoStyle from "./introVideo.module.scss"
import ReactPlayer from "react-player/lazy"

function IntroVideo() {
  return (
    <ReactPlayer
      url="https://firebasestorage.googleapis.com/v0/b/innovision-248ab.appspot.com/o/team%2FJOSIE.mp4?alt=media&token=037636e5-2107-4553-bcfc-8bb6420a0835"
      playing
      muted
      loop
      width="60%"
      height="auto"
      className={videoStyle.video}
    />
  )
}

export default IntroVideo
