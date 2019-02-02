const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, // Node Read Stream.
    output: process.stdout, // Node Write Stream
});

const q = [
    'Cual es tu primer nombre? ',
    'Cual es tu primer apellido? ',
    'Cual es tu edad? '
];

const AskQuestion = (rl, question) => {
    return new Promise((resolve, rej) => {
        rl.question(question, answer => {
            resolve(answer);
        });
    });
}

const Ask = async (questions) => {
    let results = [];

    for (let i = 0; i < questions.length; i++) {
        const result = await AskQuestion(rl, questions[i]);
        results.push(result);
    }
    rl.close();

    return results;
}

Ask(q)
    .then(q => {
        console.log(`Hola ${q[0]}${q[1]}, tu edad es la siguiente: ${q[2]}`);
    })