import { useState } from "react";
function Videojuego({nombre, horas, onFavorito, onQuitarFavorito, onEliminar}){
    const [esFavorito, setEsFavorito] = useState(false);

    return (
        <div>
            <h2>{nombre}</h2>
            <p>Horas jugadas: {horas}</p>
            <button 
                onClick={() => {
                    if(esFavorito){
                        setEsFavorito(false);
                        onQuitarFavorito();
                    }else{
                        setEsFavorito(true);
                        onFavorito();
                    }
                    
            }}>
                {esFavorito ? "❤️ Favorito" : "🤍 Favorito"}
            </button>

            <button 
                onClick={() =>{
                    onEliminar(nombre)

            }}>
                Eliminar
            </button>
        </div>
    )
}
export default Videojuego;