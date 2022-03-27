import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios";

export default function Assentos() {
    const { sessaoId } = useParams();
    const [assentos, setAssentos] = useState({});
    const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    let reservas = []
    let lugaresReservados =[]

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

    function FazerReserva ( event) {
        event.preventDefault();
        console.log(`{
            ids: ${reservas},
            name: "Fulano",
            cpf: "12345678900"
        }`)
        
    
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: reservas,
            name: "Fulano",
            cpf: "12345678900"
        });
        
        requisicao.then(response => {
            console.log(response)
            alert("Foi enviado com sucesso e alegria!");
            navigate("/sucesso",{state: {filme: filme.title, dia: dia.date, hora:assentos.name, assento: lugaresReservados }}); // window.href.location = "/"
          });
          requisicao.catch(err => alert("deu ruim :("));
    }


    return dia != null ?(
        <>
        
            <nav className="filmes-assentos">
                <p className="titulo-pagina">Selecione o(s) assento(s)</p>
                <div className="lugares">
                    {cadeiras.map((lugar) => {
                        return lugar.isAvailable ?(<Bolinha lugar={lugar.name} id={lugar.id} reservas={reservas} lugaresReservados={lugaresReservados}/>
                            
                        ):(<div className="bolinha amarela">{lugar.name}</div>)
                    })}
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
                    <form className="formulario" onSubmit={FazerReserva}>
                        <label for="nome">Nome do comprador:</label>
                        <input type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)}></input>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)}></input>
                        <button type="submit" className="botao-grande">Reservar assento(s)</button>
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

function Bolinha(props){
    const [selecionado, setSelecionado] = useState("bolinha")
    return selecionado==="bolinha" ?(
        <>
            <div onClick={()=>{
                props.reservas.push(parseInt(props.id))
                props.lugaresReservados.push(`Assento ${props.lugar} `)
                console.log(props.reservas)
                console.log(props.lugaresReservados)
                setSelecionado("bolinha verde")
                }} className={selecionado}>{props.lugar}</div>
        </>
    ):(
        <div onClick={()=>{
            let index = props.reservas.indexOf(props.id)
            props.reservas.splice(index,1)
            props.lugaresReservados.splice(index,1)
            console.log(props.reservas)
            console.log(props.lugaresReservados)
            setSelecionado("bolinha")
            }} className={selecionado}>{props.lugar}</div>
    )
}