/**
 * @param {string[]} strs
 * @return {string[][]}
 * 
 * 思路: 建立一个 hashmap 来存放anagrams, anagrams 存放在同一个 key 下, key 是排序过后的 string;
 * 遍历 strs, 对每个 string 都做排序处理, 然后再来判断是否 match keys
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    const res = [];
    
    for(let s of strs) {
        let sorted = s.split("").sort().join(""); // Sort the chars in string, and make a copy
        if (map.has(sorted)) {
            map.get(sorted).push(s);
        } else {
            map.set(sorted, [s]);
        }
    }
    
    for (let value of map.values()) {
        res.push(value);
    }
    
    return res;
    
};