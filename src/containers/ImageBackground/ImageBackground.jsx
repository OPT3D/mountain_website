import React from "react"
import { Background } from "../../assets"
import './imageBackground.css'


const ImageBackground = () => {
  return (
  
    <div className="background__image">
      <img src={Background} alt="background" />
      </div>

  )
}

export default ImageBackground
