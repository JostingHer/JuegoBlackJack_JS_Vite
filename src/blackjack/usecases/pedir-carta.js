// Esta función me permite tomar una carta


/**
 * Funcion de pedir carta extrayendo del deck en forma de array 
 * @param {Array<String>} deck Ejemplo: [ "2H", "AH", "6S", "8C", "2C", "QC", "AD", "7S", "KC", "5H", … ]
 * @returns {String} devuelve una carta:  KD
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}