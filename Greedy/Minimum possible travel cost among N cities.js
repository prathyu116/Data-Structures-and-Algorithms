/*
Time Complexity: O(N)
Auxiliary Space: O(1)
https://www.geeksforgeeks.org/minimum-possible-travel-cost-among-n-cities/

Travel to the next city until a city j having cost less than the previous city (by which we are travelling, let’s say city i) is found.
*/

function minJourney(arr,n){
     var minCost = 0;
     var Bus = 0;
 
        for (i = 0; i < n; i++) {
 
            if (arr[Bus] > arr[i]) {
                minCost = minCost+((i - Bus) * arr[Bus]);
               Bus = i;
            }
        }
 
        minCost = minCost+((n - Bus) * arr[Bus]);
       console.log(minCost)
}
