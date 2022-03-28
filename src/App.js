import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./Header"
import Nav from "./Nav"
import React from "react"
import Horario from "./Horario"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"


export default function App(){
    
    return(
        <Corpo>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Nav />}></Route>
                    <Route path="/sessoes/:filmeId" element={<Horario />}></Route>
                    <Route path="/assentos/:sessaoId" element={<Assentos />}></Route>
                    <Route path="/sucesso" element={<Sucesso />}></Route>
                </Routes>
            </BrowserRouter>            
        </Corpo>
    )
}

const Corpo = styled.div`
    font-family: 'Roboto', sans-serif;
    position:absolute;
`