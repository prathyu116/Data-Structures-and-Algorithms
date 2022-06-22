function palindrome(n, k, arr) {
  let left = 0;
  let right = n - 1;
  while (left <= right) {
    if (arr[left] !== arr[right]) {
      if (k === 0) {
        return "False";
      }
      arr[left] = arr[right];
      k--;
    }
    left++;
    right--;
  }
  return "True";
}
var string = "abdca", N = 5, K = 1
var result = palindrome(N, K, string);

console.log(result);//Enter code here
