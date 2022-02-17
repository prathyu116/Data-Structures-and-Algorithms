//isSafe function start
function isSafe(bord, row, col) {
    //verticalTop check
	for (let i = 0; i <row; i++) {
		if (bord[i][col] == 1) return false;
	}
	
	//left diagonal check

  for(let i = row , j  = col ; i >= 0 && j >= 0 ; i-- , j--){
        if(bord[i][j] === 1){
            return false
        }
    }
    	//right diagonal check

  for(let i = row , j  = col ; i >= 0 && j < bord.length ; i-- , j++){
        if(bord[i][j] === 1){
            return false
        }
    }
	return true;
}
//isSafe function end

var count=0
function NQueensVariant(bord,row){
    if (row == bord.length) {
		count++;
		return;
	}
	for (let i = 0; i < bord.length; i++) {
	
		if (isSafe(bord, row, i)) {
            bord[row][i]=1
			NQueensVariant(bord, row + 1);
		    bord[row][i]=0

		}
	}
 
   
}

function runProgram(input){
    var input=+input
    const bord = [];
	for (let i = 0; i < input; i++) {
		let bag = []
		for (let j = 0; j < input; j++){
			bag.push(0)
		}
		bord.push(bag);
	}
    var row=0
  NQueensVariant(bord,row)
  console.log(count)
    
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
