import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";

export default function Assentos() {
    const { sessaoId } = useParams();
    const [assentos, setAssentos] = useState({});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(response => {
            const { data } = response;
            console.log(data);
            setAssentos(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);
    let dia = assentos.day
    let filme = assentos.movie
    let cadeiras = assentos.seats
    console.log(dia)
    console.log(filme)
    console.log(cadeiras)

    let lugares = []
    for (let i = 1; i <= 50; i++) {
        lugares.push(i)
    }
    return dia != null ?(
        <>
        
            <nav className="filmes-assentos">
                <p className="titulo-pagina">Selecione o(s) assento(s)</p>
                <div className="lugares">
                    {cadeiras.map((lugar) => (<div className="bolinha">{lugar.name}</div>))}
                </div>
                <div className="status-lugares">
                    <div className="status-info">
                        <div className="bolinha verde"></div>
                        <p>Selecionado</p>
                    </div>
                    <div className="status-info">
                        <div className="bolinha"></div>
                        <p>Disponivel</p>
                    </div>
                    <div className="status-info">
                        <div className="bolinha amarela"></div>
                        <p>Indisponivel</p>
                    </div>
                </div>
                <div >
                    <form className="formulario">
                        <label for="nome">Nome do comprador:</label>
                        <input type="text" id="nome"></input>
                        <label for="cpf">Last name:</label>
                        <input type="text" id="cpf"></input>
                        <Link to="/sucesso"><button className="botao-grande">Reservar assento(s)</button></Link>
                    </form>
                </div>

            </nav>
            <Footer imagem={filme.posterURL} titulo={filme.title} diaSemana={dia.weekday} diaData={dia.date}/>
        </>
    ):(
        <p>JEQUITI</p>
    )
    
}

function Footer(props){
    return(
        <footer className="footer">
                <div className="footer-img">
                    <img src={props.imagem}></img>
                </div>
                <div className="footer-infos">
                    <p>{props.titulo}</p>
                    <p>{props.diaSemana} - {props.diaData}</p>
                </div>
            </footer>
    )
}