//TC O(log n)
//UPPERBOUND or CEIL----> arr[i] > key(Just >than key )
//upper bound means the smallest index such that ..that number >  target

function upperBound(arr, x, n) {
    let low = 0, high = n - 1;
    let ans = n;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        // maybe an answer
        if (arr[mid] > x) {
            ans = mid;
            //look for smaller index on the left
            high = mid - 1;
        }
        else {
            low = mid + 1; // look on the right
        }
    }
    return ans;
}

let arr = [3, 5, 8, 9, 15, 19];
let n = 6, x = 9;
let ind = upperBound(arr, x, n);
console.log("The upper bound is the index:", ind);
