import React from "react"
import Cartaz from "./Cartaz"

export default function Nav(){
    // const [tela,setTela] = React.useState(<Tela1 />)
    return(
        <nav className="filmes-cartaz">
            <p className="titulo-pagina">Selecione o filme</p>
            <div className="posters">
                <Cartaz />
            </div>
        </nav>
        
    )
}