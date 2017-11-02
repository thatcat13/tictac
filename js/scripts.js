// function Player(gamePiece){
//   this.piece = gamePiece
// }
// var playerOne = new Player("X");
// var playerTwo = new Player("O");
// // function Board(space)



function Space(x,y,mark,markedBy){
  this.x = x
  this.y = y
  this.mark= "X";
  this.mark=(this.mark === "X") ? "O": "X";
  this.markedBy = Player;mark

}
// var spaceOne = new Space()
// var board = new Board();
//
// testPlayer.mark(); // returns "X"
//
// var board = new Board();
// var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object
//
testSpace.xCoordinate(); // returns 1
testSpace.yCoordinate(); // returns 2
//
// testSpace.mark(testPlayer);
// testSpace.markedBy(); // returns testPlayer or "X"
//
// board.gameOver(); // returns a boolean
//this.value= "X";
//this.value=(this.value === "X") ? "O": "X";
var coordinates = new Array();

$(document).ready(function(){
  //Board Click Function
  var table = document.getElementsByTagName("table")[0];
  var cells = table.getElementsByTagName("td"); //
  for(var i = 0; i < cells.length; i++){
      // Cell Object
      var cell = cells[i];
      // var xCoor  = this.cellIndex +1;
      // var yCoor = this.parentNode.rowIndex +1;
      // Track with onclick
      cell.onclick = function(){
          var xCoor  = this.cellIndex +1;
          var yCoor = this.parentNode.rowIndex +1;
          coordinates.push(new Space(xCoor, yCoor));
          alert("cell: " + xCoor+ " / row: " + yCoor );
          alert(coordinates);
        }
      }
});
