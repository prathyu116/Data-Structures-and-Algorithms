}
function generate_subsequence(s , sum=0 , index,k){
  if(index==s.length){

    return sum==k
    
}
  var x =generate_subsequence(s,sum+s[index],index+1,k)
  if(x==true) return true
  var y=generate_subsequence(s,sum,index+1,k)
  return y
   
}

//https://recursion.vercel.app/  dry run on site
/*
function fn(s , sub , index,k) {
   if(index==s.length){

    return sub==k
    
}
  var x =fn(s,sub+s[index],index+1,k)
  if(x==true) return true
  var y=fn(s,sub,index+1,k)
  return y
   
}

fn([1,2,3],0,i=0,6)

*/
https://replit.com/@PrathyuPrasad/ImpressionableImprobableControlflowgraph#subset.js
/*
Time Complexity: O(sum*n), where sum is the ‘target sum’ and ‘n’ is the size of array.
Auxiliary Space: O(sum*n), as the size of 2-D array is sum*n.
*/


----------------------------------------------------------------------------------------------------------------------------------------

let arr = [ 8, 4, 0, 5, 3 ];
let sum= 4;
let n = arr.length;
 let mat = Array(10).fill().map(() => Array(10).fill(-1));

function subsetSum(a, n, sum) {
 
            // If the sum is zero it means
            // we got our expected sum
            if (sum == 0)
                return 1;
 
            if (n <= 0)
                return 0;
 
            // If the value is not -1 it means it
            // already call the function
            // with the same value.
            // it will save our from the repetition.
            if (tab[n - 1][sum] != -1)
                return tab[n - 1][sum];
 
            // if the value of a[n-1] is
            // greater than the sum.
            // we call for the next value
            if (a[n - 1] > sum)
                return tab[n - 1][sum] = subsetSum(a, n - 1, sum);
            else {
 
                // Here we do two calls because we
                // don't know which value is
                // full-fill our criteria
                // that's why we doing two calls
                return tab[n - 1][sum] = subsetSum(a, n - 1, sum) ||
                    subsetSum(a, n - 1, sum - a[n - 1]);
            }
        }

var ans = subsetsum(arr,K,n)
console.log(ans)
console.log(mat)

