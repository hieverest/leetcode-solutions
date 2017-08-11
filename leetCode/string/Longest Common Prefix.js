/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs[0]) {
    if (strs.length === 1) return strs[0]
    let char, result = []
    for (let i = 0; i < strs[0].length; i++) {
      for (let j = 1; j < strs.length; j++) {
        if (strs[0][i] !== strs[j][i]) return result.join('')
      }
      result.push(strs[0][i])
    }
    return result.join('')



  } else return ""
};

let strs = ['coolas', 'coolshit', 'coolokthen', 'coolguy']
let strs2 = ['yo', 'yo']
console.log(longestCommonPrefix(strs2));