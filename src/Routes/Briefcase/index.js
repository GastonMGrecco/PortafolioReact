import React from 'react';
import { Link } from 'react-router-dom';
import vanilla from './assets/vanilla.png';
import logo from './assets/logo.svg'; 
import nodejs from './assets/nodejs.jpg';
import Webpack from '../../Components/Webpack';
import style from './style.module.css';


const Portafolio = () => {
  return (
    <div className={style.container}>
      <Link to='/portafolio/vanilla' className={style.links}>
        <img alt='vanilla'  className={style.imgs}src={vanilla} />
      </Link>
      <Link to='/portafolio/react' className={style.links}>
        <img src={logo} className={style.Applogo} alt='logo' />
      </Link>
      <Link to='/portafolio/nodejs' className={style.links}>
        <img alt='imagen' className={style.imgs} src={nodejs} />
      </Link>
      <Link to='/portafolio/webpack' className={style.links}>
        <Webpack />
      </Link>
   
    </div>
  );
};

export default Portafolio;
