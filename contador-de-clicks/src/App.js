import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import imagenLogo from './imagenes/imagen-logo.png';
import { useState } from 'react';


function App() {

  const [numCLics, setNumCLics] = useState(0);

  const manejarClic = () => {
    setNumCLics(numCLics + 1);

  }

  const reiniciarContador = () => {

    setNumCLics(0);
    
  }

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img
        className='mi-logo'
        src={imagenLogo}
        alt= 'logo'/>

      </div>
      <div className='contenedor-contador'>
        <Contador numCLics= {numCLics}/>
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic} />

        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}/>
      </div>
      
    </div>
  );
}

export default App;
