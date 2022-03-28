import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import styled from 'styled-components';
import axios from "axios";
import Footer from "./Footer";
let reservas = []
let lugaresReservados =[]


export default function Assentos() {
    const { sessaoId } = useParams();
    const [assentos, setAssentos] = useState({});
    const [nome, setNome] = useState("");
	const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    

    useEffect(() => {
        reservas = []
        lugaresReservados =[]
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(response => {
            const { data } = response;
            setAssentos(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);
    let dia = assentos.day
    let filme = assentos.movie
    let cadeiras = assentos.seats

    function FazerReserva ( event) {
        event.preventDefault();        
    
        const requisicao = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
            ids: reservas,
            name: nome,
            cpf: cpf
        });
        
        requisicao.then(response => {      
            alert("Sua reserva foi realizada com sucesso!");
            navigate("/sucesso",{state: {filme: filme.title, dia: dia.date, hora:assentos.name, assento: lugaresReservados, nome:nome, cpf:cpf }});
        });
          requisicao.catch(err => alert("deu ruim :("));
        }

    return dia != null ?(
        <>
        
            <nav>
                <TituloPagina>Selecione o(s) assento(s)</TituloPagina>
                <Lugares>
                    {cadeiras.map((lugar) => {
                        return lugar.isAvailable ?(<Bolinha lugar={lugar.name} id={lugar.id} reservas={reservas} lugaresReservados={lugaresReservados}/>
                            
                        ):(<BolinhaAmarela>{lugar.name}</BolinhaAmarela>)
                    })}
                </Lugares>
                <StatusLugares>
                    <StatusInfo>
                        <BolinhaVerde></BolinhaVerde>
                        <p>Selecionado</p>
                    </StatusInfo>
                    <StatusInfo>
                        <BolinhaCinza></BolinhaCinza>
                        <p>Disponivel</p>
                    </StatusInfo>
                    <StatusInfo>
                        <BolinhaAmarela></BolinhaAmarela>
                        <p>Indisponivel</p>
                    </StatusInfo>
                </StatusLugares>
                <div >
                    <Formulario onSubmit={FazerReserva}>
                        <label for="nome">Nome do comprador:</label>
                        <input type="text" id="nome" value={nome} onChange={e => setNome(e.target.value)} required></input>
                        <label for="cpf">CPF:</label>
                        <input type="text" id="cpf" value={cpf} onChange={e => setCpf(e.target.value)} required></input>
                        <BotaoGrande type="submit">Reservar assento(s)</BotaoGrande>
                    </Formulario>
                </div>

            </nav>
            <Footer imagem={filme.posterURL} titulo={filme.title} diaSemana={`${dia.weekday} -`} diaData={dia.date}/>
        </>
    ):(
        <p>JEQUITI</p>
    )
    
}


function Bolinha(props){
    
    const [selecionado, setSelecionado] = useState(false);
    return selecionado===false ?(
        <>
            <BolinhaCinza onClick={()=>{
                props.reservas.push(parseInt(props.id))
                props.lugaresReservados.push(`Assento ${props.lugar}`)
                setSelecionado(true)
                }}>{props.lugar}</BolinhaCinza>
        </>
    ):(
        <BolinhaVerde onClick={()=>{
            let index = props.reservas.indexOf(props.id)
            props.reservas.splice(index,1)
            props.lugaresReservados.splice(index,1)
            setSelecionado(false)
            }}>{props.lugar}</BolinhaVerde>
    )
}

const TituloPagina = styled.p`
    margin-top: 68px;
    height: 110px;
    width: 100%;
    font-size: 24px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    color: #293845;
`

const Lugares =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-left: 24px;
    margin-right: 17px;
`
const BolinhaAmarela = styled.div`
height: 26px;
    width: 26px;
    font-size: 11px;
    background-color:#C3CFD9;
    border: 1px solid #808F9D;
    margin-right: 7px;
    margin-bottom: 18px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FBE192;
    border: 1px solid #F7C52B;
`
const StatusLugares = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const StatusInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const BolinhaCinza = styled.div`
    height: 26px;
    width: 26px;
    font-size: 11px;
    background-color:#C3CFD9;
    border: 1px solid #808F9D;
    margin-right: 7px;
    margin-bottom: 18px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const BolinhaVerde = styled.div`
height: 26px;
    width: 26px;
    font-size: 11px;
    margin-right: 7px;
    margin-bottom: 18px;
    border-radius: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #8DD7CF;
    border: 1px solid #1AAE9E;
`
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    margin: 42px 24px;
    input{
        height: 51px;
        margin-bottom: 7px;
        font-size: 18px;
    }

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
    font-size: 20px;`