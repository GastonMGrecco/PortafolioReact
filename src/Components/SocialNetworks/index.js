import React from 'react';
import facebook from './assets/facebook.png'
import whatsapp from './assets/whatsapp.png'
import gmail from './assets/gmail.png'
import youtube from './assets/youtube.png'
import instagram from './assets/instagram.png'
import linkedin from './assets/linkedin.png'
import github from './assets/github.png'

import style from './style.module.css'

const RedesSociales = () => {
    return (
        <section className={style.container}>
        <a title="https://www.facebook.com/gastonmaximiliano.grecco/"href="https://www.facebook.com/gastonmaximiliano.grecco/"target="_blank" rel="noreferrer" ><img alt="imagen" className={style.imgs}src={facebook} /></a>
        <a title="https://wa.me/qr/F7BZT7GI6BZKI1"href="https://wa.me/qr/F7BZT7GI6BZKI1"target="_blank"rel="noreferrer"><img alt="imagen"className={style.imgs}src={whatsapp} /></a>
        <a title="mailto:gastonmgrecco@gmail.com"href="mailto:gastonmgrecco@gmail.com"target="_blank"rel="noreferrer"><img alt="imagen"className={style.imgs}src={gmail} /></a>
        <a title="https://www.youtube.com/channel/UCsusLESCZT66V_UZ_LNU9lA" href="https://www.youtube.com/channel/UCsusLESCZT66V_UZ_LNU9lA"target="_blank"rel="noreferrer"><img alt="imagen"className={style.imgs}src={youtube} /></a>
        <a title="https://www.instagram.com/gastonmaximilianogrecco/"href="https://www.instagram.com/gastonmaximilianogrecco/"target="_blank"rel="noreferrer"><img alt="imagen"id={style.insta}className={style.imgs}src={instagram} /></a>
        <a title="https://www.linkedin.com/in/gast%C3%B3n-m-grecco-24201a1bb/"href="https://www.linkedin.com/in/gast%C3%B3n-m-grecco-24201a1bb/"target="_blank"rel="noreferrer"><img alt="imagen"className={style.imgs}src={linkedin} /></a>
        <a title="https://github.com/GastonMGrecco"href="https://github.com/GastonMGrecco"target="_blank"rel="noreferrer"><img alt="imagen"className={style.imgs}src={github} /></a>
        </section>
    );
};

export default RedesSociales;