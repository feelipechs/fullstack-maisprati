// import StdForm from './components/Form'
// import Form2 from './components/Form2'
// import Form3 from './components/Form3'
import { userState } from 'react'
import UserCard from "./components/UserCard"


function App() {
  const [ user, setUser ] = useState({name: 'Gandalf', age: 1000})

  return (
    <>
      {/* <StdForm /> */}
      {/* <Form2 /> */}
      {/* <Form3 /> */}
      <div>
        <UserCard user={user} setUser={setUser}></UserCard>
      </div>
    </>
  )
}

export default App