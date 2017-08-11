/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  if(word.length ===0) return false
  if(word.charCodeAt(0) < 91 ) {
    if(word.charCodeAt(1)< 91) {
      for(let i=2; i<word.length; i++) {
        if(word.charCodeAt(i) > 91) return false
      }
      return true
    } else {
      for(let i=1; i<word.length; i++) {
        if(word.charCodeAt(i) < 91) return false
      }
      return true
    }
  } else {
    for(let i=1; i<word.length; i++) {
      if(word.charCodeAt(i) < 91) return false
    }
    return true
  }
};

let test = 'USA', test1 = 'Usa', test2 = 'usa', test3='USa', test4='uSA'
console.log(detectCapitalUse(test));
console.log(detectCapitalUse(test1));
console.log(detectCapitalUse(test2));
console.log(detectCapitalUse(test3));
console.log(detectCapitalUse(test4));
