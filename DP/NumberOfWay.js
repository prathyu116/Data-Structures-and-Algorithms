var mem=[]
function runProgram(input){
    var N=+input
       for(var i=0;i<=N;i++){
         mem.push(-1)
     }
    var cur=0
    var ans=numberOfWays(N)
    console.log(ans)
    
}


function numberOfWays(n){
    if(n == 0)
        return  1;
    if(n < 0) {
        return 0
    };
         if (mem[n] != -1)
         return mem[n]
    mem[n]=numberOfWays(n-1)+numberOfWays(n-2)+numberOfWays(n-3)
    return mem[n]
}
/*
Constraints
N <= 50 but in recursion it is 30
*/
