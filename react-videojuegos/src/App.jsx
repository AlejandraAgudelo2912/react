import "./App.css";
import { useState } from "react";
import Videojuego from "./components/Videojuego";

function App (){
  const [favoritos, setFavoritos] = useState(0);

  function agregarJuego(){
    if(nuevoJuego.trim()===""){
      return;
    }

    const repetido = videojuegos.find( 
      videojuego => videojuego.nombre === nuevoJuego.trim()
    );

    if(repetido){
      return;
    }

    const nuevoVideojuego = {nombre: nuevoJuego.trim(), horas: 0}

    setVideojuegos([
      ...videojuegos,
      nuevoVideojuego

    ]);

    setNuevoJuego("");
  }

  function aumentarFavoritos() {
    setFavoritos(favoritos + 1);
  }

  function disminuirFavoritos(){
    if (favoritos>0) {
      setFavoritos(favoritos - 1);

    }
  }

      const [videojuegos, setVideojuegos] = useState([
        {
            nombre: "Minecraft",
            horas: 500
        },
        {
            nombre: "Terraria",
            horas: 200
        },
        {
            nombre: "Stardew Valley",
            horas: 150
        }
    ]);
    const [nuevoJuego, setNuevoJuego] = useState("");
  return (
    <div>

      <h1>Biblioteca De Videojuegos</h1>
      
      <p>Videojuegos Favoritos: {favoritos}</p>
      <button onClick={()=>setFavoritos(favoritos+1)}>Añadir Favoritos</button>

      {videojuegos.map(videojuego => (
        <Videojuego 
          nombre={videojuego.nombre}
          horas={videojuego.horas}
          onFavorito={aumentarFavoritos}
          onQuitarFavorito={disminuirFavoritos}
        />      
      ))}

      <input 
        type="text" 
        value={nuevoJuego}
        onChange={(e)=>setNuevoJuego(e.target.value)}
      ></input>
      <button onClick={agregarJuego}>Agregar</button>
    </div>
    
  )
}



export default App;