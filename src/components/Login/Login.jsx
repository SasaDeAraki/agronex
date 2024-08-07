import { useState } from 'react';
import './Login.css'
import holder5 from '../../assets/holder5.png'
import { useNavigate } from 'react-router-dom';
import * as bootstrap from 'bootstrap'

const Login = () => {
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    const toggleMode = () => {
        setIsLogin(!isLogin);
        setEmail('');
        setPassword('');
        setName('');
        setConfirmPassword('');
    };

    const [users, setUsers] = useState([
        {
            name: 'usuario',
            email: 'usuario@gmail.com',
            password: 'usuario'
        }
    ]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {
            const user = users.find(user => user.email === email && user.password === password);
            if (!user) {
                alert('Email ou senha incorretos.');
            } else {
                navigate('/home')
            }
        } else {
            // Lógica de cadastro
            const newUser = { name, email, password };
            setUsers([...users, newUser]);
        }
    };

    return (
        <div className='login'>
            <div className='login-container'>
                <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
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
                    <span>
                        {isLogin ? 'Ainda não tem uma conta?' : 'Já tem uma conta?'}
                    </span>
                    <a onClick={toggleMode}>
                        {isLogin ? 'Cadastre-se!' : 'Fazer login'}
                    </a>
                </div>
            </div>
            <div className='login-background-image'>
                <img src={holder5} />
            </div>
        </div>
    );
};

export default Login