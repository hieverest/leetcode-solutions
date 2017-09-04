/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
  let len = candies.length, hashTable = {}
  for(let i=0; i<len; i++) {
    if(hashTable[candies[i]]) hashTable[candies[i]] += 1
    else hashTable[candies[i]] = 1
  }
  let variaties = Object.keys(hashTable).length, quantityForEach = len/2
  return variaties >= quantityForEach ? quantityForEach : variaties
};


let test = [1,1,2,2,3,3,4,4]

console.log(distributeCandies(test))