/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if(s.length === 0) return false
  let stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        stack.push(s[i])
        break
      case '[':
        stack.push(s[i])
        break
      case '{':
        stack.push(s[i])
        break
      case ')':
        if (stack.pop() !== '(') return false
        break
      case ']':
        if (stack.pop() !== '[') return false
        break
      case '}':
        if (stack.pop() !== '{') return false
        break
      default:
        break
    }
  }
  if (stack.length === 0) return true
  else return false
};


let test = '()()()'

console.log(isValid(test));