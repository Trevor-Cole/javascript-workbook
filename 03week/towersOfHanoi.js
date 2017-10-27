'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}
//MOVE PIECE///////////////////////////////////////////////////////////////////////////
function movePiece() {
  // Your code here

} 
// Use pop to remove piece from origin stack and use push(?) to place it on destination stack.


//IS LEGAL/////////////////////////////////////////////////////////////////////////////
function isLegal() {
  // Your code here

}
// Use a if greater (>) than for pieces.
// If origin piece is greater than destination piece, invalid move, otherwise, go ahead and move.

//CHECK FOR WIN//////////////////////////////////////////////////////////////////////////
function checkForWin() {
  // Your code here

}
// Is array 'b' or 'c' full? 
// a:
// b:4,3,2,1
// c:

// (or)

// a:
// b:
// c:4,3,2,1
// Use --- if array b or c is equal to [4,3,2,1] then return WIN

//TOWERS OF HANOI//////////////////////////////////////////////////////////////////////////
function towersOfHanoi(startStack, endStack) {
  // Your code here

}


///////////////////////////////////////////////////////////////////////////////////////////

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}


getPrompt();




