function Youhavetosortitout(N,arr){
    var arr2=[]
    for(var i=0;i<N;i++){
        arr2.push(i)
    }
   
    for(var i = 0; i<N-1; i++) {
        //for round 1 to n-1
        var swapped = false;
        for(var j =0; j<N-1-i; j++) {
            
            //process element till n-i th index
            if(arr[j] > arr[j+1]) {
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                
                var temp2=arr2[j]
                arr2[j]=arr2[j+1]
                arr2[j+1]=temp2
                swapped = true;
            }
            
        }
        
        if(swapped == false) {
            break;
        }
           
    }
    console.log(arr2.join(" "))
}
 
