import React from 'react';
import icono from "./imagenes/logo.jpg";
const Sobremi = () => {
    return (
        <div className="contenedor">
             <img id="Sobremi" src={icono} alt="imagen logo"/>
             <p id="soy">Hola, mi nombre es Gastón Maximiliano Grecco. 
                 Tengo 34 años. Soy nacido en la ciudad de Mar del Plata, Bs. As., Argentina.
                 Actualmente, me encuentro radicando en México.<br></br>Descubrí mi pasión
                 por la programación en el 2020. Por esta razón, inicié una ingeniería. Al
                 ver el escaso conocimiento que se me proporcionaba en cuanto a programación, 
                 decidí reforzar mis saberes de manera autodicacta, por medio de libros o el internet. Actualmente 
                 me encuentro en un "bootcamp" de desarrollo "FullStack". Por el momento, puedo
                 afirmar que poseo los conocimientos necesarios en React para desarrollar una página
                 con diversas funcionalidades. Sé emplear la creación de componentes y conectar 
                 propiedades por medio de props. Sé realizar peticiones de tipo get, post, put y delete
                 por medio de la función axios.Sé manipular diversos Hooks, entre los principales,
                 "useState y useEffect", ademas de los "CustomHooks".Sé utilizar diversas librerías 
                 como "react-router-dom","react-redux" y "react-thank", entre las principales.<br></br>
                 Te invito a ver mi portafolio de React para que experimentes un poco de lo que sé hacer.
                 Aún estoy por dar fin a un ultimo proyecto de carrito de compras, pero espero terminarlo pronto.
                 Como verás, me falta dar retoques de diseño con css a mucho de este portafolio, 
                 ya que no le he dedicado el tiempo debido, pero la parte funcional está en orden.<br></br>
                 Si lo deseas, también podrás acceder a mis repositoros de Github para poder ver mi código.
                 Espero que te agrade mi trabajo y pronto me contactes.
                 Me encuentro muy ansioso de trabajar en tu proyecto</p>
        </div>
    );
};

export default Sobremi;