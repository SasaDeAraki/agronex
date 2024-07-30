import './NavBar.css'

const Menu = () => {
    return (
        <header className='menu'>
            <h2>AgroNex</h2>
            <div className='button-container'>
                <button>Sobre nós</button>
                <button>Suporte</button>
                <button className='login'>Login</button>
                <button className='login'>Cadastro</button>
            </div>
        </header>
    )
}

export default Menu