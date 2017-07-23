/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
// js里的最快解法, 跟我思路一样, 但有一个很巧妙的处理. 所以比我少了一个Loop, 而且也节省了一定的空间.
var findRestaurant = function (list1, list2) {
  var map = new Map();
  list1.forEach((item, index) => {
    map.set(item, index);
  });
  var result = [];
  var min = Infinity;
  list2.forEach((item, index) => {
    if (map.has(item)) {
      if ((map.get(item) + index) <= min) {
        if ((map.get(item) + index) < min) result = []; // 这里的小于号, 这样就排除了会误推入list2第一个common element的情况, 因为必然小于infinity, 但是不一定是最小值
        result.push(item);
        min = map.get(item) + index;
      }
    }
  });
  return result;
};

// var findRestaurant = function (list1, list2) {
//   let hashMap = {}, minIdx = Infinity, resultMap = {}, result = []
//   list1.forEach((ele, idx) => {
//     hashMap[ele] = idx
//   })
//   list2.forEach((ele, idx) => {
//     if (hashMap.hasOwnProperty(ele)) {
//       let sumIdx = hashMap[ele] + idx
//       resultMap[ele] = sumIdx
//       minIdx = Math.min(minIdx, sumIdx)
//     }
//   })
//   Object.keys(resultMap).forEach(key => {
//     if (resultMap[key] === minIdx) result.push(key)
//   })
//   return result
// };


console.log(findRestaurant(["Shogun", "Tapioca Express", "Burger King", "KFC"], ["KFC", "Shogun", "Burger King"]));