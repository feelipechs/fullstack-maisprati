import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom' 
import Componente1 from "./components/Componente1"
import Componente2 from "./components/Componente2"
import Componente3 from "./components/Componente3"
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' Component={Componente1} />
          <Route path='/componente2' Component={Componente2} />
          <Route path='/componente3' Component={Componente3} /> */}
          <Route path='/' Component={Componente1} />
          <Route path='/componente2' Component={Componente2} />
          <Route path='/componente3' element={<Navigate to='/' />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
