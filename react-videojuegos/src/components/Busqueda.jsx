import { useState} from "react";

function Busqueda ({busqueda, setBusqueda}){

    return (
      <input
          type="text"
          placeholder="Buscar videojuego..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
      />    
    )
}

export default Busqueda;