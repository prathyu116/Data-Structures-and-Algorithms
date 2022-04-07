/*
https://oj.masaischool.com/contest/2982/problem/04
Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time. You have to count, how many possible ways Sandhya can run up to the stairs.


*/




function numberOfWays(n){
    if(n == 0)
        return  1;
    if(n < 0) {
        return 0
    };
    
    return numberOfWays(n-1)+numberOfWays(n-2)+numberOfWays(n-3);
}
