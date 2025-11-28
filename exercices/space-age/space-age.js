//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, time) => {
  let multiplicator;
  switch(planet){
    case "mercury":
      multiplicator = 0.2408467;
      break;
    case "venus":
      multiplicator = 0.61519726;
      break;
    case "earth":
      multiplicator = 1;
      break;
    case "mars":
      multiplicator = 1.8808158;
      break;
    case "jupiter" :
      multiplicator = 11.862615;
      break;
    case "saturn":
      multiplicator = 29.447498;
      break;
    case "uranus":
      multiplicator = 84.016846;
      break;
    case "neptune":
      multiplicator = 164.79132;
      break;
    default:
      throw new Error("not a planet");
  }

  return Math.round(time/31557600/multiplicator*100)/100;
};
