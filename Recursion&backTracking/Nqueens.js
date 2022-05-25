https://takeuforward.org/data-structure/n-queen-problem-return-all-distinct-solutions-to-the-n-queens-puzzle/
//isSafe function start
function isSafe(bord, row, col) {
    // checking thazhotttt
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
        // console.log(bord)
		count++;
		return;
	}
	for (let col = 0; col < bord.length; col++) {
		if (isSafe(bord, row, col)) {
            bord[row][col]=1
			NQueensVariant(bord, row + 1);
		    bord[row][col]=0 //backtrackinf

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

Time Complexity: Exponential in nature, since we are trying out all ways. To be precise it goes as O

(N! * N) nearly.

Space Complexity: O(N^2)
