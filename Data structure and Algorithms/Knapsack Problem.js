// recursive solution
function max(a, b) {
  return (a > b) ? a : b;
}
function knapsack(capacity, size, value, n) {
  if (n == 0 || capacity == 0) {
    return 0;
  }
  if (size[n - 1] > capacity) {
    return knapsack(capacity, size, value, n - 1); // if the size of item is larger than the left capacity 
  }
  else {
    return max(value[n - 1] +  // note: the value here accumulates the final result
      knapsack(capacity - size[n - 1], size, value, n - 1), // take the current item
      knapsack(capacity, size, value, n - 1)); // not take the current item
  }
}

var value = [4, 5, 10, 11, 13];
var size = [3, 4, 7, 8, 9];
var capacity = 16;
var n = 5;

// dynamic programming solution
function max(a, b) {
  return (a > b) ? a : b;
}
function dKnapsack(capacity, size, value, n) {
  var K = [];
  for (var i = 0; i <= n + 1; i++) {
    K[i] = [];
  }
  for (var i = 0; i <= n; i++) { // i-1 is current item
    for (var w = 0; w <= capacity; w++) { // w is weight
      if (i == 0 || w == 0) {
        K[i][w] = 0;
      }
      else if (size[i - 1] <= w) { // size[-1] == undefined, any comparison would result false
        K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
          K[i - 1][w]);
      }
      else {
        K[i][w] = K[i - 1][w];
      }
    }
  }
  console.log(K);
  return K[n][capacity];
}



console.log(dKnapsack(capacity, size, value, n));