//Enter code here
function runProgram(input){
    var input = input.trim().split(" ").map(Number);
    let [x,n]= input;
    console.log(sum(x,n,1));
    
}

function sum(x,n,num){
   let value = x-Math.pow(num,n);
   if(value==0)
    return 1;
if(value<0){
    return 0;
    }
return sum(value,n,num+1)+sum(x,n,num+1);
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
