import Card from './components/Card'
import Formulario from './components/Formulario'
import './App.css'
import { useState } from 'react'

function App() {
  const [datos, setDatos] = useState ({})
  const guardarDatos = (nick, juego)=> {
    setDatos({nick, juego})
  }
  return (
    <>  
    <Formulario guardarDatos={guardarDatos}/>
    {Object.keys(datos).length === 0 ? undefined:(
      <Card nick={datos.nick} juego={datos.juego}/>
    ) }
    </>
  )
}

export default App
