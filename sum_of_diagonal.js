// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
    Given a square matrix (2d array) of integers Calculate the absolute difference between
    the sums of its diagonals

    The absolute difference between two variables, is simply one subtracted from
    the other and you get the sum.

    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
*/

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
*/

/**
 * Calculates the absolute diagonal difference of a square matrix. 
 * No builtin methods
 * 
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */
// Define a function called "diagonalDifference" that takes a square matrix as input
function diagonalDifference(sqrMatrix) {
    // Initialize a variable to store the sum of left-to-right diagonal elements

    // Start a for loop to iterate through each row in the matrix
    // Assign the current row of the matrix to a variable for easier access
    // Add the value of the left-to-right diagonal element to the ltrSum
    // Add the value of the right-to-left diagonal element to the rtlSum
    // Calculate the absolute difference between the two diagonal sums and return the result
}
console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));


//Bonus - Builtin methods solution

function functionalDiagonalDifference(sqrMatrix) {
    //Code goes here
}
console.log(functionalDiagonalDifference(squareMatrix1));
console.log(functionalDiagonalDifference(squareMatrix2));

/*****************************************************************************/

module.exports = { diagonalDifference, functionalDiagonalDifference };



function diagonalDifference(sqrMatrix) {
    // Initialize a variable to store the sum of left-to-right diagonal elements
    let leftDiag = 0;
    // Initialize a variable to store the sum of right-to-left diagonal elements
    let rightDiag = 0;
    // Start a for loop to iterate through each row in the matrix
    for (let i = 0; i < sqrMatrix.length; i++) {
        if (sqrMatrix.length !== sqrMatrix[i].length) {
            return false
        }
        // Add the value of the left-to-right diagonal element to the ltrSum
        leftDiag += sqrMatrix[i][i];
        // Add the value of the right-to-left diagonal element to the rtlSum
        rightDiag += sqrMatrix[sqrMatrix[i].length - 1 - i][i]
    }
    // Calculate the absolute difference between the two diagonal sums and return the result
    return Math.abs(leftDiag - rightDiag);
}
console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));


//Bonus - Builtin methods solution

function functionalDiagonalDifference(sqrMatrix) {
    //Code goes here
    let leftDiag = 0;
    let rightDiag = 0;
    sqrMatrix.map((arr, idx) => {
        if (sqrMatrix.length !== arr.length) {
            return false;
        }
        leftDiag += arr[idx];
        rightDiag += arr[arr.length - 1 - idx];
    })
    return Math.abs(leftDiag - rightDiag);
}