/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x===1) return 1;
  let start=0, end=x, mid, next;
  while(start<=end) {
    mid = Math.floor((start+end)/2)
    next = mid+1
    if(mid*mid>x) end = mid;
    if(mid*mid < x && next*next <=x) start = mid 
    if( mid*mid<=x && next*next > x) return mid
  }

};

console.log(mySqrt(1));