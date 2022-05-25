Bubble sort compares adjacent element, and swaps them if they are out of order. At each step, the maximum element in the unsorted part of the array, 
   finds its place in the sorted part.
Similar to bubble sort, this algorithm is in-place, ensuring that no extra space is required.


function solve(N,arr){
    //write code here
     for(var i = 0; i<N-1; i++) {
        //for round 1 to n-1
        var swapped = false;
        
        for(var j =0; j<N-1-i; j++) {
            
            //process element till n-i th index
            if(arr[j] > arr[j+1]) {
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                swapped = true;
            }
            
        }
        
        if(swapped == false) {
            break;
        }
           
    }
    console.log(arr.join(" "))
}
Time Complexity → $O(N^2)$
Space Complexity → $O(1)$

best casil array sorted aanu so O(N)
