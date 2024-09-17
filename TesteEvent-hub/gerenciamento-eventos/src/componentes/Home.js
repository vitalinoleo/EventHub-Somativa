import React from 'react';
import '../css/Home.css';
import Image from '../IMG/LogoEventHub.png';
import ImageCarousel from '../IMG/fernandoESorocaba.png'
// Mock data for cards
const events = [
    {
        id: 1,
        title: "Evento Especial 1",
        description: "Descrição do evento especial 1.",
        imageUrl: "https://via.placeholder.com/300x180"
    },
    {
        id: 2,
        title: "Evento Especial 2",
        description: "Descrição do evento especial 2.",
        imageUrl: "https://via.placeholder.com/300x180"
    },
    {
        id: 3,
        title: "Evento Especial 3",
        description: "Descrição do evento especial 3.",
        imageUrl: "https://via.placeholder.com/300x180"
    }
];

const Home = () => {
    return (
        <div>
            {/* Navbar */}
            <nav className="navbar">
                <img src={Image} alt="EventHub Logo" />
                <ul>
                    <li><a href="/novo">Criar Evento</a></li>
                    <li><a href="/listar">Eventos</a></li>
                    <li><a href="/Login">Login</a></li>
                    <li><a href="/sobre-nos">Sobre Nós</a></li>
                </ul>
                <div className="search-bar">
                    <input type="text" placeholder="Buscar eventos..." />
                </div>
            </nav>

            {/* Carousel */}
            <div className="carousel">
                <img src={ImageCarousel} alt="Carousel" />

            </div>

            {/* Cards de Eventos Especiais */}
            <div className="cards-container">
                {events.map(event => (
                    <div key={event.id} className="card">
                        <img src={event.imageUrl} alt={event.title} />
                        <div className="card-content">
                            <h2 className="card-title">{event.title}</h2>
                            <p className="card-description">{event.description}</p>
                            <button className="card-button">Saiba Mais</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <footer className="footer">
                <p>EventHub</p>
                <p>Email: contato@eventhub.com</p>
                <p>Telefone: (11) 1234-5678</p>
            </footer>
        </div>
    );
};

export default Home;
