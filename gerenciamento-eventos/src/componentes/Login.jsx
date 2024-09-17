import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Realiza a requisição para o servidor
        axios.post('http://localhost:8080/login', { username, password })
            .then(response => {
                // Supondo que o servidor retorne um token ou algo similar
                localStorage.setItem('token', response.data.token);
                navigate('/dashboard'); // Redireciona para a página de dashboard ou qualquer outra página após o login
            })
            .catch(err => {
                setError('Falha no login. Verifique suas credenciais e tente novamente.');
                console.error('Erro ao realizar login:', err);
            });
    };

    return (
        <>
            <h1>Formulário para Fazer Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">eMail:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Entrar</button>
            </form>
        </>
    );
};
