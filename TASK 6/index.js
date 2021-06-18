// constant value of kelvin is 293
const kelvin = 293;
// constant celsius value = kelvin value - 273
const celsius = kelvin - 273;
//equation by using let
let fahrenheit = celsius * (9 / 5) + 32;
//mathematical equation
fahrenheit = Math.floor(fahrenheit);
//printing output
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
