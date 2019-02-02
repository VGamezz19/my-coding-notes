const greet = require('./src/greet');

greet.emit('clap');

greet.emit('shout', 'Victor');

const callBakcForEmit = (name) => console.log(`${name} this is a clouse`);
greet.emit('call', 'Victor closure', callBakcForEmit);

greet.emit('only-once');
greet.emit('only-once');

