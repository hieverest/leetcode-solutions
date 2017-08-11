/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// Discuss 上的答案, O(N)是一样的, 但是跑最后一个大case不会溢出
var strStr = function (haystack, needle) {
  for (let i = 0; ; i++) {
    for (let j = 0; ; j++) {
      if (j == needle.length) return i;
      if (i + j == haystack.length) return -1;
      if (needle[j] != haystack[i + j]) break;
    }
  }
}

// 我的答案
var strStr = function (haystack, needle) {
  if(needle.length === 0 ) return 0
  if(haystack.length === 0) return -1
  let index
  for (let i = 0; i < haystack.length; i++) {
    if (needle[0] === haystack[i]) {
      index = i
      if(needle.length === 1) return index
      for (let j = 1; j < needle.length; j++) {
        if(needle[j] !== haystack[j+i]) {
          break
        }
        else if(j === needle.length-1) return index
      }
    }
  }
  return -1
};

console.log(strStr("mississippi", "issip"));
console.log(strStr('a', 'a'));