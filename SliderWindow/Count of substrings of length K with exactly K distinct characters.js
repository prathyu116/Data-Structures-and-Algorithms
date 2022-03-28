
//Time Complexity: O(N)   https://www.geeksforgeeks.org/count-of-substrings-of-length-k-with-exactly-k-distinct-characters/

function countSubstrings(str, k) {
  var N = str.length;
  var answer = 0;
  var map = new Map();
  
  for (var i = 0; i < K; i++) {
    if (map.has(str[i]))
      map.set(str[i], map.get(str[i]) + 1)
    else
      map.set(str[i], 1)
  }

  if (map.size == K)
    answer++;

  for (var i = K; i < N; i++) {
    if (map.has(str[i]))
      map.set(str[i], map.get(str[i]) + 1)
    else
      map.set(str[i], 1)
    
    if (map.has(str[i - K]))
      map.set(str[i - K], map.get(str[i - K]) - 1)

    if (map.has(str[i - K]) && map.get(str[i - K]) == 0) {
      map.delete(str[i - K]);
    }
    if (map.size == K) {
      answer++;
    }
  }

  console.log(answer)
  return answer;
}


var str = "abcc";
var K = 2;
countSubstrings(str, K)
