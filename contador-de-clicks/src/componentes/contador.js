import React from "react";
import '../hojas-de-estilo/Contador.css';

function Contador({ numCLics }) {
    return (
        <div className='contador'>
            {numCLics}
        </div>
    );
}

export default Contador;