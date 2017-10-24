'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // does a whole array have X's?

  if((board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') || (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') || (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X')) {
    return true;
  } else {
    return false;
  }
}

function verticalWin() {
  // Does the first, second, or third index of each array have X's?

  if((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X')) {
    return true;
  } else {
    return false;
  }
}

function diagonalWin() {
  // does 2nd index of 2nd array have an X?
  // is there an X in array 1/index 1 AND is there an X in array 3/index 3 OR is there an X in array 1/index 3 AND array 3/index 1?

  if((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[2][0] === 'X' && board[1][1] === 'X' && board[0][2] === 'X')) {
    return true;
  } else {
    return false;
  }
}

function checkForWin() {
  // are any of the above true?
  if(horizontalWin() === true || verticalWin() === true || diagonalWin() === true) {
    return true;
  } else {
      return false;
    }  
}

function ticTacToe(row, column) {

  // find some way to 'place' an 'X' into the array. 
  // do something like board[0][0]

  // 0-0 board [0][0]
  // 0-1 board [0][1]
  // 0-2 board [0][2]

  // 1-0 board [1][0]
  // 1-1 board [1][1]
  // 1-2 board [1][2]

  // 2-0 board [2][0]
  // 2-1 board [2][1]
  // 2-2 board [2][2]

  //Row 1 --------------------------------------------------------
  if(row === '0' && column === '0') {
    board[0][0] = playerTurn;
  }

  if(row === '0' && column === '1') {
    board[0][1] = playerTurn;
  }

  if(row === '0' && column === '2') {
    board[0][2] = playerTurn;
  }
  //Row 2 --------------------------------------------------------
  if(row === '1' && column === '0') {
    board[1][0] = playerTurn;
  }

  if(row === '1' && column === '1') {
    board[1][1] = playerTurn;
  }

  if(row === '1' && column === '2') {
    board[1][2] = playerTurn;
  }
  //Row 3 --------------------------------------------------------
  if(row === '2' && column === '0') {
    board[2][0] = playerTurn;
  }

  if(row === '2' && column === '1') {
    board[2][1] = playerTurn;
  }

  if(row === '2' && column === '2') {
    board[2][2] = playerTurn;
  }
}

function getPrompt() {
  if(checkForWin() === false) {
    printBoard();
    console.log("It's Player " + playerTurn + "'s turn.");
    rl.question('row: ', (row) => {
      rl.question('column: ', (column) => {
        ticTacToe(row, column);
        getPrompt();
      });
    });
  } else {
    printBoard()
    console.log('Player ' + playerTurn + ' Wins!')
  }
}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} 
 
  getPrompt();


