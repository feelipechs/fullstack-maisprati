import axios from 'axios'

function PutUser() {
    const sendRequest = () => {
        axios.put('https://reqres.in/app/users2')
            .then(response => {
                console.log('Dados do usuário:', response.data)
                alert('Usuário atualizado:' + JSON.stringify(response.data))
            })
            .catch(error => {
                console.log('Erro ao atualizar o usuário:', error)
                alert('Erro ao atualizar os dados do usuário')
            })
    }

    return (
        <button onClick={sendRequest}>Atualizar dados</button>
    )
}

export default PutUser