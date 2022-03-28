import styled from 'styled-components';

export default function Footer(props) {
    return (
        <FooterStyle>
            <FooterImg>
                <img src={props.imagem}></img>
            </FooterImg>
            <FooterInfos>
                <p>{props.titulo}</p>
                <p>{props.diaSemana} {props.diaData}</p>
            </FooterInfos>
        </FooterStyle>
    )
}

const FooterStyle = styled.div`
    position: fixed;
    bottom: 0px;
    height: 117px;
    width: 100vw;
    font-size: 26px;
    display: flex;
    justify-content: left;
    align-items: center;
    background-color: #DFE6ED;   
`
const FooterImg = styled.div`
    img{
        height: 89px;
        width: 64px;
        margin-left: 10px;
        background-color: #ffffff;
        padding: 8px;
        border-radius: 3px;
    }
`

const FooterInfos = styled.div`
    margin-left: 14px;
    font-size: 26px;
`