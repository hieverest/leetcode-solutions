/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let splitArr = s.split(" "), result = []
  splitArr.map( ele => {
    let temp = []
    for(let i = ele.length-1; i>=0; i--) {
      temp.push(ele[i])
    }
    result.push(temp.join(''))
  })
  return result.join(" ")
};


let test = "Let's take LeetCode contest"
reverseWords(test)