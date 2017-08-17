/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let sb = ''
  let i = a.length - 1, j = b.length -1, carry = 0;
  while (i >= 0 || j >= 0) {
      let sum = carry;
      if (j >= 0) sum += b.charAt(j--) - '0';
      if (i >= 0) sum += a.charAt(i--) - '0';
      sb = (sum % 2)+sb;
      carry = Math.floor(sum / 2);
  }
  if (carry != 0) sb = (carry) + sb;
  return sb 
};

let a = '1', b = '11'
console.log(addBinary(a,b));