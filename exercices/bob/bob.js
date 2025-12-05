//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let upper = message.toUpperCase();
  message = message.trim();
  //test 1. upper case = basic string 2. finish with a '?' 3. Contains at least 1 letter
  if (upper == message && message[message.length - 1] == "?" && /[A-Z]/.test(upper))
    return "Calm down, I know what I'm doing!";
  //test 1. upper case = basic string 2. Contains at least 1 letter
  else if (upper == message && /[A-Z]/.test(upper))
    return "Whoa, chill out!";
  //test 1. finish with a '?'
  else if (message[message.length - 1] == "?")
    return "Sure.";
  //test 1. message is empty (= silence)
  else if (message == "")
    return "Fine. Be that way!";
  else
    return "Whatever."
};