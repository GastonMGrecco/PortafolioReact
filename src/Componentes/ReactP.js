import React from 'react';
import frases from './imagenes/frases.jpg';
import ricky from './imagenes/ricky.jpg';
import clima from './imagenes/clima.jpg';
import usuarios from './imagenes/usuarios.jpg';
import pokemon from './imagenes/pokemon.jpg';
import joyeria from  './imagenes/joyeria.png';

const ReactP = () => {
    return (
        <div className='portafolio'>
            <a className="LinkP"href="https://frases-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className="Lenguaje"src={frases} />
            </a>
            <a className="LinkP"href="https://my-clima-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className="Lenguaje"src={clima} />
            </a>
            <a className="LinkP"href="https://ricky-and-morty-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className="Lenguaje"src={ricky} />
            </a>
            <a className="LinkP"href="https://usuarios-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className="Lenguaje"src={usuarios} />
            </a>
            <a className="LinkP"href="https://pokemon-appi.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className="Lenguaje"src={pokemon} />
            </a>
            <a className="LinkP"href="https://e-commerce-joyeria.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className="Lenguaje"src={joyeria} />
            </a>
        </div>
    );
};

export default ReactP;