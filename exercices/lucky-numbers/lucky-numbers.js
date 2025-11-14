// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  let strarray1 = "";
  array1.forEach(element => {
    strarray1 += element;
  });
  let strarray2 = "";
  array2.forEach(element => {
    strarray2 += element;
  });

  let result = parseInt(strarray1) + parseInt(strarray2);
  return result;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  let part1 = value.toString().slice(0, value.toString().length/2);
  let part2 = value.toString().slice(value.toString().length/2, value.toString().length);
  for (let i = 0; i < part1.length; i++){
    if (part1[i] != part2[part2.length - i - 1]){
      return false;
    }
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input == "" || input == null || input == undefined)
    return "Required field";
  else if(Number.isNaN(Number(input)) || Number(input) == 0 || Number(input) == null)
    return "Must be a number besides 0";
  else
    return "";
}
