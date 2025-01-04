import { Colaborador } from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
import "./Equipo.css";

export const Equipo = ({ datos, colaboradores, eliminarColaborador, actualizarColor, like }) => {
  const { titulo, colorPrimario, colorSecundario, id } = datos;

  const obj = {
    backgroundColor: hexToRgba(colorPrimario, 0.6),
  };



  const estiloTitulo = {
    borderBottom: `4px solid ${colorPrimario}`,
  };

  return (
    <>
      {colaboradores.length > 0 && (
        <section className="equipo" style={obj}>
          <h3 style={estiloTitulo}>{titulo}</h3>
          <input
            type="color"
            className="input-color"
            value={colorPrimario}
            onChange={(e) => {
              actualizarColor(e.target.value, id);
            }}
          
          />
          <div className="colaboradores">
            {colaboradores.map((colaborador, index) => (<Colaborador datos={colaborador} key={index} colorPrimario={colorPrimario} eliminarColaborador={eliminarColaborador}  like={like}/>))}
          </div>
        </section>
      )}
    </>
  );
};
