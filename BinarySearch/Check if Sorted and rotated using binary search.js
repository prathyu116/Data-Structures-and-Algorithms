by linea search method
Find the minimum element in the array.
Now, if the array is sorted and then rotate all the elements before the minimum element will be in increasing order and all elements after the minimum element will also be in increasing order.
Check if all elements before minimum element are in increasing order.
Check if all elements after minimum element are in increasing order.
Check if the last element of the array is smaller than the starting element.
If all of the above three conditions satisfies then print YES otherwise print NO.


function checkIfSortRotated(arr, n)
    {
        let minEle = Number.MAX_VALUE;
        // int maxEle = int.MinValue;
  
        let minIndex = -1;
  
        // Find the minimum element
        // and it's index
        for (let i = 0; i < n; i++) {
            if (arr[i] < minEle) {
                minEle = arr[i];
                minIndex = i;
            }
        }
  
        let flag1 = true;
  
        // Check if all elements before
        // minIndex are in increasing order
        for (let i = 1; i < minIndex; i++) {
            if (arr[i] < arr[i - 1]) {
                flag1 = false;
                break;
            }
        }
  
        let flag2 = true;
  
        // Check if all elements after
        // minIndex are in increasing order
        for (let i = minIndex + 1; i < n; i++) {
            if (arr[i] < arr[i - 1]) {
                flag2 = false;
                break;
            }
        }
  
        // Check if last element of the array
        // is smaller than the element just
        // before the element at minIndex
        // starting element of the array
        // for arrays like [3,4,6,1,2,5] - not circular
        // array
        if (flag1 && flag2 && (arr[n - 1] < arr[0]))
            document.write("YES");
        else
            document.write("NO");
    }
