//https://leetcode.com/problems/number-of-islands/

var numIslands = function(grid) {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        counter++;
        visitIslands(grid, i, j);
      }
    }
  }

  return counter;
};

const visitIslands = (grid, x, y) => {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length || grid[x][y] === '0') {
    return grid
  };

  grid[x][y] = '0';

  visitIslands(grid, x + 1, y);//thazhot
  visitIslands(grid, x - 1, y);//thirch mukalilekk
  visitIslands(grid, x, y + 1);//left
  visitIslands(grid, x, y - 1);//adyym undaya left

  return grid;
};
grid = [["0", "1", "0", "1", "0"],
["0", "0", "1", "1", "1"],
["1", "0", "0", "1", "0"],
["0", "1", "1", "0", "0"],
["1", "0", "1", "0", "1"]]

var ans = numIslands(grid)
console.log(ans)
