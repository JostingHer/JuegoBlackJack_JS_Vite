
/**
 * Funcion devuelve el valor de la carta
 * @param {String} carta Ejemplo: 2H
 * @returns {Number} Ejemplo: 2
 */

export const valorCarta = ( carta ) => {

    if(!carta)
        throw new Error('no hay ninguna carta');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
