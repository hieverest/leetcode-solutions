/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
  s = s.trim()
  if(s === '') return 0
  let arr = s.split(' ')
  for(let i =0; i<arr.length;) {
    if(!arr[i]) {
      arr.splice(i, 1)
    } else i++
  }
  return arr.length
};

let test = ", , , ,        a, eaefa"
console.log(countSegments(test));