export default function Assentos(){
    let lugares = []
    for(let i =1;i<=50;i++){
        lugares.push(i)
    }
    return(
        <nav className="filmes-assentos">
            <p className="titulo-pagina">Selecione o(s) assento(s)</p>
            <div className="lugares">
                {lugares.map((lugar)=>(<div className="bolinha">{lugar}</div>))}
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
                    <button className="botao-grande">Reservar assento(s)</button>
                </form>
            </div>

        </nav>
    )
}
