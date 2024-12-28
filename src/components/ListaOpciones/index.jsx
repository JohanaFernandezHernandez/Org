import "./ListaOpciones.css";

export const ListaOpciones = ({ valor, actualizarEquipo }) => {
  //Método .map
  const equipos = [
    "Programación",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Innovación y  Gestión",
    "Móvil",
  ];

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
