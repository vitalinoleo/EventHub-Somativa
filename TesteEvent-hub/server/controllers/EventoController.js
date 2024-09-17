
const Evento = require('../models/Evento')
// Criar um novo Evento
exports.criarEvento = async (req, res)  => {
    // Cria uma nova instância do modelo 'Evento' com os dados recebidos na requisição
    const evento = new Evento({
        titulo: req.body.titulo,   // Título do Evento
        descricao: req.body.descricao,     // Descricao do evento
    });


    try {
        // Salva o novo evento no banco de dados
        const novoEvento = await evento.save();
        // Retorna o evento criado com status 201 (Criado)
        res.status(201).json(novoEvento);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
}


// Listar todos os eventos
exports.listarEventos = async(req, res) => {
    try {
        // Busca todos os eventos no banco de dados
        const eventos = await Evento.find();
        // Retorna a lista de eventos
        res.json(eventos);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
}


// Buscar um evento por ID
exports.buscarEventoPorId = async (req, res) => {
    try {
        // Busca um evento pelo ID recebido nos parâmetros da requisição
        const evento = await Evento.findById(req.params.id);
        if (evento == null) {
            // Se o evento não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Evento não encontrado' });
        }
        // Retorna o evento encontrado
        res.json(evento);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
}


// Atualizar um evento por ID
exports.atualizarEvento = async (req, res) => {
    try {
        // Busca o evento pelo ID
        const evento = await Evento.findById(req.params.id);
        if (evento == null) {
            // Se o evento não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Evento não encontrado' });
        }


        // Verifica quais campos foram enviados na requisição e os atualiza
        if (req.body.titulo != null) {
            evento.titulo = req.body.titulo;
        }
        if (req.body.descricao != null) {
            evento.descricao = req.body.descricao;
        }

        // Salva o evento atualizado no banco de dados
        const EventoAtualizado = await evento.save();
        // Retorna o evento atualizado
        res.json(EventoAtualizado);
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 400 (Bad Request)
        res.status(400).json({ message: err.message });
    }
}


// Deletar um evento por ID
exports.DeletarEvento = async (req, res) => {
    try {
        // Busca o evento pelo ID
        const evento = await Evento.findById(req.params.id);
        if (evento == null) {
            // Se o evento não for encontrado, retorna status 404 (Não Encontrado)
            return res.status(404).json({ message: 'Evento não encontrado' });
        }


        // Remove o evento do banco de dados
        await evento.deleteOne();
        // Retorna uma mensagem de sucesso
        res.json({ message: 'evento deletado com sucesso' });
    } catch (err) {
        // Em caso de erro, retorna uma mensagem de erro com status 500 (Internal Server Error)
        res.status(500).json({ message: err.message });
    }
}
