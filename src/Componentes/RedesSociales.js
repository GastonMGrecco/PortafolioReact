import React from 'react';
import {Link} from 'react-router-dom';
import facebook from './imagenes/facebook.png'
import whatsapp from './imagenes/whatsapp.png'
import gmail from './imagenes/gmail.png'
import youtube from './imagenes/youtube.png'
import instagram from './imagenes/instagram.png'
import linkedin from './imagenes/linkedin.png'
import github from './imagenes/github.png'

const RedesSociales = () => {
    return (
        <section>
        <a href="https://www.facebook.com/gastonmaximiliano.grecco/"target="_blank"><img  className="redsocial"src={facebook} /></a>
        <a href="https://wa.me/qr/F7BZT7GI6BZKI1"target="_blank"><img className="redsocial"src={whatsapp} /></a>
        <a href="mailto:gastonmgrecco@gmail.com"target="_blank"><img className="redsocial"src={gmail} /></a>
        <a href="https://www.youtube.com/channel/UCsusLESCZT66V_UZ_LNU9lA"target="_blank"><img className="redsocial"src={youtube} /></a>
        <a href="https://www.instagram.com/gastonmaximilianogrecco/"target="_blank"><img id="insta"className="redsocial"src={instagram} /></a>
        <a href="https://www.linkedin.com/in/gast%C3%B3n-m-grecco-24201a1bb/"target="_blank"><img className="redsocial"src={linkedin} /></a>
        <a href="https://github.com/GastonMGrecco"target="_blank"><img className="redsocial"src={github} /></a>
        </section>
    );
};

export default RedesSociales;