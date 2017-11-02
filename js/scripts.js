function Player(mark){
  this.mark = mark;
  this.mark=(this.mark === "X") ? "O": "X";
}
var playerOne = new Player("X");
var playerTwo = new Player("O");
// function Board(space)



function Space(x,y,value){
  this.x = x
  this.y = y
  this.value= value;
}
// var spaceOne = new Space()
// var board = new Board();
//
// testPlayer.mark(); // returns "X"
//
// var board = new Board();
// var testSpace = board.find(1, 2); // board.find(1,2) returns a Space object
// //
// testSpace.xCoordinate();
//  // returns 1
// testSpace.yCoordinate();
 // returns 2
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
  var mark = "X"
  var table = document.getElementsByTagName("table")[0];
  var cells = table.getElementsByTagName("td"); //
    for(var i = 0; i < cells.length; i++){
      // Cell Object
      var cell = cells[i];
      // Track with onclick
      cell.onclick = function(){
        if ($(this).text() === "") {
          $(this).text(mark);
          if (mark === "X"){
            mark = "O"
          }
          else {
            mark = "X"
          };
        };
        var xCoor  = this.cellIndex +1;
        var yCoor = this.parentNode.rowIndex +1;
        var cellValue = $(this).text();
        coordinates.push(new Space(xCoor, yCoor, cellValue));
        console.log(coordinates);
        // alert("cell: " + xCoor+ " / row: " + yCoor );
      };
    // alert(playerOne.mark);

  }
});
