const call = require("./src/call");

// console.log(call.sync("hola"));

// call.withCallback("victor", call.sync);
(async function() {

    const result = await call.withPromise("Victor with async/await");

    console.log(result);

    await call.withPromise("Victor with then").then(console.log);

    const [victor1, victor2] = await Promise.all([call.withPromise("1-victor-all"), call.withPromise("2-victor-all")])

    console.log(victor1, victor2);
})();