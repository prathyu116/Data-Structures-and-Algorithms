https://www.codingninjas.com/codestudio/problems/allocate-books_1090540?leftPanelTab=0
https://takeuforward.org/data-structure/allocate-minimum-number-of-pages/
/*
Input : pages[] = {12, 34, 67, 90}
        m = 2
Output : 113
Explanation:
There are 2 number of students. Books can be distributed 
in following fashion : 
  1) [12] and [34, 67, 90]
      Max number of pages is allocated to student 
      2 with 34 + 67 + 90 = 191 pages
  2) [12, 34] and [67, 90]
      Max number of pages is allocated to student
      2 with 67 + 90 = 157 pages 
  3) [12, 34, 67] and [90]
      Max number of pages is allocated to student 
      1 with 12 + 34 + 67 = 113 pages

Of the 3 cases, Option 3 has the minimum pages = 113



The idea is to use Binary Search. We fix a value for the number of pages as mid of current minimum and maximum. We initialize minimum and maximum as 0 and sum-of-all-pages respectively. 
If a current mid can be a solution, then we search on the lower half, else we search in higher half.
Now the question arises, how to check if a mid value is feasible or not? Basically, we need to check if we can assign pages to all students in a way that the maximum number doesn’t exceed current value.
To do this, we sequentially assign pages to every student while the current number of assigned pages doesn’t exceed the value. In this process, if the number of students becomes more than m,
then the solution is not feasible. Else feasible.
Below is an implementation of above idea.

*/

function isPossible(arr,  n, m, mid){
    var studentCount=1;
    var pageSum=0;
    for(var i=0;i<n;i++){
        if(pageSum+arr[i] <= mid){
            pageSum += arr[i];
        }else{
            studentCount++;
            if(studentCount > m || arr[i] > mid){
                return false;
            }
            pageSum=0;
             pageSum += arr[i];
        }
}
    return true;
}
function allocateBooks( arr, n,m) {
    // Write your code here.
    var start = 0;
    var sum = 0;
    for(var i=0;i<n;i++){
        sum=sum+arr[i];
    }
    var end=sum;
    var ans=-1;
    while(start<=end){
          var mid=Math.floor(start+(end-start)/2);

        if(isPossible( arr, n,m, mid)){
            ans=mid;
            end=mid-1;
        }else{
            start=mid+1;
        }
    }
    return ans;
}
var arr = [10, 20, 30, 40]

var ans = allocateBooks(arr,arr.length,2)
console.log(ans)









Time Complexity: O(N*log M), where N is the number of different books and M denotes the sum of number of pages of all different books
Auxiliary Space: O(1)











-------------------------------------------------------------------
        


function countStudents(arr, pages) {
  var n = arr.length; // size of array
  var students = 1;
  var pagesStudent = 0;
  for (var i = 0; i < n; i++) {
    if (pagesStudent + arr[i] <= pages) {
      // add pages to current student
      pagesStudent += arr[i];
    } else {
      // add pages to next student
      students++;
      pagesStudent = arr[i];
    }
  }
  return students;
}

function findPages(arr, n, m) {
  // book allocation impossible
  if (m > n) return -1;

  var low = Math.max(...arr);
  var high = arr.reduce((a, b) => a + b, 0);
  while (low <= high) {
    var mid = Math.floor((low + high) / 2);
    var students = countStudents(arr, mid);
    if (students > m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}

var arr = [25, 46, 28, 49, 24];
var n = 5;
var m = 4;
var ans = findPages(arr, n, m);
console.log("The answer is: " + ans);

//mid=110...

/*for student 1 25+46+28 
student 2 49+24
but i need to do with 4 students..with 110 required 2 studnet..anytthing on right will not our answer..so reduce th search space
*/



brute force



function countStudents(arr, pages) {
    var n = arr.length; // size of array
    var students = 1;
    var pagesStudent = 0;
    for (var i = 0; i < n; i++) {
        if (pagesStudent + arr[i] <= pages) {
            // add pages to current student
            pagesStudent += arr[i];
        } else {
            // add pages to next student
            students++;
            pagesStudent = arr[i];
        }
    }
    return students;
}

function findPages(arr, n, m) {
    // book allocation impossible
    if (m > n) return -1;

    var low = Math.max(...arr);
    var high = arr.reduce((a, b) => a + b, 0);

    for (var pages = low; pages <= high; pages++) {
        if (countStudents(arr, pages) === m) {
            return pages;
        }
    }
    return low;
}

var arr = [25, 46, 28, 49, 24];
var n = 5;
var m = 4;
var ans = findPages(arr, n, m);
console.log("The answer is: " + ans);



