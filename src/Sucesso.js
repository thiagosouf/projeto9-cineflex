export default function Sucesso(){
    return(
        <nav className="filmes-sucesso">
            <p className="titulo-pagina sucesso">Pedido feito com sucesso!</p>
            <div className="confirmacao">
                <div className="conf-filme">
                    <p className="conf-titulo">Filme e sessão</p>
                    <p className="conf-info">Enola Holmes 24/06/2021 15:00</p>
                </div>
                <div className="conf-ingresso">
                    <p className="conf-titulo">Ingressos</p>
                    <p className="conf-info">Assento 15 Assento 16</p>
                </div>
                <div className="conf-comprador">
                    <p className="conf-titulo">Comprador</p>
                    <p className="conf-info">Nome: João da Silva Sauro CPF: 123.456.789-10</p>
                </div>
                <div className="botao">
                    <button className="botao-grande">Voltar Para Home</button>
                </div>
                
            </div>
            
        </nav>
    )
}