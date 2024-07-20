import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const privacyInfoData = [
        {
            title: "¿Quiénes somos?",
            text: "Code Hive Inc, con domicilio en https://codehive0.vercel.app/, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:"
        },
        {
            title: "¿Para qué fines utilizaremos sus datos personales?",
            text: (
                <>
                    <p>Los datos personales que recabamos de usted, los utilizaremos para las siguientes finalidades que son necesarias para el servicio que solicita:</p>
                    <ul>
                        <li>Registrar y administrar su cuenta en la aplicación.</li>
                        <li>Procesar sus pedidos de comida.</li>
                        <li>Facilitar la comunicación entre usted y los restaurantes.</li>
                    </ul>
                    <p>De manera adicional, utilizaremos su información personal para las siguientes finalidades que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:</p>
                    <ul>
                        <li>Enviar promociones y ofertas especiales.</li>
                        <li>Realizar encuestas de satisfacción y mejorar nuestros servicios.</li>
                    </ul>
                    <p>En caso de que no desee que sus datos personales sean tratados para estos fines adicionales, desde este momento usted nos puede comunicar lo anterior, enviando un correo electrónico a nuestro equipo de soporte a través de codehive87@outlook.com.</p>
                    <p>La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.</p>
                </>
            )
        },
        {
            title: "¿Dónde puedo consultar el aviso de privacidad integral?",
            text: "Para conocer mayor información sobre los términos y condiciones en que serán tratados sus datos personales, como los terceros con quienes compartimos su información personal y la forma en que podrá ejercer sus derechos ARCO, puede consultar el aviso de privacidad integral en https://codehive0.vercel.app/."
        }
    ];

    return (
        <div className='privacy-policy-section-wrapper' id='privacy-policy'>
            <div className="privacy-policy-section-top">
                <p className="primary-heading" onClick={toggleExpansion} style={{ cursor: 'pointer' }}>Aviso de Privacidad</p>
            </div>
            {isExpanded && (
                <div className="privacy-policy-section-bottom">
                    {privacyInfoData.map((data, index) => (
                        <div className="privacy-policy-info" key={index}>
                            <h2>{data.title}</h2>
                            <div>{data.text}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PrivacyPolicy;
