//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (isUpperCase(message) && message.trim()[message.lenght - 1] == "?")
    return "Calm down, I know what I'm doing!";
  else if (isUpperCase(message))
    return "Whoa, chill out!";
  else if (message.trim()[message.lenght - 1] == "?")
    return "Sure.";
  else if (message.trim() == "")
    return "Fine. Be that way!";
  else
    return "Whatever."
};
