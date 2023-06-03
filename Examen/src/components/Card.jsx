function Card(props){
    return(
        <div className="card">
            <h1>Nickname: {props.nick}</h1>
            <h2>Juego y Consola: {props.juego}</h2>
        </div>
    )
}
export default Card