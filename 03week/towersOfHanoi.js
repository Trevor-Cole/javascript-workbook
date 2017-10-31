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

let orderedStackA = stacks.a;
let orderedStackB = stacks.b;
let orderedStackC = stacks.c;

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


function movePiece() {
  
  
} 
// Use pop to remove piece from origin stack and use push(?) to place it on destination stack.
// Is it easier to put this in towersOfHanoi?


function isLegal() {
  orderedStackA.sort(function(uno, dos){return dos-uno}).slice(0)
  orderedStackB.sort(function(uno, dos){return dos-uno}).slice(0)
  orderedStackC.sort(function(uno, dos){return dos-uno}).slice(0);
  if(orderedStackA != stacks.a) {
    console.log('fail');
  } 
  else {
    console.log('ok')
  }
}

// Use a if greater (>) than for pieces.
// If origin piece is greater than destination piece, invalid move, otherwise, go ahead and move.



// Is array 'b' or 'c' full? 
// a:
// b:4,3,2,1
// c:

// (or)

// a:
// b:
// c:4,3,2,1
// Use --- if array b or c is equal to [4,3,2,1] then return WIN


function towersOfHanoi(startStack, endStack) {
  if(endStack === 'b' && startStack === 'a') {
    stacks.b.push(stacks.a.pop());
    orderedStackB.push(orderedStackA.pop());
  }
  if(endStack === 'b' && startStack === 'c') {
    stacks.b.push(stacks.c.pop());
    orderedStackB.push(orderedStackC.pop());
  }
  if(endStack === 'c' && startStack === 'a') {
    stacks.c.push(stacks.a.pop());
    orderedStackC.push(orderedStackA.pop());
  }
  if(endStack === 'c' && startStack === 'b') {
    stacks.c.push(stacks.b.pop());
    orderedStackC.push(orderedStackB.pop());
  }
  if(endStack === 'a' && startStack === 'b') {
    stacks.a.push(stacks.b.pop());
    orderedStackA.push(orderedStackB.pop());
  }
  if(endStack === 'a' && startStack === 'c') {
    stacks.a.push(stacks.c.pop());
    orderedStackA.push(orderedStackC.pop());
  }

  // isLegal.apply(this, arguments); <---Possible use
}

// if startStack is equal to a, pop array a, b pops b, c pops c.




function getPrompt() {
//
  console.log(orderedStackA)
  console.log(orderedStackB)
  console.log(orderedStackC)
//
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

isLegal();
getPrompt();
