import React from 'react';
import estrellas from "./assets/estrellas.png";
import tierraPlana from "./assets/tierraPlana.png";
import luna from "./assets/luna.png";
import sol from "./assets/sol.png";

import './style.css'


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