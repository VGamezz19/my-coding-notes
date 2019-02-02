const cp = require('child_process');

function execCommand(command) {
    // cp.exec o cp.execFile
    // puede ser Async o Sync.
    cp.exec(command, (err, stdout, stderr) => {
        if (err) throw err;

        if (stdout) console.log(`Standard out: \n ${stdout}`);

        if (stderr) console.log(`Standard out: \n ${stderr}`);
    })
}


// execCommand('ls');

// El fichero src/script espera un parametro llamado `base`
// por eso lo pasamo de esta forma
execCommand("node ./src/script --base=5");

// Ejecutando esto en la terminal, tambien funcionaria:
//    node ./src/script.js --base=5