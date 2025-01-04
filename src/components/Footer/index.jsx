import './Footer.css'
import Facebook from "../../assets/Img/facebook.png"
import twitter from "../../assets/Img/twitter.png"
import Instagram from "../../assets/Img/instagram.png"
import Logo from "../../assets/icono.png"
import Imgfooter from "../../assets/Img/footer.png"

export const Footer = () => {


return(
<footer className='footer' style={{ backgroundImage: `url(${Imgfooter})` }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src={Facebook} alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={twitter} alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={Instagram} alt='instagram' />
            </a>
        </div>
        <img src={Logo} alt='org' />
        <strong>Desarrollado por Johana Fernandez</strong>
    </footer>
)
}