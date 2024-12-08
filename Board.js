class Board {
    constructor(size, snakes, ladders) {
        this.size = size;               // Total cells on the board
        this.snakes = snakes;           // Array of Snake objects
        this.ladders = ladders;         // Array of Ladder objects
    }

    // Get the final position after encountering a snake or ladder
    getFinalPosition(position) {
        for (let snake of this.snakes) {
            if(snake.start === position) {
                console.log(`Oh no! Bitten by a snake at ${position}, going to ${snake.end}`);
                return snake.end;
            }
        }

        for(let ladder of this.ladders) {
            if(ladder.start === position) {
                console.log(`Yay! Climbed a ladder at ${position}, going to ${ladder.end}`);
                return ladder.end;
            }
        }

        return position;
    }
}

export { Board };