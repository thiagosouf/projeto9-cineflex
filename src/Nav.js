import Cartaz from "./Cartaz"

export default function Nav(){
    return(
        <nav className="filmes-cartaz">
            <p className="titulo-pagina">Selecione o filme</p>
            <div className="posters">
                <Cartaz />
            </div>
        </nav>
        
    )
}