import './Login.css'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsername('')
    setPassword('')
  }

  return (
    <div className="login">
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <div className="loginSeccion">
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
                <label htmlFor="username">Usuario:</label>
            </div>
            <div className="loginSeccion">
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
                <label htmlFor="password">Contraseña:</label>
            </div>
            <button type="submit">Iniciar sesión</button>
        </form>
        <Link to={'/Login'}>Registrate</Link>
    </div>
  )
}


