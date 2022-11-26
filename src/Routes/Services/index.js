import React from 'react';
import style from './services.module.css'

const Servicios = () => {
    return (
        <div className={style.services}>
            <h1 id="servicios">Servicios</h1>
            <ul className={style.list}>
                <li className={style.li}>Blog personal</li>
                <li className={style.li}>E-commerce</li>
                <li className={style.li}>APIS</li>
                <li className={style.li}>Base de datos</li>
                <li className={style.li}>Proyecto personal</li>
                <li className={style.li}>Idea de negocio</li>
                <li className={style.li}>Aplicación móbil</li>
                {/* <li>Ciber seguridad</li>
                <p>(próximamente)</p> */}

            </ul>
            <p id="cotizacion">Si requieres una cotización <a
            className={style.contact}
                title="https://wa.me/qr/F7BZT7GI6BZKI1"
                href="https://wa.me/qr/F7BZT7GI6BZKI1"
                target="_blank"
                rel="noreferrer">contactame</a></p>
        </div>
    );
};

export default Servicios;
