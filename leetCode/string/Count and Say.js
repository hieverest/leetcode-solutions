/**
 * @param {number} n
 * @return {string}
 * 
 * 思路: 
 *  1. '1'
 *  2. '11'
 *  3. '21'
 *  4. '1211'
 *  5. '111221'
 * 
 * 这题的意思刚开始看不明白, 其实就是从左至右数数, 1个1 就是 '1' + '1', 前一个是 count 后一个是数
 * 所以必须是从上一个 string 来得到当前的 string
 * 那么也就是一次遍历下来 append 当前数和 count 到新的 string 上
 */
var countAndSay = function (n) {
    if (n === 1) return "1";
    let prev = "1", res = "1", count = 1;

    for (let i = 2; i <= n; i++) {
        // 第一层, 是1 - n, 每一次保存下来, 供下一次参考
        prev = res;
        res = "";
        count = 1;
        /**
         * 不要写成:
         * for (let j = 0; j < prev.length - 1; j++) {
         *    if (prev[j] === prev[j + 1])
         * 
         * 这样当 i = 2 时, prev = "1", 会直接被跳过
         */
        for (let j = 0; j < prev.length; j++) {
            if ( j+1 < prev.length && prev[j] === prev[j + 1]) {
                count++;
            } else {
                res += "" + count + prev[j];
                count = 1;
            }
        }
    }

    return res;
};

console.log(countAndSay(5));
