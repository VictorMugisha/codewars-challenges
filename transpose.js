
function transpose(matrix) {
    let numRows = matrix.length;
    let numCols = matrix[0].length;
    
    let result = []
    for (let i = 0; i < numCols; i++) {
      result.push([])
    }
    
    for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
        result[j][i] = matrix[i][j] 
      }
    }
    return result
  }
  
  let test = [[1,2,3], [4,5,6]]
  let res = transpose(test)
  console.log(res)