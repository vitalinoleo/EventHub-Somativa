const express = require('express');
const router = express.Router();
const EventoController = require('../controllers/EventoController')

// Definindo as rotas e associando aos métodos do controller
router.post('/', EventoController.criarEvento);            // Criar um novo livro
router.get('/', EventoController.listarEventos);           // Listar todos os livros
router.get('/:id', EventoController.buscarEventoPorId);    // Buscar um  evento por ID
router.put('/:id', EventoController.atualizarEvento);    // Atualizar um evento por ID
router.delete('/:id', EventoController.DeletarEvento);     // Deletar um evento por ID

module.exports = router;
