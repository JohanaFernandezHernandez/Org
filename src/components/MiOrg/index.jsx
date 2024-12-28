import './MiOrg.css';
import img from '../../assets/Img/add.png';
import { useState } from 'react';

export const MiOrg = ({actualizarForm}) => {

return(
<section className="orgSection">
    <h3 className='title'>Mi Organizacion</h3>
    <img src={img} alt="add" onClick={actualizarForm}/>
    
</section>
)
}