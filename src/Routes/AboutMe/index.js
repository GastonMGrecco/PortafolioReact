import React from 'react';
import icono from "./assets/logo.jpg";
import './style.css'
const Sobremi = () => {
    return (
        <div className="container">
             <img id="aboutMe" src={icono} alt="Me"/>
             <p className="Iam">Hola, mi nombre es Gastón Maximiliano Grecco. 
                 Tengo 34 años. Soy nacido en la ciudad de Mar del Plata, Bs. As., Argentina.
                 Actualmente, me encuentro radicando en México.Descubrí mi pasión
                 por la programación en el 2020. Por esta razón, inicié una ingeniería. Al
                 ver el escaso conocimiento que se me proporcionaba en cuanto a programación, 
                 decidí reforzar mis saberes de manera autodicacta, por medio de libros o el internet. Puedo
                 afirmar que poseo los conocimientos necesarios en React para desarrollar una página
                 con diversas funcionalidades. Sé emplear la creación de componentes y conectar 
                 propiedades por medio de props. Sé realizar peticiones de tipo get, post, put y delete
                 por medio de la función axios.Sé manipular diversos Hooks, entre los principales,
                 "useState y useEffect", ademas de los "CustomHooks".Sé utilizar diversas librerías 
                 como "react-router-dom","react-redux" y "redux-toolkit", entre las principales.
                 Te invito a ver mi portafolio de React para que experimentes un poco de lo que sé hacer.
                 Si lo deseas, también podrás acceder a mis repositoros de Github para poder ver mi código.
                 Espero que te agrade mi trabajo y pronto me contactes.
                 Me encuentro muy ansioso de trabajar en tu proyecto</p>
            <p className="Iam">Hello, my name is Gastón Maximiliano Grecco. 
                 I am 34 years old. I was born in the city of Mar del Plata, Buenos Aires, Argentina.
                 Currently, I am living in Mexico.I discovered my passion
                 for programming in 2020. For this reason, I started an engineering. To the
                 to see the limited knowledge that was provided to me in terms of programming, 
                 I decided to reinforce my knowledge in a self-dictated way, through books or the internet. I can
                 affirm that I have the necessary knowledge in React to develop a page
                 with various functionalities. Know how to use component creation and connect 
                 properties by means of props. I know how to make requests of type get, post, put and delete
                 by means of the axios function.I know how to manipulate various Hooks, among the main ones,
                 "useState and useEffect", in addition to the "CustomHooks". I know how to use various libraries 
                 such as "react-router-dom", "react-redux" and "redux-toolkit", among the main ones.
                 I invite you to see my React portfolio so you can experience a little of what I know how to do.
                 If you wish, you can also access my Github repositories to see my code.I hope you like my work and soon contact me.
                 I find myself very eager to work on your project
                  </p>
        </div>
    );
};

export default Sobremi;