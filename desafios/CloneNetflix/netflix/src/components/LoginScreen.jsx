import styled from 'styled-components'

const Container = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
    background: url('./imgs/background.jpg') no-repeat center / cover;
    /* background-image: url('./imgs/background.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

const Header = styled.header`
    /* display: flex;
    align-items: center;
    justify-content: center; */
    width: 100%;
    /* margin-bottom: 20px; */
`;

const Main = styled.main`
    
`

const Login = styled.div`
    background-color: rgba(0, 0, 0, 0.85);
    padding: 40px;
    border-radius: 5px;
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    width: 20vw;
    max-width: 450px; /* Limita o tamanho máximo da div */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.6);

    #teste {
        width: 100%;
    }

    h1 {
        /* margin-bottom: 20px; */
        /* font-size: 24px; */
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

        /*margin-bottom: 10px;
        border: 1px solid #333;
        border-radius: 5px;
        background: #333;
        color: #fff;
        font-size: 16px;
        outline: none; */
    }

    button {
        border-radius: 5px;
        width: 100%;
        height: 40px;
        margin: 5px;

        background-color: #e50914;
        color: #fff;
        /*border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        margin-bottom: 15px;*/
        transition: background-color 0.2s;

        &:hover {
            background-color: #f40612;
        }
    }

    p {
        /* margin: 10px 0; */
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
        /* margin-right: 5px; */
    }

    label {
        color: #fff;
    }
`;

const Logo = styled.img`
    width: 300px; /* Ajuste o tamanho conforme necessário */
    margin-bottom: 20px;
`

function LoginScreen() {

    return (
        <Container>
            <Header>
                <div id='teste'>
                    <Logo src="./imgs/logo.png" alt="logo" width="250px" />
                </div>
            </Header>
            <Main>
                <Login>
                    <form>
                        <h1>Entrar</h1>
                        <input type="text" id="teste2" name="" placeholder='Email ou número do celular' />
                        {/* <br /> */}
                        <input type="password" id="teste2" name="" placeholder='Senha' />
                        {/* <br /> */}
                        <button>Entrar</button>
                        <p>OU</p>
                        <button>Usar um código de acesso</button>
                        <p>Esqueceu a senha?</p>
                        <br />
                        <input type="checkbox" id="" name="" />
                        <label htmlFor="">Lembre-se de mim</label>
                        <p>Novo por aqui? <a href="#">Assine Agora</a></p>
                        <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba Mais</a></p>
                    </form>
                </Login>
            </Main>
        </Container>
    )
}

export default LoginScreen