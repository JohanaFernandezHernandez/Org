import { useState } from 'react'
import {v4 as uuid } from 'uuid';
import './App.css'
import { Header } from './components/header/Header'
import { Formulario } from './components/formulario/Formulario'
import { MiOrg } from './components/MiOrg'
import { Equipo } from './components/Equipo'
import { Footer } from './components/Footer'

function App() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [colaboradores, setColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Harland Lohora",
    puesto: "Instructor",
    fav: true

  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    fav: true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto: "https://github.com/christianpva.png",
    nombre: "Christian Velasco",
    puesto: "Head de Alura e Instructor",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    nombre: "Jose Gonzalez",
    puesto: "Dev FullStack",
    fav: false
  }]);
  const [equipos, setEquipos] = useState( [
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario:"#FFEEDF"
    }
  ])

  const actualizarForm = () => {
    setMostrarFormulario(!mostrarFormulario);
  }

  //Registrar colaborador 
  const registrarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  };

  //Eliminar Colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(nuevosColaboradores);

  };

  //Actualizar color de equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id) {
        equipo.colorPrimario = color
      }
      return equipo;
    });
    setEquipos(equiposActualizados);
   
  }

  //Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo);
    setEquipos([...equipos, {...nuevoEquipo, id: uuid()}]);
  }

  //Funcion Favoritos
  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id) {
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })

    setColaboradores(colaboradoresActualizados);

  }




  return (
    <div className='App'>
    <Header/>  
    {
    mostrarFormulario &&
    <Formulario 
    equipos = {equipos.map((equipo) => equipo.titulo)}
    registrarColaborador= {registrarColaborador}
    crearEquipo={crearEquipo}/> 
    }


    <MiOrg actualizarForm= {actualizarForm}/>
    {
      equipos.map((equipo) => <Equipo 
      datos= {equipo} 
      key={equipo.titulo}
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />)
    }

    <Footer/>
    </div>
  )
}

export default App
