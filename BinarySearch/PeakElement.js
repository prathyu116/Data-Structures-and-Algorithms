//https://replit.com/@PrathyuPrasad/ElatedWideConference#index.js


function ThePeakPoint(size,arr){
    var start=0,end=arr.length-1
   

    while(start<end){
        var mid=Math.floor(start+(end-start)/2)
        if(arr[mid]<arr[mid+1]) {
           start=mid+1
        }else{
            end=mid           
        }      
    }
    return start

}

var arr=[3,4,5,1]
var ans=ThePeakPoint(arr.length,arr)
console.log(ans)
