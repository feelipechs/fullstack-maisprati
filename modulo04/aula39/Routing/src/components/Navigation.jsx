import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Componente2">Sobre</Link></li>
                <li><Link to="/Componente3">Contato</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation