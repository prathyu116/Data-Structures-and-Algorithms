function BinarySearch(arr,key){

    var start=0,end=arr.length-1
   

    while(start<=end){
        var mid=Math.floor(start+(end-start)/2)

        if(arr[mid]==key) {
            return true
        }else if(key > arr[mid]){
            start=mid+1
        }else if(key < arr[mid]){
            end=mid-1
        }
    }

    return false
}
