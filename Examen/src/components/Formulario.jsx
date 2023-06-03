import { useState } from 'react'
function Formulario(props){
    const [nick, setNick] = useState('')
    const [juego, setJuego] = useState('')
    const [mensaje, setMensaje] = useState('')

    const onChangeNick = e => {
        setNick(e.target.value)
    }
    const onChangeJuego = e =>{
        setJuego(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!/^\S/.test(nick)) {
            setMensaje('Tu nickname no puede tener espacio al inicio')
          } else if (nick.length <= 2) {
            setMensaje('Tu nickname debe tener mas de 3 caracteres')
          } else if (juego.length <= 5) {
            setMensaje('Tu respuesta debe tener minimo 6 caracteres')
          } else {
            setMensaje('¡Tremendo! Ingresaste tus datos correctamente')
            props.guardarDatos(nick, juego)
          }

    }

    return(
        <>
        <h1>Datos del Gamer</h1>
        <form onSubmit={handleSubmit} className='form'>
            <label htmlFor="juego">Escribe tu NickName</label>
            <input 
            type="text"
            name="juego" 
            value={nick}
            placeholder='Escribe tu NickName'
            onChange={onChangeNick}
            />

            <label htmlFor="completar">Escribe tu Juego Fav y en donde lo juegas</label>
            <input 
            type="text" 
            name="completar" 
            value={juego}
            placeholder='Escribe tu Juego Favorito y en donde lo juegas'
            onChange={onChangeJuego}
            />
            <button>Enviar</button>
            {mensaje && <p>{mensaje}</p>}

        </form>
        
        </>
    )
}
export default Formulario