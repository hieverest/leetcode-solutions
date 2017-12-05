/**
 * http://www.lintcode.com/en/problem/rotate-string/
 * 
 * 思路: 先reverse 前半部分, 再 reverse 后半部分, 最后 reverse 整个 string
 */

 const rotateStr = (str, offset) => {
    if (str.length === 0 || offset === 0) return str;

     let arr = str.split(""); // Convert to array.
     let len = arr.length;
     offset %= len; // If offset is bigger than len, the result is equal to offset = offset % len
     reverse(arr, 0, len - offset - 1);
     reverse(arr, len - offset, len -1);
     reverse(arr, 0, len - 1);

     return arr.join("");

 }

 // Below is an implementation of reverse. Note, we have built-in Array.prototype.reverse()
 const reverse = (arr, i, j) => {
     while ( i < j) {
         let temp = arr[i];
         arr[i] = arr[j];
         arr[j] = temp;
         i++;
         j--;
     }
 }

let str = "abcdefg";
console.log(rotateStr(str, 3));