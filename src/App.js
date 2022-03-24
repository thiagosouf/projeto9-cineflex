import Header from "./Header"
import Nav from "./Nav"
import React from "react"
import Horario from "./Horario"
import Assentos from "./Assentos"
import Sucesso from "./Sucesso"

export default function App(){
    
    return(
        <div className="corpo">
            <Header/>
            {/* <Nav /> */}
            {/* <Horario /> */}
            {/* <Assentos /> */}
            <Sucesso />
            
            {/* <footer className="footer">
                <div className="footer-img">
                    <img src="https://m.media-amazon.com/images/M/MV5BZTY5MzJmMTEtM2I2MC00M2UzLTg1NzktOWMzOTVmNzg2MTIxXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg"></img>
                </div>
                <div className="footer-infos">
                    <p>Batman</p>
                    <p>Quinta-feira - 24/06/2021</p>
                </div>
            </footer> */}
        </div>
    )
}