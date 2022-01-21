import { HashRouter,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import Inicio from  './Componentes/Inicio';
import Sobremi from "./Componentes/Sobremi";
import Servicios from "./Componentes/Servicios";
import Portafolio from "./Componentes/Portafolio";
import RedesSociales from './Componentes/RedesSociales';
import Encabezado from "./Componentes/Encabezado";
import Footer from "./Componentes/Footer";
import icono from "./Componentes/imagenes/iconogmg.ico";
import TierraPlana from "./Componentes/TierraPlana";

function App() {
  return (
    <div className="App">

      

     <HashRouter>

        <Encabezado/>
        <img id="yo" src={icono}/>
        
       
        <Routes>
          
          <Route path="/" element={<Inicio/>}/>
          <Route path="/sobre_mi" element={<Sobremi/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/portafolio" element={<Portafolio/>}/>
          
          
        </Routes>

        <Footer/>
        

     </HashRouter>
    </div>
  );
}

export default App;
