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
    const [esVisible, setEsVisible] = useState(invisible);
    const [contador, setContador] = useState(1)
    const menu = () => {
        setContador(contador + 1);
        console.log(contador);
        if (contador % 2 === 0) {
            setEsVisible(invisible);
        } else {
            setEsVisible(visible);
        }


    }
    return (
        <header>
            <img id="yo" src={icono} alt="imagen logo" />
            <div className="titulo">
                <h1> <i>Gastón M. Grecco</i> </h1>
                <h2>Desarrollador</h2>
                <h2>Full Stack</h2>
            </div>

            <button onClick={menu} />

            <nav>

                <div id="MenuP" style={esVisible}>
                    <h2 className='menuTit'>Menú Principal</h2>
                    <ul className='enlaces'>
                        <li>
                            <div className='imgInicio'></div>
                            <Link to='/' className='Link'>Inicio</Link>
                        </li>
                        <li>
                            <div className='imgSM'></div>
                            <Link to='/sobre_mi' className='Link'>Sobre mí</Link>
                        </li>
                        <li>
                            <div className='imgServicios'></div>
                            <Link to='/servicios' className='Link'>Servicios</Link>
                        </li>
                        <li>
                            <div className='imgPortafolio'></div>
                            <Link to='/portafolio' className='Link'>Portafolio</Link>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
    );
};

export default Encabezado;