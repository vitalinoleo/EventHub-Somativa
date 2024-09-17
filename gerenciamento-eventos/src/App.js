import React from 'react'; // Importa a biblioteca React, que é necessária para criar componentes e construir a interface do usuário.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importa componentes do React Router para gerenciar rotas dentro da aplicação.

import ListaEvento from './componentes/ListaEvento'; // Importa o componente que lista todos os eventos.
import NovoEvento from './componentes/NovoEvento'; // Importa o componente que permite adicionar um novo evento.
import EditarEvento from './componentes/EditarEvento'; // Importa o componente que permite editar um evento existente.
import Home from './componentes/Home';
import { Login } from './componentes/Login';

function App() {
    // O Router é o componente que engloba toda a aplicação e habilita o uso de rotas.
    return (
        <Router>
            <div className="App">
                {/* O componente Routes é usado para definir as várias rotas da aplicação */}
                <Routes>
                    {/* Cada Route define um caminho específico e o componente que deve ser renderizado quando esse caminho é acessado */}
                   
                    {/* Rota para a página principal que lista os eventos */}
                    <Route path="/listar" element={<ListaEvento />} />

                    <Route path='/' element={<Home /> } /> 
                   
                    {/* Rota para a página de adição de um novo livro */}
                    <Route path="/novo" element={<NovoEvento />} />
                   
                    {/* Rota para a página de edição de um livro existente; o :id é um parâmetro dinâmico que representa o ID do livro a ser editado */}
                    <Route path="/editar/:id" element={<EditarEvento />} />

                    <Route path='/login' element={<Login /> } />


                </Routes>
            </div>
        </Router>
    );
}

export default App; // Exporta o componente App como padrão para que possa ser importado em outros lugares do projeto.
