/*
Input: s = "abbaca"
Output: "ca"

*/


var removeDuplicates = function(s) {
      const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        if(stack[stack.length - 1] == s[i]) stack.pop()
        else stack.push(s[i])
    }
    return stack.join('')
};
