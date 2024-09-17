import React, { useState } from 'react'; // Importa o React e o hook useState
import axios from 'axios'; // Importa a biblioteca axios para fazer requisições HTTP
import { useNavigate } from 'react-router-dom'; // Importa o hook useNavigate para navegação programática


function NovoEvento() {
    // Define os estados para os campos do formulário. Inicialmente, todos os valores são strings vazias.
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');


    // Hook useNavigate é usado para redirecionar programaticamente após o envio do formulário.
    const navigate = useNavigate();


    // Função para adicionar um novo livro
    const adicionarEvento = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário, que é recarregar a página


        // Faz uma requisição POST para a API para adicionar um novo livro com os dados do formulário
        axios.post('http://localhost:8080/eventos', { titulo, descricao })
            .then(() => {
                // Se a requisição for bem-sucedida, navega para a página principal ('/')
                navigate('/');
            })
            .catch(error => console.error('Erro ao adicionar evento:', error)); // Lida com qualquer erro que ocorra durante a requisição
    };


    return (
        <form onSubmit={adicionarEvento}> {/* Define que a função adicionarLivro será chamada quando o formulário for enviado */}
            <h1>Novo Evento</h1> {/* Título da página */}
           
            {/* Campo para o título do Evento */}
            <input
                type="text"
                value={titulo}
                onChange={e => setTitulo(e.target.value)} // Atualiza o estado 'titulo' quando o valor do campo muda
                placeholder="Título"
                required // Torna este campo obrigatório
            />
           
            {/* Campo para a descricao do livro */}
            <input
                type="text"
                value={descricao}
                onChange={e => setDescricao(e.target.value)} // Atualiza o estado 'descricao' quando o valor do campo muda
                placeholder="descricao"
                required // Torna este campo obrigatório
            />
           
            {/* Botão para enviar o formulário */}
            <button type="submit">Adicionar</button>
        </form>
    );
}


export default NovoEvento; // Exporta o componente NovoLivro para que possa ser usado em outras partes da aplicação
