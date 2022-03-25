import { Link } from "react-router-dom";

export default function CarregaHorarios(){
    return(
        <div className="horarios">
            <p className="dia">Quinta-feira - 24/06/2021</p>
            <div className="botoes">
                <Link to="/assentos"><button className="botao-hora">15:00</button></Link>
                <Link to="/assentos"><button className="botao-hora">19:00</button></Link>
            </div>
        </div>
    )
}