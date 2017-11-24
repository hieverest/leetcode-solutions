/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if (s.length === 0) return 0;
    let res = [1];
    res[1] = s[0] === "0" ? 0 : 1;
    for (let i = 2; i < s.length + 1; i++) {
        let comb = s[i-2] + s[i-1];
        res[i] = 0;
        if (s[i-1] !== "0") {
            res[i] += res[i-1];
        }
        if (+comb <= 26 && +comb >= 10) {
            res[i] += res[i-2];
        } 
    }
    return res[s.length]; 
};
/*
这里0的情况很特殊。没有0时，123， 
*/