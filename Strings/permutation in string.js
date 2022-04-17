/*https://leetcode.com/problems/permutation-in-string/*/

function checkEqual(count1,count2){
  for(var i=0;i<26;i++){
    if(count1[i] != count2[i]) return 0;
  }
  return 1;
}
var checkInclusion = function(s1, s2) {
   const count1 = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    count1[s1.charCodeAt(i) - 97]++;
  }


  var i = 0, windowSize = s1.length
  const count2 = new Array(26).fill(0);
  while (i < windowSize && i<s2.length) {
    count2[s2.charCodeAt(i) - 97]++;
    i++
  }
 if(checkEqual(count1,count2)) return 1

 while(i<s2.length){
   count2[s2.charCodeAt(i) - 97]++;

   count2[s2.charCodeAt(i-windowSize) - 97]--;
   i++
   if(checkEqual(count1,count2)) return true

 }
 return 0;
};
