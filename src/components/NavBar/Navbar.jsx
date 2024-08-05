import './NavBar.css';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
            <nav className='menu'>
            <Link to='/home' className='title'>Agronex</Link>
            <div className='button-container'>
                <Link to='/sobre'>Sobre nós</Link>
                <Link to='#'>Suporte</Link>
                <Link to='/' className='login'>Login</Link>
                <Link to='/' className='login'>Cadastro</Link>
            </div>
        </nav>
    );
}

