const fs = require('fs'); // Modulo nativo de Node, no hace falta instalarlo.
const ops = require('./src/fileops');
const URL = `${__dirname}/resources`;
const FROM = `number.txt`;
const NEW = `numberNew.txt`;
const FORMAT = 'utf8';
let incrementedValues = [];

// Async
fs.readFile(`${URL}/${FROM}`, FORMAT, (err, text) => {
    if (err) throw err;

    const numbers = text.split("\n").map(Number);

    incrementedValues = ops.incrementValues(numbers);

    //Async
    fs.writeFile(`${URL}/${NEW}`, incrementedValues.join("\n"), (err, result) => {
        if (err) throw err;
    
        console.log(result)
    })
});
