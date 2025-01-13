


function countPainters(boards, time) {
    let n = boards.length; // size of array
    let painters = 1;
    let boardsPainter = 0;
    for (let i = 0; i < n; i++) {
        if (boardsPainter + boards[i] <= time) {
            // allocate board to current painter
            boardsPainter += boards[i];
        } else {
            // allocate board to next painter
            painters++;
            boardsPainter = boards[i];
        }
    }
    return painters;
}

function findLargestMinDistance(boards, k) {
    let low = Math.max(...boards);
    let high = boards.reduce((a, b) => a + b, 0);

    for (let time = low; time <= high; time++) {
        if (countPainters(boards, time) <= k) {
            return time;
        }
    }
    return low;
}

let boards = [10, 20, 30, 40];
let k = 2;
let ans = findLargestMinDistance(boards, k);
console.log("The answer is:", ans);

--------------------------------------------------------------------------------------
  


function countPainters(boards, time) {
    let n = boards.length; // size of array
    let painters = 1;
    let boardsPainter = 0;
    for (let i = 0; i < n; i++) {
        if (boardsPainter + boards[i] <= time) {
            // allocate board to current painter
            boardsPainter += boards[i];
        } else {
            // allocate board to next painter
            painters++;
            boardsPainter = boards[i];
        }
    }
    return painters;
}

function findLargestMinDistance(boards, k) {
    let low = Math.max(...boards);
    let high = boards.reduce((a, b) => a + b, 0);

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let painters = countPainters(boards, mid);
        if (painters > k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

let boards = [10, 20, 30, 40];
let k = 2;
let ans = findLargestMinDistance(boards, k);
console.log("The answer is:", ans);


