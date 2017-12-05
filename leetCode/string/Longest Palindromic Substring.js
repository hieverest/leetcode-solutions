/**
 * @param {string} s
 * @return {string}
 * 
 * 思路: 使用一个 sub string 的窗口, 窗口大小由 str.length -> 2, 从左到右依次滑动窗口去判断 isPalindrome
 * 这个方法 LTE 了
 * 
 * https://leetcode.com/problems/longest-palindromic-substring/solution/ 参考官方解答 可以用 O(n^2)解
 */
var longestPalindrome = function(s) {
    if (s.length === 0 || s.length === 1) return s;
    const len = s.length;
    let sublen = s.length;
    for (; sublen >= 2; sublen--) {
        let start = 0;
        for (; start <= len - sublen; start++) {
            if (isPalindrome(s, start, start+sublen-1)) {
                return s.slice(start, start+sublen); 
                // 注意 slice(start, end), sliced str 不包括 end char 
            }
        }
    }
    return s[0];
    
}

const isPalindrome = (str, l, r) => {
    let s = str.toLowerCase();
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true;
}

console.log(longestPalindrome("haha"));