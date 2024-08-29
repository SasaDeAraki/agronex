import { useState } from 'react';
import '../LoginPage/LoginPage.css'
import { Link, useNavigate } from 'react-router-dom'
import holder5 from '../../assets/holder5.png'

const CadastroPage = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name !== '' && email !== '' && password !== '') {
            navigate('/home')
        } else {
            alert('Não deixe campos em branco!')
        }
    }

    return(
        <div className='login'>
            <div className='login-container'>
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder='nome'
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder='email'
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder='senha'
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit">Cadastrar</button>
                </form>
                <div className='span-toogle'>
                    <div>
                        <span>Já tem um conta? </span>
                        <Link to='/' className='alternar-login'>Faça login!</Link>
                    </div>
                    <div>
                        <span>Esqueceu a senha? </span>
                        <a href="mailto:larissaqbosso@gmail.com" className='alternar-login'>Entre em contato</a>
                    </div>
                </div>
            </div>
            <div className='login-background-image'>
                <img src={holder5} />
            </div>
        </div>
    )
}

export default CadastroPage