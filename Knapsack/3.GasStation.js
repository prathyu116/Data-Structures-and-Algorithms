// https://leetcode.com/problems/gas-station/submissions/

// https://www.youtube.com/watch?v=3wUa7Lf1Xjk

// refer babbr circular tour



var canCompleteCircuit = function(gas, cost) {
        let total = 0;
    let tank = 0;
    let start = 0;
    for(let i = 0; i < gas.length; i++) {
        let fuelConsumed = gas[i] - cost[i];
        tank += fuelConsumed;
        if(tank < 0) {
            start = i + 1;
            tank = 0;
        }
        total += fuelConsumed;
    }
    return total >= 0 ? start : -1;
};
---------------------avoiding use cheyth nammkukk optimise cheyyam-----------------
          var avoiding = 0
  var balance = 0
  var start = 0
  
  for (var i = 0; i < N; i++) {
    balance = balance + (Petrol[i] - Distance[i])
    if (balance < 0) {
      avoiding = avoiding + balance
      start = i + 1
      balance = 0
    }
  }
  if (avoiding + balance >= 0) {
    return start
  } else {
    return -1
  }
}
