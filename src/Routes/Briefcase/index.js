import React from 'react';
import { Link } from 'react-router-dom';
import manila from './assets/manila.png';
import logo from './assets/logo.svg'; 
import nodejs from './assets/nodejs.jpg';
import Webpack from '../../Components/Webpack'

import './style.css';
const Portafolio = () => {
  return (
    <div className='portafolio'>
      <Link to='/portafolio/manila' className='LinkP'>
        <img alt='manila' className='Lenguaje' src={manila} />
      </Link>
      <Link to='/portafolio/react' className='LinkP'>
        <img src={logo} className='App-logo' alt='logo' />
      </Link>
      <Link to='/portafolio/nodejs' className='LinkP'>
        <img alt='imagen' className='Lenguaje' src={nodejs} />
      </Link>
      <Link to='/portafolio/webpack'>
        <Webpack />
      </Link>
   
    </div>
  );
};

export default Portafolio;
