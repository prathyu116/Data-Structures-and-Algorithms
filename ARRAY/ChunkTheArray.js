var array = [2, 4, 2, 5, 3, 6, 3]
var ans = []
const chunkSize = 3;
for (let i = 0; i < array.length; i += chunkSize) {
  const chunk = array.slice(i, i + chunkSize);
  ans.push(chunk)
}
console.log(ans)
