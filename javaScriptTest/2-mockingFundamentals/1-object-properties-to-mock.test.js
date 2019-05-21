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

// No framework (JEST)
// utils.getWinner, provide us a random winner, and we can not test as a properly
//Moking utils:
const originalGetWinner = utils.getWinner;

utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Victor", "Pepe")
it("moking Get Winner", () => 
    expect(winner).toBe("Victor")
)

//at the end, we restore the method getWinner
utils.getWinner = originalGetWinner

