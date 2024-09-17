import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/ListaEvento.css';
import DeletarEvento from './DeletarEvento';

function ListaEvento() {
    const [eventos, setEventos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [eventoIdParaDeletar, setEventoIdParaDeletar] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/eventos')
            .then(response => setEventos(response.data))
            .catch(error => console.error('Erro ao buscar os eventos:', error));
    }, []);

    const handleDelete = (id) => {
        console.log('Evento deletado:', id);
        setEventos(eventos.filter(evento => evento._id !== id));
    };

    const deletarEvento = (id) => {
        console.log('Preparando para deletar evento com ID:', id);
        setEventoIdParaDeletar(id);
        setShowModal(true);
    };

    return (
        <div>
            <h1>Lista de eventos</h1>
            <Link to="/novo">Adicionar Novo evento</Link>
            <ul>
                {eventos.map(evento => (
                    <li key={evento._id}>
                        {evento.titulo} - {evento.descricao}
                        <Link to={`/editar/${evento._id}`}>Editar</Link>
                        <button onClick={() => deletarEvento(evento._id)}>Deletar</button>
                    </li>
                ))}
            </ul>
            <DeletarEvento
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                eventoId={eventoIdParaDeletar}
                onDelete={handleDelete}
            />
        </div>
    );
}

export default ListaEvento;
