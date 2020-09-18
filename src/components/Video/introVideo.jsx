import React from "react"
import videoStyle from "./introVideo.module.scss"
import surfVideo from "../../videos/JOSIE.mp4"

function IntroVideo() {
  return (
    <div className={videoStyle.container}>
    <video
      id="background-video"
      loop
      autoPlay
      muted
    >
      <source src={surfVideo} type="video/mp4" />
      <source src={surfVideo} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default IntroVideo
