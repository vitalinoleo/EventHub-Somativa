const express = require('express');
const bodyParser = require('body-parser')
const EventoRoutes = require( './routes/EventoRoutes');
require('dotenv').config();
const cors = require('cors');
require( './config/database'); // Conectando ao banco de dados


const app = express();


// Middlewares
app.use(bodyParser.json());
app.use(cors());


// Rotas
app.use('/eventos', EventoRoutes);


module.exports = app; 
