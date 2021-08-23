import { useHistory } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import logo from "../assets/images/logo-pokedex.png";
import { useContext } from "react";
import {BiLogOutCircle} from "react-icons/bi"

export default function Header() {
    const history = useHistory()
    const { setToken } = useContext(UserContext);

    async function ClearToken(){
        setToken("")
        localStorage.removeItem('token')
        history.push('/login')        
    }
    return (
        <Container>
            <img src={logo} alt="Logo" />
            <BiLogOutCircle onClick={()=> ClearToken()}/>
        </Container>
    );
}

const Container = styled.div`
    background: #E44141;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    svg{
        font-size: 30px;
        color:white;
        position: absolute;
        right: 5%;
        top:40%;
        cursor: pointer;
    }
`;
