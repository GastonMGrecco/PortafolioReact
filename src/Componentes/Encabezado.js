import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import icono from "./imagenes/logo.jpg";

const Encabezado = () => {
    
    const visible={ visibility: "visible",
                    animationName: "deraiz",
                    animationDuration: "0.2s",
                    animationTimingFunction: "linear"}
    const invisible={   visibility: "hidden",
                        animationName: "none",
                        animationDuration: "0.2s" ,
                        animationDirection:"reverse"}
    const [esVisible,setEsVisible]=useState(invisible);
    const [contador,setContador]=useState(1)
    const menu=()=>{
        setContador(contador+1);
        console.log(contador);
        if(contador%2===0){
            setEsVisible(invisible);
        }else{
            setEsVisible(visible);
        }


    }
    return (
            <header>
                <img id="yo" src={icono} alt="imagen logo"/>
                <h1>Gastón M. Grecco: Programador</h1>
                <button onClick={menu}/>
                
                <nav>
                    <ul>
                        <div id="MenuP" style={esVisible}>
                            <h2>Menú Principal</h2>
                            <li><Link to='/' className='Link'>Inicio</Link></li>
                            <li><Link to='/sobre_mi'className='Link'>Sobre mí</Link></li>
                            <li><Link to='/servicios'className='Link'>Servicios</Link></li>
                            <li><Link to='/portafolio'className='Link'>Portafolio</Link></li>
                        </div>
                    </ul>
                </nav>
            </header>
    );
};

export default Encabezado;