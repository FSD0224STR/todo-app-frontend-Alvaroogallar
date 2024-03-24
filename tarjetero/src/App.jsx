
import './App.css'
import { Card } from './Components/card'
import './Components/tareaCreator.css'
import './Components/tarjetas.css'

function App() {
  
  const contenidos = [
    {
      id: 0,
      descripción: "Ir a clases de buceo",
      state: "In progress",
      fecha: "27 de marzo"
    },
    {
      id: 1,
      descripción: "Reparar estantería de la cocina",
      state: "In progress",
      fecha: "2 de abril"
    },
    {
      id: 2,
      descripción: "Organizar romería",
      state: "In progress",
      fecha: "10 de abril"
    }
  ]
  return (
    <>
      <div className='cajaPrincipal'>
      <div className='creador'>
          <h1 className='título'>TODOLIST</h1>
          <h2 className='intro'>NUEVA TAREA</h2>
          <label className='descripción'>Descripción de la tarea <textarea name="" id="" cols="25" rows="4"></textarea> </label>
          <label className='fecha' htmlFor="">Fecha límite: <input className='inputFecha' type="date" name="" id="" /></label> 
          <button className='añadirTarea'>Añadir Tarea</button>
          </div>
          {contenidos.map ((contenido) =>(
          <Card
            key = {contenido.id}
            descripción = {contenido.descripción}
            state = {contenido.state}
            fecha = {contenido.fecha}
          />))}
          
        
      </div>
    </>
  )
}

export default App
