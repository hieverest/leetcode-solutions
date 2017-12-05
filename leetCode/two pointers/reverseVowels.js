/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (str) {
    if (str.length === 0) return str;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let i = 0,
        j = str.length - 1;
    while (i < j) {
        if (vowels.indexOf(str[i]) === -1) i++;
        if (vowels.indexOf(str[j]) === -1) j--;
        if (vowels.indexOf(str[i]) !== -1 && vowels.indexOf(str[j]) !== -1) helper(str, i++, j--);
    }
    return str;
};

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

}

let arr = [1, 2];
swap(arr, 0, 1);
console.log(arr);




// console.log(reverseVowels("leetcode"));
