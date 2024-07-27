import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
                <img src="./assets/logo.png" alt="" />
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
                    <input type="checkbox" id="horns" name="horns" />
                    <label for="horns">Horns</label>
                    <p>Novo por aqui? Assine agora.</p>
                </Login>
            </main>
            {/* <input type="checkbox" id="horns" name="horns" />
            <label for="horns">Horns</label> */}
        </Container>
    )
}

export default LoginScreen