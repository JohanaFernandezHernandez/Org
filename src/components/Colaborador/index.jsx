import "./Colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";

export const Colaborador = ({datos, colorPrimario, eliminarColaborador}) => {

    const {equipo, foto, puesto,nombre, id}= datos;

return(
<div className="colaborador">
    <IoIosCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
    <div className="encabezado" style={{backgroundColor: colorPrimario}}>
        <img src={foto} alt={nombre}/>
    </div>
    <div className="info">
        <h4>{nombre }</h4>
        <h5>{puesto}</h5>

    </div>


</div>
)
}