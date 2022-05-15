var global = []
function combination(index, arr, target, ansList) {
  if (index === arr.length) {
    if (target === 0) {
      var noelemnt =false
      global.push([...ansList])
    
    }
    return 
  }
  if (arr[index] <= target) {
    ansList.push(arr[index]);
    combination(index,  arr,target - arr[index],ansList);
    ansList.pop();
  }

    combination(index+1,  arr,target ,ansList);
}

var arr = [2,3,5]
var target = 8;
var ansList = []

var ll=combination(index = 0, arr, target, ansList)
console.log(global)
