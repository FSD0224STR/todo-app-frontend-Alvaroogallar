import { Link } from "react-router-dom"

export function TaskCard (props) {
    return (
        <div className="tarjeta">
            <p className="títuloTarea">{props.title}</p>
            <p className="descripciónTarea">{props.description}</p>
            <p className="estado"> Estado:  <span className="state">{props.status}</span> </p>
            <p className="límite">Fecha límite: <span className="date">{props.dueDate}</span> <img src='' alt="" /></p>
            <div className="botones"> <Link to={`/edit/${props._id}`}><button className="botónTarjeta editar">EDITAR</button></Link>
            <button className="botónTarjeta finalizada" onClick={props.onFinish}>FINALIZADA</button> 
            <button className="botónTarjeta eliminar" onClick={props.onDelete}>ELIMINAR</button></div>
        </div>
    )
}