import _ from 'underscore'
import {
    crearDeck,
    pedirCarta,
    turnoComputadora,
    acumularPuntos,
    crearCarta
} from './useCases/'


let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    puntosHTML = document.querySelectorAll('small');


// Esta función inicializa el juego 
const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerHTML = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;

}

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta(deck);
    acumularPuntos(carta, 0, puntosJugadores);
    crearCarta(carta, 0);

    if (puntosJugadores[0] > 21) {
        console.warn('Lo siento mucho, perdiste');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deck);

    } else if (puntosJugadores[0] === 21) {
        console.warn('21, genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores, deck);
    }

});


btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores, deck);
});

btnNuevo.addEventListener('click', () => {

    inicializarJuego();

});
