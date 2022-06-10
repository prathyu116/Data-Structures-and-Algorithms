}
  function getChoppedHeight(A,h) {
    let result = 0;
    for (let i = 0; i < A.length; i++) {
      result += (A[i] > h ? A[i] - h : 0)
    }
    return result;
  }

function ANS(A, B) {
  let start = 0;
  let end = -999999999999
  for(var i=0;i<A.length;i++){
      end=Math.max(end,A[i])
  }
 
  let ans = 0;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    h = getChoppedHeight(A,mid);
    if (h >= B) {
      start = mid + 1;
      ans = mid;
    }
    else {
      end = mid - 1;
    }
  }
  return ans;
  

}
