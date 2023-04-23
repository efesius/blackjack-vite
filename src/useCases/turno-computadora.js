import { acumularPuntos } from "./acumular-puntos";
import { determinarGanador } from "./determinar-ganador";
import { pedirCarta } from "./pedir-carta";
import { crearCarta } from "./crear-carta";


export const turnoComputadora = (puntosJugadores, deck) => {

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores);
        crearCarta(carta, puntosJugadores.length - 1);

    } while ((puntosJugadores[1] < puntosJugadores[0]) && (puntosJugadores[0] <= 21));

    determinarGanador(puntosJugadores);
}