/*
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8
o/p
4 8 4 8
3 7 3 7
2 6 2 6          anticlock wisw
1 5 1 5
*/

function rotateBy90(R, matrix){
    //write code here
   
   
    for(var i=R-1;i>=0;i--){
        var bag=""
        for(var j=0;j<R;j++){
            bag=bag+(matrix[j][i])+" "
        }
         console.log(bag)
    }
 
}
---------inplace-------
var rotate = function(matrix) {
    let rows = colums = matrix.length;
    for (let i=0;i<rows;i++) {
        for (let j=i;j<colums;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
         matrix[i]  =  matrix[i]
    }
    

}
matrix = [[1,2,3],[4,5,6],[7,8,9]]
rotate(matrix)
console.log(matrix.reverse())



--------------------------------------CLOCKWISE (transpse+reverse)----------------------------


var rotate = function(matrix) {
    let rows = colums = matrix.length;
    for (let i=0;i<rows;i++) {
        for (let j=i;j<colums;j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
         matrix[i]  =  matrix[i].reverse()
    }

    
    
    
    
    
    
    
    --------------------------rotate by 180deg------------------------------------
    var items = [];

items.push([1,2,3]);
items.push([4,5,6]);
items.push([7,8,9]);
for(var i=items.length-1;i>=0;i--){
  var bag=""

   for(var j=items.length-1;j>=0;j--){
     bag=bag+(items[i][j])+" "
   }
   
console.log(bag.split("").join(""))
}
    
    inplace
    first find transpose+reverse colm+reverserow

