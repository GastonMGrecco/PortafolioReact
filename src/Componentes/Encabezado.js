import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import icono from "./imagenes/logo.jpg";


const Encabezado = () => {

    const visible = {
        visibility: "visible",
        animationName: "deraiz",
        animationDuration: "0.2s",
        animationTimingFunction: "linear"
    }
    const invisible = {
        visibility: "hidden",
        animationName: "none",
        animationDuration: "0.2s",
        animationDirection: "reverse"
    }
    const [esVisible, setEsVisible] = useState(false);
    
   
    return (
        <header>
            <img id="yo" src={icono} alt="imagen logo" />
            <div className="titulo">
                <h1> <i>Gastón M. Grecco</i> </h1>
                <h2>Desarrollador</h2>
                <h2>Full Stack</h2>
            </div>

            <button onClick={()=>{setEsVisible(!esVisible)}} />

            <nav>

                <div id="MenuP" style={esVisible===true?visible:invisible}>
                    <h2 className='menuTit'>Menú Principal</h2>
                    <button className="equis" onClick={()=>{setEsVisible(!esVisible)}} />
                    <ul className='enlaces'>
                        <li>
                            <div className='imgInicio'></div>
                            <Link to='/' className='Link'onClick={()=>{setEsVisible(!esVisible)}}>Inicio</Link>
                        </li>
                        <li>
                            <div className='imgSM'></div>
                            <Link to='/sobre_mi' className='Link'onClick={()=>{setEsVisible(!esVisible)}}>Sobre mí</Link>
                        </li>
                        <li>
                            <div className='imgServicios'></div>
                            <Link to='/servicios' className='Link'onClick={()=>{setEsVisible(!esVisible)}}>Servicios</Link>
                        </li>
                        <li>
                            <div className='imgPortafolio'></div>
                            <Link to='/portafolio' className='Link'onClick={()=>{setEsVisible(!esVisible)}}>Portafolio</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    );
};

export default Encabezado;