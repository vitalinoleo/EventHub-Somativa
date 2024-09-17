import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import '../css/EditarEvento.css'

const EditarEvento = () => {
    const { id } = useParams(); // Pega o ID do evento da URL
    const [evento, setEvento] = useState({ titulo: '', descricao: '' });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Buscar o evento existente usando o ID
        axios.get(`http://localhost:8080/eventos/${id}`)
            .then(response => {
                setEvento(response.data);
                setLoading(false);
            })
            .catch(err => {
                setError('Erro ao buscar o evento.');
                setLoading(false);
                console.error('Erro ao buscar o evento:', err);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvento(prevEvento => ({
            ...prevEvento,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Atualizar o evento no backend
        axios.put(`http://localhost:8080/eventos/${id}`, evento)
            .then(() => {
                navigate('/'); // Redireciona para a lista de eventos ou qualquer outra página desejada
            })
            .catch(err => {
                setError('Erro ao atualizar o evento.');
                console.error('Erro ao atualizar o evento:', err);
            });
    };

    if (loading) return <p>Carregando...</p>;

    return (
        <div>
            <h1>Editar Evento</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={evento.titulo}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição:</label>
                    <textarea
                        id="descricao"
                        name="descricao"
                        value={evento.descricao}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default EditarEvento;
