var items = [];
var n=4
 var top=0,bottom=n-1,left=0,rigth=n-1,count=0;

items.push([1,2,3,4]);
items.push([5,6,7,8]);
items.push([9,10,11,12]);
items.push([13,14,15,16]);
var bag=""
while(count<n*n){
  for(var i=top;i<=bottom;i++){
  bag=bag+items[i][left]+" "
  count++
}
left++
for(var i=left;i<=rigth;i++){
  bag=bag+items[bottom][i]+" "
   count++
}
bottom--
for(var i=bottom;i>=top;i--){
  bag=bag+items[i][rigth]+" "
   count++
}
rigth--
for(var i=rigth;i>=left;i--){
  bag=bag+items[top][i]+" "
   count++
}
top++
}
console.log(bag)


//1 5 9 13 14 15 16 12 8 4 3 2 6 10 11 7       https://replit.com/@PrathyuPrasad/spiral#k.js
//Time Complexity: O(N), where N is the total number of elements in the input matrix. We add every element in the matrix to our final answer.



//for rectangular matrix
 var top=0,bottom=N-1,left=0,rigth=M-1,count=0;


var bag=""
while(count<N*M){
  for(var i=top;i<=bottom && count<N*M ;i++){
  bag=bag+arr[i][left]+" "
  count++
}
left++
for(var i=left;i<=rigth && count<N*M;i++){
  bag=bag+arr[bottom][i]+" "
   count++
}
bottom--
for(var i=bottom;i>=top && count<N*M;i--){
  bag=bag+arr[i][rigth]+" "
   count++
}
rigth--
for(var i=rigth;i>=left && count<N*M;i--){
  bag=bag+arr[top][i]+" "
   count++
}
top++
}
console.log(bag)
  
}













