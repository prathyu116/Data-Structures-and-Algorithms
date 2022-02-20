function runProgram(input){
     input = input.trim().split("\n");

let n=+input[0];
for(let i=1;i<=n;i++){
    let num=input[i];
    find(num);
    }
}

function find(num){
   if(num.length==1){
       console.log(num);
       return;
   }
   let sum=0;
   for(let i=0;i<num.length;i++){
       sum+=(Number)(num[i]);
   }
   find(sum.toString());
    
     
}
