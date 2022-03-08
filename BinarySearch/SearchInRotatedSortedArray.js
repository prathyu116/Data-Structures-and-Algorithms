
// https://replit.com/@PrathyuPrasad/pivot#index.js
//1.get pivot value
//2.search based on pivot



 function getPivot(arr){ 
    var s=0,e=arr.length-1;
    while(s<e){
          var mid=Math.floor(s+(e-s)/2)

        if(arr[mid] >= arr[0]){
            s=mid+1
        }else{
            e=mid
        }
    }
    return s;
}

 function binarySearch(arr,start,end,key){
    var s=start,e=end;
  
    while(s<=e){
        var  mid= Math.floor(s+(e-s)/2)
        if(arr[mid] == key){
            return mid
        }
        if(key > arr[mid]){
            s=mid+1;
        }else{
            e=mid-1
        }
}
    return -1;
}

var search = function(arr, target) {
    var n=arr.length
    var pivot = getPivot(arr)
   
    if( target >= arr[pivot] && target <= arr[n-1] ){
       return binarySearch(arr,pivot,n-1,target)
    }else{
        return binarySearch(arr,0,pivot-1,target)
    }

   
};

var arr=[3 ,4, 5, 1, 2]
var ans = search(arr,1)
console.log(ans)
