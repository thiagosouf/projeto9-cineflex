import styled from 'styled-components';

export default function Header() {
    return (
        <HeaderStyle>
            <span>CINEFLEX</span>
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
`