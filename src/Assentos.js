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


    let lugares = []
    for (let i = 1; i <= 50; i++) {
        lugares.push(i)
    }
    return (
        <>
            <nav className="filmes-assentos">
                <p className="titulo-pagina">Selecione o(s) assento(s)</p>
                <div className="lugares">
                    {lugares.map((lugar) => (<div className="bolinha">{lugar}</div>))}
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
            <footer className="footer">
                <div className="footer-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzJmMTEtM2I2MC00M2UzLTg1NzktOWMzOTVmNzg2MTIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"></img>
                </div>
                <div className="footer-infos">
                    <p>Batman</p>
                    <p>Quinta-feira - 24/06/2021</p>
                </div>
            </footer>
        </>
    )
}
