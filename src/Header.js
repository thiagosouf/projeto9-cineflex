import styled from 'styled-components';
import {useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <HeaderStyle>
            <div onClick={()=>navigate("/")}><span>CINEFLEX</span></div>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    height: 67px;
    width: 100vw;
    background-color: #C3CFD9;
    color:#E8833A;
    font-size: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
`