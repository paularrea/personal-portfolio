import React from "react"
import videoStyle from "./introVideo.module.scss"

function IntroVideo() {
  
  return (
    <div className={videoStyle.container}>
      <video id="background-video" loop autoPlay muted>
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/innovision-248ab.appspot.com/o/team%2FJOSIE.mp4?alt=media&token=037636e5-2107-4553-bcfc-8bb6420a0835"
          }
          type="video/mp4"
        />
        <source
          src={
            "https://firebasestorage.googleapis.com/v0/b/innovision-248ab.appspot.com/o/team%2FJOSIE.mp4?alt=media&token=037636e5-2107-4553-bcfc-8bb6420a0835"
          }
          type="video/ogg"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default IntroVideo
