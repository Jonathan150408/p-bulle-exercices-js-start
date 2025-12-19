//@ts-check
export function headsOrTails() {
  //creates a new promise
  return new Promise((successCallBack) => {
    //waits 1000 miliseconds
    setTimeout(() => {
      //after 1 sec, returns true
      successCallBack(true);
    }, 1000);
  })
}