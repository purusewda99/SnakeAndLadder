class Game {
    constructor(board, players, dice) {
        this.board = board;
        this.players = players;
        this.dice = dice;
        this.isGameOver = false;
    }

    playTurn(player) {
        if(this.isGameOver) return;

        console.log(`${player.name}'s turn.`);
        const diceRoll = this.dice.roll();
        console.log(`${player.name} rolled a ${diceRoll}`);

        let newPosition = player.position + diceRoll;

        // Endure the player doesn't exceed the board size
        if (newPosition > this.board.size) {
            console.log(`${player.name} rolled too high! Staying at position ${player.position}.`);
            return ;
        }

        // Check for snakes or ladders
        newPosition = this.board.getFinalPosition(newPosition);

        console.log(`${player.name} moved from ${player.position} to ${newPosition}.`);
        player.position = newPosition;

        // Check for win condition
        if (newPosition === this.board.size) {
            console.log(`${player.name} has won the game!`);
            this.isGameOver = true;
        }
    }

    start() {
        while (!this.isGameOver) {
            for(let player of this.players) {
                this.playTurn(player);
                if (this.isGameOver)    break;
            }
        }
    }
}

export { Game };