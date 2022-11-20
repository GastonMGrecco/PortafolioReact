import React from 'react';
import frases from './assets/frases.jpg';
import ricky from './assets/ricky.jpg';
import clima from './assets/clima.jpg';
import usuarios from './assets/usuarios.jpg';
import pokemon from './assets/pokemon.jpg';
import joyeria from  './assets/joyeria.png';
import style from './style.module.css'

const ReactP = () => {
    return (
        <div className={style.container}>
            <a className={style.links} href="https://frases-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className={style.imgs} src={frases} />
            </a>
            <a className={style.links} href="https://my-clima-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className={style.imgs} src={clima} />
            </a>
            <a className={style.links} href="https://ricky-and-morty-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className={style.imgs} src={ricky} />
            </a>
            <a className={style.links} href="https://usuarios-app.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className={style.imgs} src={usuarios} />
            </a>
            <a className={style.links} href="https://pokemon-appi.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className={style.imgs} src={pokemon} />
            </a>
            <a className={style.links} href="https://e-commerce-joyeria.netlify.app"
                target="_blank" rel="noreferrer" >
                <img alt="imagen" className={style.imgs} src={joyeria} />
            </a>
        </div>
    );
};

export default ReactP;