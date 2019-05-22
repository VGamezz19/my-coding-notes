const utils = require('./4-mocking-modules-jest-module');

function thumbWar(player1, player2) {
    const numberToWin = 2
    let player1Wins = 0
    let player2Wins = 0

    while (player1Wins < numberToWin && player2Wins < numberToWin) {
        const winner = utils.getWinner(player1, player2)

        if (winner === player1)
            player1Wins++
        else
            player2Wins++
    }

    return player1Wins > player2Wins ? player1 : player2;
}

// We are mocking Utilities, using de sharing folder __mocks__.
// Si no especificamos una nueva implementacion del mock, por defecto JEST usara el mock por defecto
// Definido en la carpeta __mocks__
// Es obligatorio llamarlo igual que el fichero.
jest.mock('./4-mocking-modules-jest-module')
it("Mocking function JEST", () => {
    const winner = thumbWar("Victor", "Pepe")


    expect(winner).toBe("Victor");
    expect(utils.getWinner).toBeCalledTimes(2)
    expect(utils.getWinner).toBeCalledWith('Victor', 'Pepe')
    //First call, ensure the paramnetters
    expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Victor', 'Pepe')
    //Second call, ensure the parameters
    expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Victor', 'Pepe')

    //clean
    utils.getWinner.mockReset()
})


