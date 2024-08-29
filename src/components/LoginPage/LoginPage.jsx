import { useState } from 'react';
import './LoginPage.css'
import holder5 from '../../assets/holder5.png'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const [users, setUsers] = useState([
        {
            name: 'usuario',
            email: 'usuario@gmail.com',
            password: 'usuario'
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            alert('Email ou senha incorretos.');
        } else {
            navigate('/home')
        }
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    {!isLogin && (
                        <input
                            type="text"
                            placeholder='nome'
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
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
                    <button type="submit">{isLogin ? 'Entrar' : 'Cadastrar'}</button>
                </form>
                <div className='span-toogle'>
                    <div>
                        <span>Ainda não tem uma conta? </span>
                        <Link to='/cadastro' className='alternar-login'>Cadastre-se!</Link>
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
    );
};

export default LoginPage