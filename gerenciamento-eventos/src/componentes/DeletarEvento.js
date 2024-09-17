import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const DeletarEvento = ({ isOpen, onClose, eventoId, onDelete }) => {
    if (!isOpen) return null;

    const handleDelete = () => {
        console.log('Deletando evento com ID:', eventoId);
        axios.delete(`http://localhost:8080/eventos/${eventoId}`)
            .then(() => {
                console.log('Evento deletado com sucesso');
                onDelete(eventoId);
                onClose();
            })
            .catch(error => {
                console.error('Erro ao deletar o evento:', error);
                onClose(); // Fechar o modal mesmo em caso de erro
            });
    };

    return ReactDOM.createPortal(
        <div style={overlayStyle}>
            <div style={modalStyle}>
                <h2>Confirmar Exclusão</h2>
                <p>Você tem certeza que deseja deletar este evento?</p>
                <button onClick={handleDelete}>Sim, deletar</button>
                <button onClick={onClose}>Cancelar</button>
            </div>
        </div>,
        document.body
    );
};

// Estilos para o modal e overlay
const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const modalStyle = {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
};

export default DeletarEvento;
