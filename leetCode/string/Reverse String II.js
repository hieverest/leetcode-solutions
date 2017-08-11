/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let splitArr = [], temp = [], resultArr = []
  for (let i = 0, j = 0; ; i++ , j++) {
    if (i === s.length) {
      splitArr.push(temp.join(''))
      temp = []
      break
    }
    if (j === k * 2) {
      j = 0
      splitArr.push(temp.join(''))
      temp = []
    }
    temp.push(s[i])
  }
  splitArr.map(ele => {
    for (let i = k - 1; i >= 0; i--) {
      temp.push(ele[i])
    }
    for(let i = k; i<ele.length; i++) {
      temp.push(ele[i])
    }
    resultArr.push(temp.join(''))
    temp = []
  })
  return resultArr.join('')
};


let s = 'abcdefghijkl', k = 2
reverseStr(s, k)

