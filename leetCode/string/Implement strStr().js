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
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// 我自己这样写, 在一个逻辑中推下来更容易理解一点

var strStr = function (haystack, needle) {
  if (haystack.length === 0 && needle.length === 0) return 0; // edge case "" and ""  result is 0;
  
for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    for (; j < needle.length; j++) {
        if ( (i+j) >= haystack.length) -1; // means the remaining of haystack is shorter than needle.
        if (haystack[i+j] !== needle[j]) break; 
    }
  if (j === needle.length) return i; // When j reach the last char, means they fully paired.
}
  return -1;
}



console.log(strStr("mississippi", "issip"));
console.log(strStr('a', 'a'));