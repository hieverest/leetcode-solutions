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
        // 注意这里的条件判断一次只走其中一个
        if (!isAlphanumeric(str[l]))
            l++;
        else if (!isAlphanumeric(str[r]))
            r--;
        else if (str[l] !== str[r])
            return false;
        else { // condition: str[l] === str[r]
            l++;
            r--;
        }
    }
    return true;

};

const isAlphanumeric = (c) => {
    if ((c >= '0' && c <= "9") || (c >= 'a' && c <= 'z'))
        return true;
    else return false;
}

console.log(isPalindrome("a,b."));
