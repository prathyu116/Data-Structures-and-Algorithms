https://takeuforward.org/data-structure/combination-sum-ii-find-all-unique-combinations/
https://www.youtube.com/watch?v=G1fRTGRxXU8&list=PLgUwDviBIf0rGlzIn_7rsaR2FQ5e6ZOL9&index=10

here we canot pic elent more than ones
cimbination sum1 polea...but i+1 aanu takil........object lekk push
var combinationSum2 = function(candidates, target) {
    let res = [];
    var obj={}
    function dfs(i, total, arr) {
        if (total === target) return res.push([...arr]);
        if (i >= candidates.length || total > target) return;

        arr.push(candidates[i]);
        dfs(i+1, total + candidates[i], arr); //taking 
        arr.pop();
        dfs(i + 1, total, arr);  //not taking
    }
    dfs(0, 0, []);
    for(var n of res) obj[n]=obj[n]+1 || 1
  console.log(Object.keys(obj))
    
};
var candidates = [10,1,2,7,6,1,5], target = 8
candidates.sort((a,b)=>a-b)

combinationSum2(candidates,target)

but eee approch extra logn eddkum...
------------------------------------------------------------------------------------------------------

void findCombination(int ind, int target, vector < int > & arr, vector < vector < int >> & ans, vector < int > & ds) {
  if (target == 0) {
    ans.push_back(ds);
    return;
  }
  for (int i = ind; i < arr.size(); i++) {   //y loop here...to avoid duplicate compination....when i pic elememnt from 0 we can pic value in first index second index..
    //when i am in index2...then value shoild take starting from index2..index3...index4.....for this we use foor loop ( 1 to till last)
//     if (i > ind && arr[i] == arr[i - 1]) continue;
//     if (arr[i] > target) break;
    ds.push_back(arr[i]);
    findCombination(i + 1, target - arr[i], arr, ans, ds);
    ds.pop_back();//backtrack
  }
}
vector < vector < int >> combinationSum2(vector < int > & candidates, int target) {
  sort(candidates.begin(), candidates.end());
  vector < vector < int >> ans;
  vector < int > ds;
  findCombination(0, target, candidates, ans, ds);
  return ans;
}
