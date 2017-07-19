/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n===0) return 0
    if(n===1) return 1
    
    let sum = x => (1+x)*x/2
    
    let start = 0, end =n, mid
    while(start < end -1 ) {
      mid = parseInt((start+end)/2)
      if(sum(mid) < n) {
        if(sum(mid+1) < n) start = mid
        if(sum(mid+1) > n) return mid
        if(sum(mid+1)===n) return mid+1 
      }else if(sum(mid) > n) {
        if(sum(mid-1) > n) end = mid
        if(sum(mid-1) <= n) return mid-1 
      } else {
        return mid
      }     
    }
};

console.log(arrangeCoins(10));
console.log(arrangeCoins(8));
console.log(arrangeCoins(5));
console.log(arrangeCoins(6));