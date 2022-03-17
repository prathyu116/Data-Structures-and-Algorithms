// https://leetcode.com/problems/gas-station/submissions/

// https://www.youtube.com/watch?v=3wUa7Lf1Xjk





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
