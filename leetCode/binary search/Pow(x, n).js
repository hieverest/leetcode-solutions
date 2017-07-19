/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n === 0)
    return 1;
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  return (n % 2 === 0) ? Math.pow(x * x, n / 2) : x * Math.pow(x * x, n / 2);
}

console.log(myPow(0.00001, 2147483647)); 