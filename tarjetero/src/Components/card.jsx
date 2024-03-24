

export function Card (props) {
    return (
        <div className="tarjeta">
            <p className="descripciónTarea">{props.descripción}</p>
            <p className="estado"> Estado:  <span className="state">{props.state}</span> </p>
            <p className="límite">Fecha límite: <span className="date">{props.fecha}</span> <img src='' alt="" /></p>
            <p className="botones"><button className="botónTarjeta editar">EDITAR</button>
            <button className="botónTarjeta finalizada">FINALIZADA</button> 
            <button className="botónTarjeta eliminar">ELIMINAR</button></p>
        </div>
    )
}