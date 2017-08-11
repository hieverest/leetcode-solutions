/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (str) {
  let ss = str+str
  ss = ss.slice(1, ss.length-1)
  return ss.includes(str)
};
// var repeatedSubstringPattern = function (str) {
//   let len = str.length;
//   for (let i = parseInt(len / 2); i >= 1; i--) {
//     if (len % i == 0) {
//       let m = len / i;
//       let subS = str.slice(0, i);
//       let sb =''
//       for (let j= 0; j < m;j++) {
//         sb += subS
//       }
//       if (sb === str) return true;
//     }
//   }
//   return false;
// };


let test = 'ababcababcd'

console.log(repeatedSubstringPattern(test));


