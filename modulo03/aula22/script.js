class Task {
    constructor(nome, email, data, servico, valor) {
        this.nome = nome;
        this.email = email;
        this.data = data;
        this.servico = servico;
        this.valor = valor;
    }

    validateData() {
        for (let i in this) {
            if (this[i] === undefined || this[i] === "") {
                return false;
            }
            return true;
        }
    }
}

class Database {

    constructor() {
        const id = localStorage.getItem("id");

        if (id === null) {
            localStorage.setItem("id", 0);
        }
    }

    createTask(task) {
        const id = getNextId();
        localStorage.setItem(id, JSON.stringify(task));
        localStorage.setItem("id", id);
    }
}

const database = new Database();

function getNextId() {
    const nextId = localStorage.getItem("id");
    return parseInt(nextId) + 1;
}

function registerTask() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const data = document.getElementById("data").value;
    const servico = document.getElementById("servico").value;
    const valor = document.getElementById("valor").value;

    const task = new Task(nome, email, data, servico, valor);

    if (task.validateData()) {
        database.createTask(task);
    }
}
