import React from 'react';
import icono from "./imagenes/logo.jpg";
const Sobremi = () => {
    return (
        <div>
             <img id="Sobremi" src={icono} alt="imagen logo"/>
             <p id="soy">Hola, mi nombre es Gastón Maximiliano Grecco. 
                 Estoy estudiando una ingeniería en sistemas
                 de cómputo y haciendo un chingo de cursos 
                 para ser el mejor en esto de la programación.</p>
        </div>
    );
};

export default Sobremi;