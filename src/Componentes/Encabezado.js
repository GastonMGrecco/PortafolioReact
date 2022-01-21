import React from 'react';
import { Link } from 'react-router-dom';


const Encabezado = () => {
    return (
            <header>
                <h1>Gaston M. Grecco</h1>
                <nav>
                    <ul>
                        <div id="MenuP">
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