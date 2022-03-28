import { Link } from "react-router-dom";
import styled from 'styled-components';
import {useLocation } from "react-router-dom";

export default function Sucesso(props){
    const { state } = useLocation();
    const assentos = state.assento
    return(
        <nav>
            <TituloPaginaSucesso>Pedido feito com sucesso!</TituloPaginaSucesso>
            <div>
                <ConfFilme>
                    <ConfTitulo>Filme e sessão</ConfTitulo>
                    <ConfInfo>{state.filme} {state.dia} {state.hora}</ConfInfo>
                </ConfFilme>
                <ConfIngresso>
                    <ConfTitulo>Ingressos</ConfTitulo>
                    {assentos.map((lugar)=><ConfInfo>{lugar}</ConfInfo>)}
                </ConfIngresso>
                <ConfComprador>
                    <ConfTitulo>Comprador</ConfTitulo>
                    <ConfInfo>Nome: {state.nome}</ConfInfo>
                    <ConfInfo>CPF: {state.cpf}</ConfInfo>
                </ConfComprador>
                <Botao>
                    <Link to="/"><BotaoGrande>Voltar Para Home</BotaoGrande></Link>
                </Botao>
                
            </div>
            
        </nav>
    )
}

const TituloPaginaSucesso = styled.p`
    margin-top: 68px;
    height: 110px;
    width: 100vw;
    font-size: 24px;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #247A6B;
    font-weight: 700;
    display: flex;
    flex-wrap: wrap;
`
const ConfFilme = styled.div`
margin: 25px 0px 50px 28px;
`
const ConfIngresso = styled.div`
margin: 25px 0px 50px 28px;
`
const ConfComprador = styled.div`
margin: 25px 0px 50px 28px;
`
const ConfTitulo = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
`

const ConfInfo = styled.p`
    font-size: 22px;
    font-weight: 400;
`
const Botao = styled.div`
    display: flex;
    justify-content: center;
`
const BotaoGrande = styled.button`
    width: 250px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    color: white;
    font-size: 20px;
`