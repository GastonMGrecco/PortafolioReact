import React from 'react';
// import FlatEarth from '../../Components/FlatEarth/';

import style from './style.module.css'

const Inicio = () => {
    return (
        <div className={style.inicio}>
            {/* <FlatEarth/> */}
            <h1 className={style.h1}>Gaston M. Grecco</h1>
            <h2 className={style.h2}>FullStack Developer</h2>
            <div className={style.fullStack}></div>
        </div>
    );
};

export default Inicio;
