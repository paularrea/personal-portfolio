import React from "react"
import videoStyle from "./introVideo.module.scss"

function IntroVideo() {
  return (
    <iframe
      className={videoStyle.video}
      title='video intro'
      src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdop69qrah%2Fvideo%2Fupload%2Fv1614160100%2FJOSIE_m0gnjk.mp4&cloud_name=Pau%27s%20cloud&player%5Bfluid%5D=true&player%5Bcontrols%5D=false&player%5Bmuted%5D=true&player%5Bhide_context_menu%5D=false&player%5Bfloating_when_not_visible%5D=false&player%5Bautoplay%5D=true&player%5Bloop%5D=true"
      width="640"
      height="480"
      allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
      allowfullscreen
      frameborder="0"
    ></iframe>
  )
}

export default IntroVideo
