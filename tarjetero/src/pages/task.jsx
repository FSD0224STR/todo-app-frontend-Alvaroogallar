import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import '../Components/updateTarea.css'
import '../Components/tarjetas.css'
import { Link } from "react-router-dom";
import { getOneTask, modifyTask } from "../apiService/userApi";
import { useNavigate } from "react-router-dom";

export function Task () {

    const navigate = useNavigate()

    const { id } = useParams()
    
    const [task, setTask] = useState ({
        title: '',
        description:'',
        dueDate: '',
        status: '',
        user: '',
        createdAt: '',
        updatedAt: ''
    })

    const [title, setTitle] = useState ('')
    const [description, setdescription] = useState ('')
    const [dueDate, setDueDate]= useState ('')

    useEffect (() => {
        const showTask = async () => {
            const taskData = await getOneTask(id)
        setTask(taskData)
        }
        showTask()
    }, [id])

    const updateTask = async () => {
        
        const updatedTask = {
            title: title || task.title,
            description: description || task.description,
            dueDate: dueDate || task.dueDate,
        }
        await modifyTask(id, updatedTask)
        navigate('/startPage')
    }

    const backToStart = () => {
        navigate('/startPage')
    } 

    return (
        <div className="cajaModificar">

            <div className="actual"><h2>TAREA ACTUAL</h2>
            <div className="tarjeta">
        <p className="títuloTarea" >{task.title}</p>
        <p className="descripciónTarea" >{task.description}</p>
        <p className="estado"> Estado:  <span className="state">{task.status}</span> </p>
        <p className="límite">Fecha límite: <span className="date" >{task.dueDate}</span> <img src='' alt="" /></p>
        <p className="botones"> 
        <button className="botónTarjeta finalizada" onClick={task.onFinish}>FINALIZADA</button> 
        <button className="botónTarjeta eliminar" onClick={task.onDelete}>ELIMINAR</button></p>
    </div>
    </div>
            <div className="modificada"><h2>TAREA MODIFICADA</h2>
            <div className="tarjeta">
            <label className='títuloTareaNuevaModificar' htmlFor="">Nuevo título de la tarea <textarea name="" id="" cols="30" rows="1"  maxLength= '35' value={title} onChange={e => setTitle(e.currentTarget.value)} ></textarea></label>
            <label className='descripciónModificar'>Nueva descripción de la tarea <textarea name="" id="" cols="25" rows="4" maxLength='135' value={description} onChange={e=> setdescription(e.currentTarget.value)}></textarea> </label>
            <label className='fechaModificar' htmlFor="">Nueva fecha límite: <input className='inputFecha' type="date" name="" id="" value={dueDate} onChange={e => setDueDate(e.currentTarget.value)} /></label> 
            <p className="info">Todo lo que no cambies no se verá afectado</p>
            <p className="botones"> <button className="botónTarjeta editar" onClick={updateTask}>MODIFICAR</button>
            <button className="botónTarjeta eliminar" onClick={backToStart}>VOLVER SIN EDITAR</button>
            </p>
        </div>
        </div>
        
        
    
    </div>
    )
}