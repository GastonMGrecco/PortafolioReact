import React from 'react';
import style from './services.module.css'

const Servicios = () => {
    return (
        <div className={style.services}>
            <h1 id="servicios">Servicios</h1>
            <ul className={style.list}>
                <li>Blog personal</li>
                <li>E-commerce</li>
                <li>APIS</li>
                <li>Base de datos</li>
                <li>Proyecto personal</li>
                <li>Idea de negocio</li>
                <li>Aplicación móbil</li>
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