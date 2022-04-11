function isSubsequence(str1, str2) {
  let i = 0;
  // Continue as long as there are characters to compare...
  for (let j = 0; i < str1.length && j < str2.length; j++) {
    if (str2[j] === str1[i]) i++;
  }
  // Now return true if, and only when, all of str1 was found in str2
  return i === str1.length;
}
