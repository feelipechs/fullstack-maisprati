import { useState } from 'react'

function StdForm() {
    const [ name, setName ] = useState('')

    const handleChange = (event) => {
        setName(event.target.value)
    }

    const handleSubmit = () => {
        event.preventDefault()

        alert(`Olá ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Nome:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default StdForm