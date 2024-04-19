    import { useNavigate } from "react-router-dom"
    import '../Components/welcome.css'
export function Welcome () {
    const navigate = useNavigate()

    const onClickButton = () => {
        navigate ('/startPage')
    }

    return (
        <div className="welcome">
        <div className="títuloBienvenido"><h1 className="bienvenido">BIENVENIDO A TO DO LIST </h1> 
        <button className="startingButton" onClick={onClickButton}>Comencemos creando nuestra lista de tareas</button></div>
        </div>
    )
}