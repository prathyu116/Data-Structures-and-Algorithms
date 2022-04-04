//https://replit.com/@PrathyuPrasad/spiral#k.js:1:4

var items = [];
var n=4
 var top=0,bottom=n-1,left=0,rigth=n-1,count=0;

items.push([1,2,3,4]);
items.push([5,6,7,8]);
items.push([9,10,11,12]);
items.push([13,14,15,16]);
var bag=""
while(top < bottom && left < rigth){
var prev=items[top+1][left]

  for(var i=left;i<=rigth;i++){
 
    curr=items[top][i]
    items[top][i]=prev
    prev=curr
}  
/*
mooving 5 to 1 then 1 to 2 , 2 t0 3 , 3 to 4 ...
at last prev variable hold value 4
*/

top++
for(var i=top;i<=bottom;i++){

  
    curr=items[i][rigth]
    items[i][rigth]=prev
    prev=curr
}
rigth--

for(var i=rigth;i>=left;i--){

    curr=items[bottom][i]
    items[bottom][i]=prev
    prev=curr
}
bottom--

for(var i=bottom;i>=top;i--){

    curr=items[i][rigth]
    items[i][rigth]=prev
    prev=curr
}
rigth++
}
console.log(items)
console.log(prev)


