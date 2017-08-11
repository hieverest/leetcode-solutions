/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let countA =0, countL = 0
  for(let i =0; i< s.length; i++) {
    if(s[i] === 'L') {
      if(s[i+1] ==='L' && s[i+2] === 'L') return false
    }
    if(s[i] === 'A') countA ++
    if(countA>1) return false
  }
  return true
};

let test1 = "PPALLP", test2 = "PPALLL"

console.log(checkRecord(test2));