import { useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { Formulario } from './components/formulario/Formulario'
import { MiOrg } from './components/MiOrg'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(true);

  const actualizarForm = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  return (
    <div className='App'>
    <Header/>  
    {mostrarFormulario ?  <Formulario/> : <></>}
    <MiOrg actualizarForm= {actualizarForm}/>
    </div>
  )
}

export default App
