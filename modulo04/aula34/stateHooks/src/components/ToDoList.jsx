import { useState } from 'react'

function ToDoList() {
    const [toDos, setTodos] = useState([])
    const [inputValue, setInputValue] = useState('')

    const addTodo = () => {
        setTodos([...toDos, inputValue])
        setInputValue('')

        return (
            <div>
                <input type="text" onChange={(e) => setInputValue(e.target.event)} />
                <button onclick = {addTodo}>Adicionar Tarefa</button>

                <ul>
                    {toDos.map((todo, index) => (
                        <li key = {index}>{todo}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ToDoList