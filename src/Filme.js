import { Link } from "react-router-dom";

export default function Filme(props){
    console.log("passou aqui")
    return(
        <>
                <Link to="/horario"><img src={props.img} alt={props.nome}></img></Link>
        </>
    )
}