import { Snake } from "./Snake";
import { Game } from "./Game";
import { Ladder } from "./Ladder";
import { Player } from "./Player";
import { Board } from "./Board";
import { Dice } from "./Dice";

const snakes = [
    new Snake(14, 7),
    new Snake(98, 79),
    new Snake(56, 30),
];

const ladders = [
    new Ladder(3, 22),
    new Ladder(15, 44),
    new Ladder(70, 91),
];

const board = new Board(100, snakes, ladders);

const players = [new Player("Mayank"), new Player("Missy")];

const dice = new Dice();

const game = new Game(board, players, dice);
game.start();