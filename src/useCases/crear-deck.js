import _ from 'underscore'

/**
 * 
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>}
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) {
        throw new Error('tiposDeCarta es obligatorio')
    }
    if (!tiposEspeciales) {
        throw new Error('tiposDeCarta es obligatorio')
    }

    const deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }

    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);;
}