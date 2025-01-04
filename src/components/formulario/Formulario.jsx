import { useState } from "react";
import { Button } from "../Button";
import { ListaOpciones } from "../ListaOpciones";
import "./Formulario.css";
import { Input } from "./Input";

export const Formulario = ({equipos, registrarColaborador}) => {

  const [nombre, setNombre] = useState();
  const [puesto, setPuesto] = useState();
  const [foto, setFoto] = useState();
  const [equipo, setEquipo] = useState();

  const manejarEvento = (e) => {
    e.preventDefault();
    let datosEnviar = {
        nombre,
        puesto,
        foto,
        equipo,
      };
    registrarColaborador(datosEnviar);

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
    </section>
  );
};
