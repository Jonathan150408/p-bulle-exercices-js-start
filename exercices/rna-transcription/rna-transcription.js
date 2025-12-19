//@ts-check

/**
 * @param {[string]} DNA
 * @returns {string}
 */
export const toRna = (DNA) => {
  let result = ""
  for (let i = 0; i < DNA.length; i++){
    switch (DNA[i]){
    case 'G':
      result += 'C'
      break
    case 'C':
      result += 'G'
      break
    case 'T':
      result += 'A'
      break
    case 'A':
      result += 'U'
      break
    }
  }
  return result
};
