var memo=[]

function fib(n){
    if (n == 0)
        return 0
    if (n == 1)
        return 1
    
    if (memo[n] != -1)
        return memo[n]
    
    memo[n] = fib(n-1) + fib(n-2)
    return memo[n]

}

/*

Now for fib(n) we need to check if memo[n] is equal to -1 or not. If it is -1 then we can say that the problem was not solved before and we will solve it. 
But if it is other than -1 then we can say that the problem was solved before. So we don’t have to solve it again. 
We will just return it.
*/
