function solve(N,arr){
    //write code here
     for(var i = 0; i < N-1; i++ ) {
        var minIndex = i;
        
        for(var j = i+1; j<N; j++) {
            
            if(arr[j] < arr[minIndex]) 
                minIndex = j;
            
        }
        var temp=arr[minIndex]
        arr[minIndex]=arr[i]
        arr[i]=temp
    }
    console.log(arr.join(" "))
}
Time Complexity → $O(N^2)$
Space Complexity → $O(1)$
