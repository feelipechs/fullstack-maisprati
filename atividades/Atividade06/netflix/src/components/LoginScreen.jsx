// import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const BackgroundImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('./imgs/background.jpg') no-repeat center / cover;
    filter: brightness(50%);
    z-index: -1;
`;

const Header = styled.header`
    width: 100%;
`;

const Main = styled.main`
`;

const Login = styled.div`
    background-color: rgba(0, 0, 0, 0.85);
    padding: 40px;
    border-radius: 5px;
    width: 20vw;
    max-width: 450px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);

    #teste {
        width: 100%;
    }

    h1 {
        font-weight: 700;
        color: #fff;
        margin: 5px;
    }

    #teste2 {
        background-color: #0A14157A;
        color: #fff;
        border-radius: 5px;
        width: 100%;
        height: 40px;
        margin: 5px;
    }

    button {
        border-radius: 5px;
        width: 100%;
        height: 40px;
        margin: 5px;

        background-color: #e50914;
        color: #fff;
        transition: background-color 0.2s;

        &:hover {
            background-color: #f40612;
        }
    }

    p {
        color: #fff;
        text-align: center;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-weight: 700;
    }

    a:hover {
        text-decoration: underline;
    }

    input[type="checkbox"] {
        margin: 5px;
    }

    label {
        color: #fff;
    }
`;

const Logo = styled.img`
    width: 300px;
    margin-bottom: 20px;
`;

function LoginScreen() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/movies');
    };

    return (
        <Container>
            <BackgroundImage />
            <Header>
                <div id='teste'>
                    <Logo src="./imgs/logo.png" alt="logo" width="250px" />
                </div>
            </Header>
            <Main>
                <Login>
                    <form>
                        <h1>Entrar</h1>
                        <input type="text" id="teste2" placeholder='Email ou número do celular' />
                        <input type="password" id="teste2" placeholder='Senha' />
                        <button onClick={handleLogin}>Entrar</button>
                        <p>OU</p>
                        <button>Usar um código de acesso</button>
                        <p>Esqueceu a senha?</p>
                        <input type="checkbox" id="" name="" />
                        <label htmlFor="">Lembre-se de mim</label>
                        <p>Novo por aqui? <a href="#">Assine Agora</a></p>
                        <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba Mais</a></p>
                    </form>
                </Login>
            </Main>
        </Container>
    );
}

export default LoginScreen;
