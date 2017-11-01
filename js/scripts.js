function Player(gamePiece){
  this.piece = gamePiece
}
var playerOne = new Player("X");
var playerTwo = new Player("O");

function Board(x,y){
  this.xCoordinate = x
  this.yCoordinate = y
}
var board = new Board();

testPlayer.mark(); // returns "X"

var board = new Board();
var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object

testSpace.xCoordinate(); // returns 1
testSpace.yCoordinate(); // returns 2

testSpace.mark(testPlayer);
testSpace.markedBy(); // returns testPlayer or "X"

board.gameOver(); // returns a boolean
