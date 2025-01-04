import "./Colaborador.css";
import { IoIosCloseCircle } from "react-icons/io";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export const Colaborador = ({datos, colorPrimario, eliminarColaborador, like}) => {

    const {equipo, foto, puesto,nombre, id, fav, }= datos;

return(
<div className="colaborador">
    <IoIosCloseCircle onClick={() => eliminarColaborador(id)} className="eliminar" />
    <div className="encabezado" style={{backgroundColor: colorPrimario}}>
        <img src={foto} alt={nombre}/>
    </div>
    <div className="info">
        <h4>{nombre }</h4>
        <h5>{puesto}</h5>
        { fav ? <AiFillHeart color="red" onClick={() => like(id)}/> :
        <AiOutlineHeart onClick={() => like(id)}/>}

    </div>


</div>
)
}