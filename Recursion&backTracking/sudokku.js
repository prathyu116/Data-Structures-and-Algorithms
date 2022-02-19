function isSafe(board, row, col,value) {
    //vertical check
  	for (let i = 0; i < board.length; i++) {
		if (board[i][col] === value) return false;
	}
	
    //horizondal check
  	for (let i = 0; i < board.length; i++) {
		if (board[row][i] === value) return false;
	}
	
	//grid check
	var x = (Math.floor(row / 3)) * 3;
    var y = (Math.floor(col / 3)) * 3;
     for (var i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[x+i][y+j] === value) {
          return false;
        }
      }
     }
     return true


}




function sudokku(board,row,col){

	if (row == 9) {
	    console.log(board)
		return 
	}
	var nextRow=0
	var nextCol=0
	if (col == 8) {
		nextRow = row + 1;
		nextCol = 0;
	}else{
	   nextRow = row;
	   nextCol = col+1; 
	}

	if (board[row][col] != 0) {
		 sudokku(board, nextRow, nextCol);
	}else{
	    for (var i = 1; i <=9; i++) {
		if (isSafe(board,row,col,i)==true){
		    board[row][col]=i
		    sudokku(board, nextRow, nextCol);
		    board[row][col]=0
		}
	}
	}
}

function runProgram(input){
    input = input.trim().split('\n');
	const board = [];
	for (var i = 0; i < input.length; i++) {
		board.push(input[i].trim().split(' ').map(Number));
	}
	var row=0,col=0
	sudokku(board,row,col)

}

//Boiler Plate
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read)
});
