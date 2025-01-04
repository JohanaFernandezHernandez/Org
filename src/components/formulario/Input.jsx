import { useState } from 'react'
import './Formulario.css'

export const Input = ({
    nombre, 
    placeholder, 
    required = false, 
    valor, 
    actualizarValor,
    type = 'text'  // tipo de input, por defecto es 'text'
}) => {

    console.log(type)

   const handleChange = (e) => {
    actualizarValor(e.target.value);
      
   }

return(
<div className={`campo campo-${type}`}>
    <label>{nombre}</label>
    <input 
    placeholder={placeholder}
    type={type}
    required={required}
    value={valor}
    onChange={handleChange}
    />
</div>
)
}