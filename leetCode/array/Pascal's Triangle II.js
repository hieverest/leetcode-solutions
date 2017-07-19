/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let pascal = [
    [1],
    [1, 1]
  ]
  if (rowIndex === 0) return [1]
  if (rowIndex === 1) return pascal[1];

  let newLine = [1]
  for (let n = 1; n < rowIndex; n++) {
    for (let i = 1; i < n + 1; i++) {
      newLine[i] = pascal[n][i - 1] + pascal[n][i]
    }
    newLine[n + 1] = 1
    pascal.push(newLine)
    newLine = [1]
  }
  return pascal[rowIndex]
};

const pascalT = (numRows) => {
  let pascal = [
    [1],
    [1, 1]
  ]
  if (numRows === 0) return []
  if (numRows === 1) return [[1]];
  if (numRows === 2) return pascal;

  let newLine = [1]
  for (let n = 2; n < numRows; n++) {
    for (let i = 1; i < n; i++) {
      newLine[i] = pascal[n-1][i - 1] + pascal[n-1][i]
    }
    newLine[n] = 1
    pascal.push(newLine)
    newLine = [1]
  }
  return pascal
}

let raw = pascalT(5)
console.log(raw);
