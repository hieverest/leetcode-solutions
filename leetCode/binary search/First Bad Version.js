/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

let isBadVersion = x => {
  if (x <= 31) {
    return false
  }
  return true
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    if (n === 0) return 0;

    let start = 0, end = n, x;
    while(start <= end ) {
      x = Math.floor((start + end) / 2);
      if (isBadVersion(x) === false && isBadVersion(x + 1) === false) {
        start = x + 1
      } else if (isBadVersion(x) === true && isBadVersion(x - 1) === true) {
        end = x - 1
      } else if (isBadVersion(x) === true) {
        return x
      }
      else if (isBadVersion(x) === false) {
        return x + 1
      }
    };

    return 'okok'
  };
}

console.log(solution(isBadVersion)(100));