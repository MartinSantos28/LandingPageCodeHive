import React from 'react'
import Navbar from './navbar'
import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/home-banner-image.png"
import {FiArrowRight} from "react-icons/fi"


const home = () => {
    const handleRedirect = () => {
        window.location.href = 'https://maps.app.goo.gl/Km2Dp8khjijoTu8c6'
    }

  return (
    <div className='home-container'>
        <Navbar/> 
        <div className="home-banner-container">
            <div className="home-bannerImage-container">
                <img src={BannerBackground} alt="" />
            </div>
            <div className="home-text-section">
                <h1 className="primary-heading">Tus alimentos en la puerta de tu casa </h1>
                <p className='primary-text'>
                Con FastMeals, puedes explorar una amplia variedad de restaurantes y platos, ordenar con facilidad, y recibir tu comida directamente en la puerta de tu casa en tiempo récord.
                </p>
                <button className='secondary-button'onClick={handleRedirect}>
                    Descarga aqui <FiArrowRight/>
                </button>

            </div>

            <div className="home-image-container">
                <img src={BannerImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default home
