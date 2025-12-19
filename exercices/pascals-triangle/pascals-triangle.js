//@ts-check
/** 
 * @param {number} numberofRows 
 */
export const rows = (numberofRows) => {
  let result = []

  for (let i = 0; i < numberofRows; i++){
    //creates an empty row
    result[i] = []
    for (let j = 0; j < numberofRows; j++){
      //first row
      if (i == 0)
        result[i][j] = 1
      
      result[i][j] = result[i - 1][j] + result[i][j];
    }
  }

  return result
};
