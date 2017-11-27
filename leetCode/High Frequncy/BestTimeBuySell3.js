/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    let diff = [];
    diff[0] = 0;
    for (let i = 1; i < prices.length; i++) {
        diff[i] = prices[i] - prices[i-1];
    }
    // dp solution
    let left = [], right = [];
    left[0] = 0, right[diff.length] = 0;
    let max = 0, maxSoFar = 0;
    for (let i = 1; i < diff.length + 1; i++) {
        maxSoFar = (maxSoFar + diff[i-1]) > 0 ? maxSoFar + diff[i-1] : 0;
        max = Math.max(max, maxSoFar);
        left[i] = max;
    }
    max = 0, maxSoFar = 0;
    for (let i = diff.length - 1; i >= 0; i--) {
        maxSoFar = (maxSoFar + diff[i]) > 0 ? maxSoFar + diff[i] : 0; 
        max = Math.max(max, maxSoFar);
        right[i] = max;        
    }
    max = 0;
    for (let i = 0; i < diff.length+1; i++) {
        max = Math.max(left[i] + right[i], max);
    }
    return max;
}

let arr = [1,2,4,2,5,7,2,4,9,0];

console.log(maxProfit(arr));