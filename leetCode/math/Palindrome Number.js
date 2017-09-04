/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) return false;
  let y = x, res = 0;
  while(y !== 0) {
      res = res * 10 + y % 10;
      y = parseInt(y / 10);
  }
  return x === res;
}

console.log(isPalindrome(12321));

 