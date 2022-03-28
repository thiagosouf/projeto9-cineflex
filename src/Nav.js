import Cartaz from "./Cartaz"
import styled from 'styled-components';
export default function Nav(){
    
    return(
        <FilmesCartaz>
            <TituloPagina>Selecione o filme</TituloPagina>
            <Posters>
                <Cartaz />
            </Posters>
        </FilmesCartaz>
        
    )
}

const FilmesCartaz = styled.nav`
img{
    width: 145px;
    height: 209px;
    background-color: #ffffff;
    padding:8px;
    border-radius: 5px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin-bottom: 11px;
}
`
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

const Posters = styled.div`
    margin-bottom: 68px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`