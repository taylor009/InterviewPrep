/**
 *
 * @param matrix
 *
 * matrix = [[0, 1, 1, 2],
 [0, 5, 0, 0],
 [2, 0, 3, 3]]
 */

function matrixElementsSum(matrix) {
    let priceTotal =0;

    let bandIndex = [];

    // Loop for the Row
    for(let i =0; i < matrix.length; i++){
        // Loop for the Column
        for(let j = 0; j < matrix[i].length; j++){
            if (matrix[i][j] === 0){
                bandIndex.push(j);
            } else if(bandIndex.indexOf(j) === -1){
                priceTotal += matrix[i][j];
            }
        }
    }
    return priceTotal;
}
