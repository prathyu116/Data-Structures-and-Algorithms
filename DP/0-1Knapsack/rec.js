/*
Recursion code
Time Complexity: O(2^n)
*/

	function knapSack(W, wt, val, n)
	{
		// Base Case
		if (n == 0 || W == 0)
			return 0;

		// If weight of the nth item is
		// more than Knapsack capacity W,
		// then this item cannot be
		// included in the optimal solution
		if (wt[n - 1] <= W)
			return Math.max(val[n - 1] +knapSack(W - wt[n - 1], wt, val, n - 1),knapSack(W, wt, val, n - 1)) //include aya value + bakki ulllath excute cheyyan

		// Return the maximum of two cases:
		// (1) nth item included
		// (2) not included
		else
			return knapSack(W, wt, val, n - 1)
	}
		
	let val = [ 60, 100, 120 ];
	let wt = [ 10, 20, 30 ];
	let W = 50;
	let n = val.length;

	var ans=knapSack(W, wt, val, n)
	console.log(ans)/*
Recursion code
Time Complexity: O(2^n)
*/

	function knapSack(W, wt, val, n)
	{
		// Base Case
		if (n == 0 || W == 0)
			return 0;

		// If weight of the nth item is
		// more than Knapsack capacity W,
		// then this item cannot be
		// included in the optimal solution
		if (wt[n - 1] <= W)
			return Math.max(val[n - 1] +knapSack(W - wt[n - 1], wt, val, n - 1),knapSack(W, wt, val, n - 1)) //include aya value + bakki ulllath excute cheyyan

		// Return the maximum of two cases:
		// (1) nth item included
		// (2) not included
		else
			return knapSack(W, wt, val, n - 1)
	}
		
	let val = [ 60, 100, 120 ];
	let wt = [ 10, 20, 30 ];
	let W = 50;
	let n = val.length;

	var ans=knapSack(W, wt, val, n)
	console.log(ans)


------------------------------------------------memorisation-----------------------------------
// 	bcoz of overlapping subproblem we can use memorization
	Time Complexity: O(N*W). 
	
let val = [ 8, 4, 0, 5, 3 ];
let wt = [ 1, 2, 3, 2, 2 ];
let W = 4;
let n = val.length;
var mat=[]
for(var i=0;i<=n;i++){
  mat[i]=new Array(W+1).fill(-1)
}
function knapSack(W, wt, val, n) {
  // Base Case
  if (n == 0 || W == 0)
    return 0;
  if(mat[n][W]!==-1) return mat[n][W]

  if (wt[n - 1] <= W)
    return mat[n][W]=Math.max(val[n - 1] + knapSack(W - wt[n - 1], wt, val, n - 1), knapSack(W, wt, val, n - 1))

  else
    return mat[n][W]=knapSack(W, wt, val, n - 1)
}


var ans = knapSack(W, wt, val, n)
console.log(ans)
console.log(mat)


