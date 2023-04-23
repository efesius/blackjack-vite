import { valorCarta } from "./valor-carta";
const puntosHTML = document.querySelectorAll('small');
export const acumularPuntos = (carta, turno, puntosJugadores) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}