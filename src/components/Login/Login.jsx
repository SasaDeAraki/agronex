import './Login.css'

const Login = () => {
    return(
        <div className='login'>
            <div className='login-container'>
                <h2>Login</h2>
                <form>
                    <input type='email' placeholder='email' />
                    <input type='password' placeholder='senha' />
                    <button type='submit'>Login</button>
                </form>
                <span>Ainda não se cadastrou? <a href='#'>Cadastre-se</a>!</span>
            </div>

            <div className='login-background-image'>
                <img src='#' alt='Imagem de fundo'></img>
            </div>
        </div>
    )
}

export default Login