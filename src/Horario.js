import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react"
import styled from 'styled-components';
import axios from "axios";
import Footer from "./Footer";

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
            <nav>
                <TituloPagina>Selecione o horário</TituloPagina>
                <HorariosStyle>
                    {dias.map(dia => <><Dia>{dia.weekday}</Dia><Botoes>
                    <Link to={`/sessao/${dia.showtimes[0].id}`}><BotaoHora>{dia.showtimes[0].name}</BotaoHora></Link>
                    <Link to={`/sessao/${dia.showtimes[1].id}`}><BotaoHora>{dia.showtimes[1].name}</BotaoHora></Link>
                    </Botoes></>)}
                </HorariosStyle>
            </nav>
            <Footer imagem={horario.posterURL} titulo={horario.title}/>
        </>)
        :
        <p>JEQUITI</p>
}


const TituloPagina = styled.p`
    margin-top: 68px;
    height: 110px;
    width: 100vw;
    font-size: 24px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #293845;
`
const HorariosStyle = styled.div`
margin-bottom: 128px;
    margin-left: 24px;
`

const Dia = styled.p`
    font-size: 20px;
    margin-bottom: 22px;
`

const Botoes = styled.div`
    font-size: 18px;
    margin-bottom: 22px;
`
const BotaoHora = styled.button`
    width: 83px;
    height: 43px;
    margin-right: 8px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    color: #ffffff
`