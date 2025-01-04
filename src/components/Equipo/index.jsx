import './Equipo.css'

export const Equipo = ({datos}) => {
    const {titulo, colorPrimario , colorSecundario } = datos;

    const obj={
        backgroundColor:colorSecundario 
    }

    const estiloTitulo = {
        borderBottom: `4px solid ${colorPrimario}`

    }

return(
<section className="equipo" style={obj}>
    <h3 style={estiloTitulo}>{titulo}</h3>
    <div className="colaboradores"></div>
</section>
)
}