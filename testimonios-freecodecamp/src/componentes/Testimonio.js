import Rect from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(){
  return (
    <div className = 'contenedor-testimonio'>
      <img
        className='imagen-testimonio'
        src={require('../imagenes/yy.png')}
        alt = 'Imagen de jjong'/>
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-persona-testimonio'> Jonghyun Kim desde Corea del Sur</p>
        <p className='cargo-persona'>Cantante SHINee</p>
        <p className='texto-testimonio'> "i say this like a habit but thank you so much for loving me though i lack; because of you, my eternity is warm"</p>
      </div>
    </div>
  );
}

export default Testimonio;