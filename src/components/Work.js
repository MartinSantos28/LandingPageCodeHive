import React from 'react'
import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png"
import DeliveryMeals from "../assets/delivery-image.png"
const Work = () => {
    const workInfoData=[
        {
            image : PickMeals,
            title : "Entrega rapida",
            Text : "Con solo unos clics, puedes ver el menú, hacer tu pedido y realizar el pago, todo desde la comodidad de tu hogar."
        },
        {
            image : ChooseMeals,
            title : "Pedidos faciles",
            Text :"Con solo unos clics, puedes ver el menú, hacer tu pedido y realizar el pago, todo desde la comodidad de tu hogar."
        },
        {
            image : DeliveryMeals,
            title : "Seguridad y calidad",
            Text : "Nos esforzamos para ofrecerte una experiencia de entrega excepcional, respaldada por los más altos estándares de seguridad alimentaria y calidad"
        }
    ]
  return (
    <div className='work-section-wrapper' id='products'>
        <div className="work-section-top">
            <p className="primary-heading">Nuestros servicios</p>
            <h1 className="primary-subheading"></h1>
            <p className="primary-text">
            En FastMeals, entendemos que la vida puede ser ajetreada, ¡y estamos aquí para hacerla más fácil! Aquí tienes lo que nos distingue y por qué somos tu mejor opción para el delivery de comida:
             </p>
        </div>
        <div className="work-section-bottom">
            {workInfoData.map((data) => (
                <div className="work-section-info">
                    <div className="info-boxes-img-container">
                        <img src={data.image} alt="" />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.Text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work
