//https://www.w3resource.com/javascript-exercises/searching-and-sorting-algorithm/searching-and-sorting-algorithm-exercise-1.php


function quickSort (arr, left, right ) {
    if (arr.length > 1) {
     position = partition(arr, left, right)
     if(left < position - 1) quickSort(arr, left, position - 1)
     if(position < right) quickSort(arr, position, right)
  }
  return arr
}

function partition (arr, left, right) {
  pivot = arr[Math.floor(Math.random() * (right - left + 1) + left)] // randomizing pivot to avoid On^2 in worst case scenario
  while (left <= right) {
    while (arr[left] < pivot) {
      left++
    }
    while (arr[right] > pivot) {
      right--
    }
     if(left <= right) {
         let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
      left++
      right--
    }
  }
  return left
}


var arr=[12,2,5,9]
quickSort(arr,0,arr.length-1)
console.log(arr)
