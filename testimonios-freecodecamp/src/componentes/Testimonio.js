import Rect from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props){
  return (
    <div className = 'contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require (`../imagenes/testimonio-${props.imagen}.png`)}
        alt = 'Imagen de jjong'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-persona-testimonio'> 
        <b>{props.nombre}</b> desde {props.pais}</p>
        <p className='cargo-persona'>{props.cargo} en <b>{props.empresa}</b></p>
        <p className='texto-testimonio'> "{props.testimonio}"</p>
      </div>
    </div>
  );
}

export default Testimonio;