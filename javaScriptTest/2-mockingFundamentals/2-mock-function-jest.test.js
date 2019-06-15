const assert = require('assert')
const utils = {
    getWinner(player1, player2) {
        const winningNumber = Math.random()
        return winningNumber < 1 / 3 ? player1 : winningNumber < 2/3 ? player2 : null 
    }
}


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

it("Mocking function JEST", () => {
    const originalGetWinner = utils.getWinner;
    // Nos interesa mockear la funcion, ya que podemos estar mokeandola, pero que este mal implementada en el codigo.
    // Por ejemplo, que estemos mokeando cons 2 parametros, pero en la implementacion, solo estemos usando 1.
    utils.getWinner = jest.fn((p1, p2) => p1);

    const winner = thumbWar("Victor", "Pepe")

    expect(winner).toBe("Victor");
    expect(utils.getWinner).toHaveBeenCalledTimes(2)
    expect(utils.getWinner).toBeCalledWith('Victor', 'Pepe')
    //First call, ensure the paramnetters
    expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Victor', 'Pepe')
    //Second call, ensure the parameters
    expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Victor', 'Pepe')
    //clean
    utils.getWinner = originalGetWinner
})


