import { useEffect, useState } from 'react'

import '../Components/tarjetas.css'
import '../Components/beginning.css'
import { addTask, getAllTasks, removeTask, terminateTask } from '../apiService/userApi'
import { TaskCard } from '../Components/card'

export function Starting () {
    const [tasks, setTasks] = useState ([])
const [title, setTitle] = useState ('')
const [description, setdescription] = useState ('')
const [dueDate, setDueDate]= useState ('')
const [dummy, refresh ] = useState(false)

const getTasks = async () => {
const tasks = await getAllTasks();
console.log ('respuesta de getAllTasks:', tasks)
setTasks(tasks);
}

const newTask = async () => {
    await addTask ({title, description, dueDate })
    setTitle('')
    setdescription('')
    setDueDate ('')
    refresh(!dummy)
} 

const deleteTask = async (idToDelete) => {
await removeTask(idToDelete)
refresh(!dummy)
}

const finishTask = async (idToFinish) => {
await terminateTask(idToFinish)
refresh(!dummy)
}

useEffect ( () => {
    getTasks ()
    } , [dummy] )

return (
    <>
    <div className='cajaPrincipal'>
    <div className='creador' >
        
        <h1 className='título'>TO DO LIST</h1>
        
        <label className='títuloTareaNueva' htmlFor="">Título de la tarea <textarea name="" id="" cols="30" rows="1"  maxLength= '35' value={title} onChange={e => setTitle(e.currentTarget.value)} ></textarea></label>
        <label className='descripción'>Descripción de la tarea <textarea name="" id="" cols="25" rows="4" maxLength='135' value={description} onChange={e=> setdescription(e.currentTarget.value)}></textarea> </label>
        <label className='fecha' htmlFor="">Fecha límite: <input className='inputFecha' type="date" name="" id="" value={dueDate} onChange={e => setDueDate(e.currentTarget.value)} /></label> 
        <button className='añadirTarea' onClick={newTask}>Añadir Tarea</button>
        </div>
        <div className='tarjetero'>
        {tasks.map(task => <TaskCard key= {task._id} {...task} onDelete = {() => deleteTask(task._id)} onFinish = {() => finishTask(task._id)} ></TaskCard>)}  
        </div>
    </div>
    </>
)
}

