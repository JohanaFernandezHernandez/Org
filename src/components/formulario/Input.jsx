import { useState } from 'react'
import './Formulario.css'

export const Input = ({
    nombre, 
    placeholder, 
    required = false, 
    valor, 
    actualizarValor
}) => {

   const handleChange = (e) => {
    actualizarValor(e.target.value);
      
   }

return(
<div className='campo-texto'>
    <label>{nombre}</label>
    <input 
    placeholder={placeholder}
    type="text"
    required={required}
    value={valor}
    onChange={handleChange}
    />
</div>
)
}