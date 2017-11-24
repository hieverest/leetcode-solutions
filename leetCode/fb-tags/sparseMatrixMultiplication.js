/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var multiply = function(A, B) {
    let res = [];
    for (let aRow = 0; aRow < A.length; aRow++) {
        // When initialize a two dimension array, need to initialize each row each time. Called lazy initialization.
        res[aRow] = [];
        for (let bCol = 0; bCol < B[0].length; bCol++) {
            let cur = 0;
  
            for (let i = 0; i < A[0].length; i++) {
                cur += A[aRow][i] * B[i][bCol];
            }
            res[aRow][bCol] = cur;
            cur = 0;
        }
    }
    
    return res;
  };
  
  let A = [[1,0,0],[-1,0,3]];
  let B = [[7,0,0],[0,0,0],[0,0,1]];
  
  console.log(multiply(A, B));