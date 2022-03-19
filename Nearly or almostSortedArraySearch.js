
function binarySearch(arr,l,r,x)
{
    if (r >= l)
        {
            let mid = l + Math.floor((r - l) / 2);
   
            // If the element is present at
            // one of the middle 3 positions
            if (arr[mid] == x)
                return mid;
            if (mid > l && arr[mid - 1] == x)
                return (mid - 1);
            if (mid < r && arr[mid + 1] == x)
                return (mid + 1);
   
            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                return binarySearch(arr, l, mid - 2, x);
   
            // Else the element can only be present
            // in right subarray
            return binarySearch(arr, mid + 2, r, x);
        }
   

        return -1;
}
let arr=[3, 2, 10, 4, 40];
let n = arr.length;
let x = 4;
let result = binarySearch(arr, 0, n - 1, x);
console.log(result)
