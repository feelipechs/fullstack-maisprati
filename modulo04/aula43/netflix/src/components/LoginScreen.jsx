import styled from 'styled-components'

const Container = styled.div`
    background-image: url('./imgs/background.jpg');
    /* background-size: cover;
    background-position: center;
    background-repeat: no-repeat; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`

// const Header = styled.header`

// `

// const Main = styled.main`
    
// `

const Login = styled.div`
    background-color: #000;
    align-items: center;
`


function LoginScreen() {

    return (
        <Container>
            <header>
                <img src="./imgs/logo.png" alt="logo" />
            </header>
            <main>
                <Login>
                    <h2>Entrar</h2>
                    <input type="text" id="" name="" placeholder='Email ou número do celular' />
                    <br />
                    <input type="password" id="" name="" placeholder='Senha' />
                    <br />
                    <button>Entrar</button>
                    <p>OU</p>
                    <button>Usar um código de acesso</button>
                    <p>Esqueceu a senha?</p>
                    <input type="checkbox" id="" name="" />
                    <label htmlFor="">Lembre-se de mim</label>
                    <p>Novo por aqui? <a href="#">Assine Agora</a></p>
                    <p>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba Mais</a></p>
                </Login>
            </main>
            {/* <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Horns</label> */}
        </Container>
    )
}

export default LoginScreen