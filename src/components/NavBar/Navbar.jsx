import './NavBar.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
            <nav className='menu'>
            <Link to='/home' className='title'>Agronex</Link>
            <div className='button-container'>
                <Link to='/sobre'>Sobre o projeto</Link>
                <Link to='/suporte'>Suporte</Link>
                <Link to='/'>Logout</Link>
            </div>
        </nav>
    );
}