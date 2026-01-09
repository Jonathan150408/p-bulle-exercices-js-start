// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  return (kind == "car" || kind == "truck")
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export const chooseVehicle = (option1, option2) => {
  // explications (j'espère que c'est la bonne fonction)
  /*
  1. on crée un tableau avec les 2 options
  2. on le trie -> ordre alphabétique donc l'item n°1 est forcément avant le 2 dans l'alphabet
  3. puisqu'on veut l'item qui est le plus "petit" alphabetiquement, on prend le n°1
  ----
  pourquoi ça plutôt qu'un if-else ?
  1. on peut mettre plus d'options
  2. je trouve plus propre car une seule ligne
   */
  return ([option1, option2].sort())[0] + " is clearly the better choice."
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  if (age > 10)
    return originalPrice / 2
  else if (age >= 3)
    return originalPrice / 10 * 7
  else
    return originalPrice / 5 * 4
}
