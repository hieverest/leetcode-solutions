/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let charMap = []; // define a array whose size is 256; 
    // Use it as a simple hashmap for characters.
    // Remember the method str.charCodeAt()
    for (let c of s.split("")) {
        if (charMap[c.charCodeAt()]) {
            charMap[c.charCodeAt()]++;
        } else {
            charMap[c.charCodeAt()] = 1;
        }
    }

    for (let c of t.split("")) {
        if (charMap[c.charCodeAt()]) {
            charMap[c.charCodeAt()]--;
        } else {
            return false;
        }
    }

    for (let n of charMap) {
        if (n) return false;
    }
    return true;
    
};

let s = "cat", t = "act";
console.log(isAnagram(s,t));