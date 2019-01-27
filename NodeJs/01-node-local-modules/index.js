/**
 * *************
 * Comience aqui
 * *************
 */

const math = require("./math");
const greet = require("./greetings");
const hello = require("./greetings/hello");

// Execute this code with F5
console.log(math.add(4,5));
console.log(math.divide(4,5));
console.log(math.subtract(4,5));
console.log(math.multiply(4,5));

console.log(greet.greet("Victor"));
console.log(hello.sayHello("Victor Gomez"));