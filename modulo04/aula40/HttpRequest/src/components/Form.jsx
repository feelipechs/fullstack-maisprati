import { useState } from 'react'
import axios from 'axios'

function Form() {
    const [ user, setUser ] = useState({
        name: '',
        email: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target

        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post('https://reqres.in/api/users', user)

            console.log(response)

            alert(`Usuário criado com sucesso! ID ${response}`)
        } catch (error) {
            alert('Erro ao criar usuário')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label></label>Nome
                <input type="text" name='name' value={user.name} onChange={handleChange} />
                <br />
                <label></label>Email
                <input type="text" name='email' value={user.email} onChange={handleChange} />
                <br />
                <button type='submit'>Enviar</button>
            </form>
        </div>
        // <form onSubmit={handleSubmit}>
        //     <label>
        //         Nome:
        //         <input type="text" name='name' value={user.name} onChange={handleChange} />
        //     </label>
        //     <br />
        //     <label>
        //         Profissão:
        //         <input type="text" />
        //     </label>
        //     <br />
        //     <button type='submit'>Enviar</button>
        // </form>
    )
}

export default Form