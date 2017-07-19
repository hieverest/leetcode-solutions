/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if(num ===1) return true
  if(num=== 0) return true
  let start = 0, end = num, mid
  while(start<(end-1)) {
    mid = Math.floor((start+end)/2)
    if(mid*mid > num ) {
      end = mid
    } else if( mid*mid < num) {
      start = mid
    } else {
      return true
    }
  }
  return false
};

console.log(isPerfectSquare(49));


