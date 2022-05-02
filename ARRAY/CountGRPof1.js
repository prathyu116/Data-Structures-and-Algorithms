function groupsOfOnes(S, N) {
  let count = 0;
  var st = [];
  for (let i = 0; i < N; i++) {
    if (S[i] == '1')
      st.push(1);
    else {
      if (st.length != 0) {
        count++;
        while (st.length != 0) {
          st.pop();
        }
      }
    }
  }
  if (st.length != 0)
    count++;
  console.log(count);
}
 var S = "10011011101";
  let N = S.length;
groupsOfOnes(S,N)
-------------------------------mine----------------------------
// function groupsOfOnes(S, N) {
//   let count = 0;
//   var st = [];
//   for (let i = 0; i < N; i++) {
//     if (S[i] == '1')
//       st.push(1);
//     else {
//       // if (st.length != 0) {
//         count++;
//         while (st.length != 0) {
//           st.pop();
//         }
//       // }
//     }
//   }
//   // if (st.length != 0)
//     // count++;
//   console.log(count);
}
 var S = "1001101101110101";
  let N = S.length;
groupsOfOnes(S,N)
