// Write a function "ticTacToe" which takes a two-dimensional array of size 3x3.
// Each cell in the two dimensional array can be one of 'O', 'X', or null.
// Return 'O' if O makes a winning row.
// Return 'X' if X makes a winning row.
// Return null if there is no winning row on the board.
//
// Examples:
// > ticTacToe([
//   ['O', 'O', 'O'],
//   ['X', null, 'X'],
//   [null, 'X', null]
//   ])
// 'O'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'X', null],
//   [null, 'X', null]
//   ])
// 'X'
// > ticTacToe([
//   ['O', 'X', 'O'],
//   ['O', 'O', null],
//   [null, 'X', 'X']
//   ])
// null


//ticTacToe
var board = (
    ['', '', ''], ['', '', ''], ['', '', '']);

function ticTacToe(arr) {
    //check to see if X is equal to all 8 winning conditions
    if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
        return "X";
    } else if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
        return "X";
    } else if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
        return "X";
    } else if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
        return "X";
    } else if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
        return "X";
    } else if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
        return "X";
    } else if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
        return "X";
    } else if (board[0][2] == "X" && board[1][2] == "X" && board[2][])
}
console.log(ticTacToe(['X', 'X', 'X'], ['O', 'X', 'X'], ['X', 'O', 'X'], ));