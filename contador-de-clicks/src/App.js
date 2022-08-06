import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/contador';
import freeCodeCampLogo from './imagenes/freeCodeCamp-logo.png';


function App() {

  const manejarClic = () => {
    console.log("Clic");
  }

  const reiniciarContador = () => {
    console.log("Reiniciar");
  }

  return (
    <div className="App">
      <div className='freeCodeCamp-logo-contenedor'>
        <img
        className='freeCodeCamp-logo'
        src={freeCodeCampLogo}
        alt= 'logo de freeCodeCamp'/>

      </div>
      <div className='contenedor-contador'>
        <Contador numCLics='5'/>
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
