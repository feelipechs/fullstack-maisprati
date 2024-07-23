import axios from 'axios'

function DeleteUser() {
    const sendRequest = () => {
        axios.delete('https://reqres.in/api/users/2')
            .then(response => {
                console.log('Dados do usuário:', response.data)
                alert('Usuário deletado:' + JSON.stringify(response.data))
            })
            .catch(error => {
                console.log('Erro ao deletar o usuário:', error)
                alert('Erro ao deletar os dados do usuário')
            })
    }

    return (
        <button onClick={sendRequest}>Deletar dados</button>
    )
}

export default DeleteUser