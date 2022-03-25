import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Nav from "./Nav"
import React from "react"
import Horario from "./Horario"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"


export default function App(){
    
    return(
        <div className="corpo">
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Nav />}></Route>
                    <Route path="/filme/:filmeId" element={<Horario />}></Route>
                    <Route path="/sessao/:sessaoId" element={<Assentos />}></Route>
                    <Route path="/sucesso" element={<Sucesso />}></Route>
                </Routes>
            </BrowserRouter>            
        </div>
    )
}