import "./App.css";
import Videojuego from "./components/Videojuego";

function App (){
      const videojuegos = [
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
    ];
  return (
    <div>
      <h1>Biblioteca De Videojuegos</h1>
      {videojuegos.map(videojuego => (
        <Videojuego 
          nombre={videojuego.nombre}
          horas={videojuego.horas}
        />      
      ))}
    </div>
    
  )
}

export default App;