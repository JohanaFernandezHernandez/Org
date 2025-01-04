import { useState } from "react";
import { Button } from "../Button";
import { ListaOpciones } from "../ListaOpciones";
import "./Formulario.css";
import { Input } from "./Input";

export const Formulario = ({equipos, registrarColaborador, crearEquipo}) => {

  const [nombre, setNombre] = useState();
  const [puesto, setPuesto] = useState();
  const [foto, setFoto] = useState();
  const [equipo, setEquipo] = useState();

  const [titulo, setTitulo]=useState();
  const [color, setColor]=useState();

  const manejarEvento = (e) => {
    e.preventDefault();
    let datosEnviar = {
        nombre,
        puesto,
        foto,
        equipo,
      };
    registrarColaborador(datosEnviar);
    };

  const manejarNuevoEquipo = (e) => {
    e.preventDefault();
    crearEquipo({titulo, colorPrimario: color});
  }


  return (
    <section className="formulario">
      <form onSubmit={manejarEvento}>
        <h2>Rellena el formulario pata crear el colaborador.</h2>
        <Input
          nombre="Nombre"
          placeholder="Ingrese su Nombre..."
          required
          valor={nombre}
          actualizarValor={setNombre}
        />
        <Input
          nombre="Puesto"
          placeholder="Ingrese su Puesto..."
          required
          valor={puesto}
          actualizarValor={setPuesto}
        />
        <Input
          nombre="Foto"
          placeholder="Ingrese el enlace de la foto..."
          required
          valor={foto}
          actualizarValor={setFoto}
        />
        <ListaOpciones valor={equipo} actualizarEquipo={setEquipo} equipos={equipos}/>
        <Button texto="Crear" />
      </form>

      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario pata crear el equipo.</h2>
        <Input
          nombre="Titulo"
          placeholder="Ingrese Titulo..."
          required
          valor={titulo}
          actualizarValor={setTitulo}
        />
        <Input
          nombre="Color"
          placeholder="Ingrese el color en hex..."
          required
          valor={color}
          actualizarValor={setColor} 
          type="color" 
        />

        <Button texto="Registrar Equipo" />
        </form>
    </section>
  );
};
