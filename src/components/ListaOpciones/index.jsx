import "./ListaOpciones.css";

export const ListaOpciones = ({ valor, actualizarEquipo , equipos}) => {
  //Método .map

  const manejarCambio = (e) => {
    actualizarEquipo(e.target.value);

  }

  return (
    <div className="lista-opciones">
      <label>Equipos</label>
      <select value={valor} onChange={manejarCambio} >
        <option value="" disabled defaultValue="" >Seleccionar Equipo</option>
        {equipos.map((equipo, index) => (
          <option key={index} value={equipo}>{equipo}</option>
        ))}
      </select>
    </div>
  );
};
