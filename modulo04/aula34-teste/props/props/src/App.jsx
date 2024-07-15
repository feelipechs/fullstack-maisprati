import Bio from './components/props'

const item = {
  author: "Jaques",
  favoriteBook: "O Hobbit"
}

function App() {
  return (
    <div>
      <Bio props = {item}/>
    </div>
  )
}

export default App