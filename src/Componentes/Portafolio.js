import React from 'react';
import { Link } from 'react-router-dom';
import manila from './imagenes/manila.png';
import react from './imagenes/react.jpg';

const Portafolio = () => {
    return (
        <div className='portafolio'>
           <Link to='/portafolio/manila'className='LinkP'>
                <img alt="imagen" className="Lenguaje"src={manila} />
           </Link>
           <Link to='/portafolio/react'className='LinkP'>
                <img alt="imagen" className="Lenguaje"src={react} /> 
           </Link>

        </div>
    );
};

export default Portafolio;