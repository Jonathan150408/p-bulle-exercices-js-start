//@ts-check
/** 
 * @param {number} numberofRows 
 */
export const rows = (numberofRows) => {
  /**
   * @type {number[][]}
   */
  let result = []

  for (let i = 0; i < numberofRows; i++){
    //creates an empty row
    result[i] = []
    for (let j = 0; j < i + 1; j++){
      //every first and last value of each line
      if (j == 0 || i == j){
        result[i][j] = 1
      }
      //set the value to be the sum of the two above it
      else{
        result[i][j] = result[i - 1][j - 1] + result[i - 1][j];
      }
    }
  }

  return result
};
