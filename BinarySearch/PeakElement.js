//https://replit.com/@PrathyuPrasad/ElatedWideConference#index.js


function ThePeakPoint(size,arr){
    var start=0,end=arr.length-1
   
// Edge cases:
    if (n === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;
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
----------------------------
    


function findPeakElement(arr) {
    let n = arr.length; // Size of the array

    // Edge cases:
    if (n === 1) return 0;
    if (arr[0] > arr[1]) return 0;
    if (arr[n - 1] > arr[n - 2]) return n - 1;

    let low = 1, high = n - 2;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        // If arr[mid] is the peak:
        if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1])
            return mid;

        // If we are in the left:
        if (arr[mid] > arr[mid - 1]) low = mid + 1;

        // If we are in the right:
        // Or, arr[mid] is a common point:
        else high = mid - 1;
    }
    // Dummy return statement
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
let ans = findPeakElement(arr);
console.log("The peak is at index:", ans);





//-----------------brute-----------------

function findPeakElement(arr) {
    let n = arr.length; // Size of array

    for (let i = 0; i < n; i++) {
        // Checking for the peak:
        if ((i === 0 || arr[i - 1] < arr[i])
                && (i === n - 1 || arr[i] > arr[i + 1])) {
            return i;
        }
    }
    // Dummy return statement
    return -1;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 5, 1];
let ans = findPeakElement(arr);
console.log("The peak is at index:", ans);
