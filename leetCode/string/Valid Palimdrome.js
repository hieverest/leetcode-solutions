/**
 * @param {string} s
 * @return {boolean}
 * 
 * 思路: Two pointers
 */
var isPalindrome = function (s) {
    let str = s.toLowerCase();
    let l = 0, r = str.length - 1;
    while (l < r) {
        while (l < r && !isAlphanumeric(str[l])) l++;
        while (l < r && !isAlphanumeric(str[r])) r--;
        if (str[l] !== str[r]) return false;
        l++;
        r--;
    }
    return true;
};

const isAlphanumeric = (c) => {
    if ((c >= '0' && c <= "9") || (c >= 'a' && c <= 'z'))
        return true;
    else return false;
}

console.log(isPalindrome("a,bb.@#$%^&a"));
