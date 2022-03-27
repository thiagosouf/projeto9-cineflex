import { Link } from "react-router-dom";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export default function Sucesso(props){
    const { state } = useLocation();
    console.log(state)
    return(
        <nav className="filmes-sucesso">
            <p className="titulo-pagina sucesso">Pedido feito com sucesso!</p>
            <div className="confirmacao">
                <div className="conf-filme">
                    <p className="conf-titulo">Filme e sessão</p>
                    <p className="conf-info">{state.filme} {state.dia} {state.hora}</p>
                </div>
                <div className="conf-ingresso">
                    <p className="conf-titulo">Ingressos</p>
                    <p className="conf-info">{state.assento}</p>
                </div>
                <div className="conf-comprador">
                    <p className="conf-titulo">Comprador</p>
                    <p className="conf-info">Nome: João da Silva Sauro CPF: 123.456.789-10</p>
                </div>
                <div className="botao">
                    <Link to="/"><button className="botao-grande">Voltar Para Home</button></Link>
                </div>
                
            </div>
            
        </nav>
    )
}