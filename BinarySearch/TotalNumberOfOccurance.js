function firstOccurance(arr,key){

    var start=0,end=arr.length-1,first=-1
    while(start<=end){
        var mid=Math.floor(start+(end-start)/2)

        if(arr[mid]==key) {
            first=mid
            end=mid-1
        }else if(key > arr[mid]){
            start=mid+1
        }else if(key < arr[mid]){
            end=mid-1
        }
    }

    return first
}

function LastOccurance(arr,key){
    var start=0,end=arr.length-1,last=-1
    while(start<=end){
        var mid=Math.floor(start+(end-start)/2)
        if(arr[mid]==key) {
            last=mid
            start=mid+1
        }else if(key > arr[mid]){
            start=mid+1
        }else if(key < arr[mid]){
            end=mid-1
        }
    }

    return last
}






function TotalOccurance(){
  var arr=[1,3,3,3,5]
  var key=3
  var first= firstOccurance(arr,key)
  var second = LastOccurance(arr,key)
  console.log("Total number of occurance",second-first+1)
}
TotalOccurance()
