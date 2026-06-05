function Videojuego({nombre, horas, onFavorito}){
    return (
        <div>
            <h2>{nombre}</h2>
            <p>Horas jugadas: {horas}</p>
            <button onClick={onFavorito}>Favorito</button>
        </div>
    )
}
export default Videojuego;