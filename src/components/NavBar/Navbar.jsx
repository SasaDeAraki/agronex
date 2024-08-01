import './NavBar.css';

export default function Menu() {
    return (
            <nav className='menu'>
            <a className='title'>Agronex</a>
            <div className='button-container'>
                <a>Sobre nós</a>
                <a>Suporte</a>
                <a className='login'>Login</a>
                <a className='login'>Cadastro</a>
            </div>
        </nav>
    )
}

