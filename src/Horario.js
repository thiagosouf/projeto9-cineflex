import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";

export default function Horario() {
    const { filmeId } = useParams();
    const [horario, setHorario] = useState({});


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${filmeId}/showtimes`);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            setHorario(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);
    let dias = horario.days
    console.log(dias)
    return dias != null ? (
        <>
            {console.log("entrou aqui")}
            <nav className="filmes-horario">
                <p className="titulo-pagina">Selecione o horário</p>
                <div className="horarios-style">
                    {dias.map(dia => <><p className="dia">{dia.weekday}</p><div className="botoes">
                    <Link to={`/sessao/${dia.showtimes[0].id}`}><button className="botao-hora">{dia.showtimes[0].name}</button></Link>
                    <Link to={`/sessao/${dia.showtimes[1].id}`}><button className="botao-hora">{dia.showtimes[1].name}</button></Link>
                    </div></>)}
                </div>
            </nav>
            <Footer imagem={horario.posterURL} titulo={horario.title}/>
        </>)
        :
        <p>JEQUITI</p>
}


function Footer(props){
    return(
        <>
            <footer className="footer">
                <div className="footer-img">
                    <img src={props.imagem}></img>
                </div>
                <div className="footer-infos">
                    <p>{props.titulo}</p>
                </div>
            </footer>
        </>
    )
}