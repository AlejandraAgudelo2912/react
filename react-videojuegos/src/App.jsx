import "./App.css";
import { useEffect, useState } from "react";
import Videojuego from "./components/Videojuego";

function App (){
  console.log("App ejecutada");
  const [favoritos, setFavoritos] = useState(0);
  const [usuarios, setUsuarios] = useState([]);

  useEffect(()=>{
    async function cargarUsuarios() {
      const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

      const datos = await respuesta.json();
      setUsuarios(datos);
    }
    cargarUsuarios();
  }, []);

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

  function eliminarJuego(nombreJuego){
    setVideojuegos(videojuegos.filter(videojuego => videojuego.nombre !== nombreJuego));

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
          onEliminar={eliminarJuego}
        />      
      ))}

      <input 
        type="text" 
        value={nuevoJuego}
        onChange={(e)=>setNuevoJuego(e.target.value)}
      ></input>
      <button onClick={agregarJuego}>Agregar</button>

      <h2>Usuarios</h2>
      {
        usuarios.map(usuario => (
          <p>{usuario.name}</p>
        ))
      }
    </div>
    
  )
}



export default App;