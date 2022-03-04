//https://replit.com/@PrathyuPrasad/WeepyExtraneousCgibin#index.js


function firstOccurance(arr,key){
    var start=0,end=arr.length-1,first=-1
    while(start<=end){
        var mid=Math.floor(start+(end-start)/2)

        if(arr[mid]==key) {
            first=mid  //for first occurance we move to left
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
            last=mid  //for last occurance we move to right
            start=mid+1
        }else if(key > arr[mid]){
            start=mid+1
        }else if(key < arr[mid]){
            end=mid-1
        }
    }

    return last
}






function FindFirstandLastOcc(){
  var arr=[1,2,3,3,5]
  var key=3
  var first= firstOccurance(arr,key)
  var second = LastOccurance(arr,key)
  console.log(first,second)
}
FindFirstandLastOcc()
