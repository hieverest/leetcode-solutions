/**
 * @param {number} num
 * @return {boolean}
 */
// 最快递归
var isUgly = function(num) {
  if (num <= 0) {return false;}
  if (num == 1) {return true;}
  if (num % 2 == 0) {
      return isUgly(num/2);
  }
  if (num % 3 == 0) {
      return isUgly(num/3);
  }
  if (num % 5 == 0) {
      return isUgly(num/5);
  }
  return false;
};

// my solution
var isUgly = function (num) {

  let factors = getFactors(num, [])
  for(let i = 0; i< factors.length; i++) {
    if (factors[i] !== 2 && factors[i] !== 3 && factors[i] !== 5 && factors[i] !== 1) return false
  }
  return true
};

let getFactors = (num, factors) => {
  if(num === 0) return [0]
  if (num % 2 === 0) {
    factors.push(2)
    num = num / 2
    return getFactors(num, factors)
  } else if (num % 3 === 0) {
    factors.push(3)
    num = num / 3
    return getFactors(num, factors)
  } else if (num % 5 === 0) {
    factors.push(5)
    num = num / 5
    return getFactors(num, factors)
  }
  else {
    factors.push(num)
    return factors
  }
}

console.log(isUgly(-14));
console.log(getFactors(0, []));