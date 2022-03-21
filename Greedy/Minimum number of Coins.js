let curr=[1, 2, 5, 10, 20,
    50, 100, 500, 1000];
function Minimizenumbercoins(K){
     let ans = [];
   
        for (let i = curr.length-1; i >= 0; i--)
        {
            while (K >= curr[i] && K!=0)
            {
                K =K- curr[i];
                
                ans.push(curr[i]);
            }
        }
   
       console.log(ans.length)
}

//https://www.geeksforgeeks.org/greedy-algorithm-to-find-minimum-number-of-coins/

// Add found denomination to result. Subtract value of found denomination from amount.
// If amount becomes 0, then print result.
// Else repeat steps 3 and 4 for new value of V.
