// import Filme from "./Filme"
import { Link } from "react-router-dom";
import {useState, useEffect} from "react"
import axios from 'axios';

export default function Cartaz(){
    const [filmes, setFilmes] = useState([]);
    
    useEffect(()=>{
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response)=> {
            const {data} = response;
            setFilmes(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);

    return(
        <>
            {filmes.map(filme=>{
                    const {id, title, posterURL} = filme;
                    return <Link to={`/sessoes/${id}`}><img src={posterURL} alt={title}></img></Link>
                   })
            }
        </>

    )
}