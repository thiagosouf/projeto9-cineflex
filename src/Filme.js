import { Link } from "react-router-dom";

export default function Filme(props){
    return(
        <>
                <Link to="/horario"><img src={props.img} alt={props.nome}></img></Link>
        </>
    )
}