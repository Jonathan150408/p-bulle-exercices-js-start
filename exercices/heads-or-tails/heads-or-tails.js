//@ts-check
export function headsOrTails() {
  //creates a new promise
  return new Promise((resolve) => {
    //waits 1000 miliseconds
    setTimeout(() => {
      //after 1 sec, returns true
      resolve(true);
    }, 1000);
  })
}