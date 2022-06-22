 function findFrequency(arr,n,left,right,element)
    {
        let count = 0;
        for (let i = left - 1; i < right; ++i){
            if (arr[i] == element){
                count++;
            }
        }
            
               
        console.log(count);
    }
