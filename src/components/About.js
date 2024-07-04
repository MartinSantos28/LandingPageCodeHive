import React from 'react'
import AboutBackground from "../assets/about-background.png"
import AboutBackgroundImage from "../assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

const About = () => {
    const handleRedirect = () => {
        window.location.href = 'https://wa.me/9681191973'
    }
  return (
    <div className='about-section-container'id='about'>
        <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src= {AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>
                Acerca de FastMeal
            </p>
            <h1 className="primary-heading">
                ¿Quienes somos en FastMeal?
            </h1>
            <p className="primary-text">
            Nuestra misión es ofrecerte una experiencia de entrega rápida, confiable y deliciosa, para que puedas saborear cada momento sin complicaciones. ¡Descubre FastMeals hoy y deja que nosotros nos encarguemos del resto!
            </p>
            <p className="primary-text">        
            </p>
        </div>
    </div>
  )
}

export default About
