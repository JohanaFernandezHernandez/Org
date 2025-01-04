import { Colaborador } from "../Colaborador";
import "./Equipo.css";

export const Equipo = ({ datos, colaboradores, eliminarColaborador }) => {
  const { titulo, colorPrimario, colorSecundario } = datos;

  const obj = {
    backgroundColor: colorSecundario,
  };

  const estiloTitulo = {
    borderBottom: `4px solid ${colorPrimario}`,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (<Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador} />))}
          </div>
        </section>
      )}
    </>
  );
};
