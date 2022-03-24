import CarregaHorarios from "./CarregaHorarios"
export default function Horario(){
    return(
        <nav className="filmes-horario">
            <p className="titulo-pagina">Selecione o horário</p>
            <CarregaHorarios />
            <CarregaHorarios />
        </nav>
    )
}