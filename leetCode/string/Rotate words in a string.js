/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    let res = [];
    let trimmed = str.trim();
    let arr = trimmed.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "") {
            res.push(arr[i]);
        }
    }
    console.log(res);
    res.reverse();
    return res.join(" ");
};

let str = "   a     b";

console.log(reverseWords(str));

let test = "  ";
console.log(test.split(" ")); // Note, a string of two spaces would be splitted into three empty string.