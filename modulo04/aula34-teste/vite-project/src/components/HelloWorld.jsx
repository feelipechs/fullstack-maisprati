import classes from './HelloWorld.module.css'

const books = ['O Hobbit', 'Harry Potter', 'Nárnia'];

function HelloWorld() {

    const chosenBook = Math.random() > 0.5 ? books[0] : books[1]

    return (
        <header>
            <h1 className= {classes.HelloWorld}>Hello World, sou o Chagas</h1>
            <p>{chosenBook}</p>
        </header>
    )
}

export default HelloWorld;