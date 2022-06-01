 /*
 Input: s = "anagram", t = "nagaram"
Output: true
 */
const isAnagram = function(s, t) {
  if (s.length !== t.length) { return false; }
  
  const counter = new Array(26).fill(0);
  
  for (let i = 0; i < s.length; i++) {
    counter[s.charCodeAt(i) - 97]++;
    counter[t.charCodeAt(i) - 97]--;
  }
  
  for (const value of counter) {
    if (value !== 0) { return false; }
  }
  
  return true;
};
73


15
How could I convert a letter to its corresponding number in JavaScript?

For example:

a = 0
b = 1
c = 2
d = 3
