import React from 'react';
import estrellas from "./imagenes/estrellas.png";
import tierraPlana from "./imagenes/tierraPlana.png";
import luna from "./imagenes/luna.png";
import sol from "./imagenes/sol.png";




const TierraPlana = () => {
    return (
        <section id="ModeloTP">
            <img id= "estrellas"src={estrellas} alt=""/>
            <img id="tierraPlana"src={tierraPlana} alt=""/>
            <div id="TPL"><img id= "luna"src={luna} alt=""/></div>
            <div id="TP"><img id= "sol" src={sol} alt=""/></div>
        </section>
    

    );
};

export default TierraPlana;