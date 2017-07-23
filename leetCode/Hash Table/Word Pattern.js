/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */

var wordPattern = function (pattern, str) {
  let ob = {};
  let ob2 = {};
  let arr = str.split(" ");
  if (arr.length != pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    let v1 = arr[i];
    let v2 = pattern.charAt(i);
    if (ob[v1] == undefined && ob2[v2] == undefined) {
      ob[v1] = v2;
      ob2[v2] = v1;
    } else if (ob[v1] && ob2[v2]) {
      if (ob[v1] != v2)
        return false;
    } else {
      return false;
    }
  }
  return true;
};
//  JS最快的答案. 我原来的代码处理过于复杂, 这个解法, 意思是, 只要保持每次同一个index上 出现的内容和第一次相同, 即保持了相同的pattern, 那么就是true. 巧妙一个思路转换

// var wordPattern = function (pattern, str) {
//   if (pattern === ''.trim() && str.trim() === '') return true
//   if (pattern.trim() === '') return false
//   if (str.trim() === '') return false

//   let strArr = str.split(' '), mapP = {}, mapS = {}
//   if (pattern.length !== strArr.length) return false
//   for (let i = 0; i < pattern.length; i++) {
//     if (!mapP[pattern[i]]) {
//       mapP[pattern[i]] = [i]
//     } else {
//       mapP[pattern[i]].push(i)
//     }
//   }
//   for (let i = 0; i < strArr.length; i++) {
//     if (!mapS[strArr[i]]) {
//       mapS[strArr[i]] = [i]
//     } else {
//       mapS[strArr[i]].push(i)
//     }
//   }
//   console.log(mapP, mapS);
//   let keysP = Object.keys(mapP), keysS = Object.keys(mapS)
//   if (keysP.length === keysS.length) {
//     for (let i = 0; i < keysP.length; i++) {
//       if (mapP[keysP[i]].length === mapS[keysS[i]].length) {
//         mapP[keysP[i]].forEach((ele, idx) => {
//           if (ele !== mapS[keysS[idx]]) return false
//         })
//       } else return false
//     }
//     return true
//   }

//   return false
// };


console.log(wordPattern("", 'a '));