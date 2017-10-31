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

let orderedStacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

const winningStackB = {
  a: [],
  b: [4, 3, 2, 1],
  c: []
}

const winningStackC = {
  a: [],
  b: [],
  c: [4, 3, 2, 1]
}



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}


function movePiece() {
  
  
} 
// Use pop to remove piece from origin stack and use push(?) to place it on destination stack.
// Is it easier to put this in towersOfHanoi?

const orderize = () => {
  orderedStacks.a.sort(function(uno, dos){return dos-uno});
  orderedStacks.b.sort(function(uno, dos){return dos-uno});
  orderedStacks.c.sort(function(uno, dos){return dos-uno});
  
}


function isLegal() {
  orderize;
  if(stacks.a.toString() === orderedStacks.a.toString()) {
    return true;
  } 
  else {
    return false;
  }
}

// Use a if greater (>) than for pieces.
// If origin piece is greater than destination piece, invalid move, otherwise, go ahead and move.


function checkForWin() {
  if((stacks  == winningStackB) || (stacks == winningStackC)) {
    return true
  }
  else {
    return false
  }
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


function towersOfHanoi(startStack, endStack) {
  if(endStack === 'b' && startStack === 'a') {
    stacks.b.push(stacks.a.pop());
    orderedStacks.b.push(orderedStacks.a.pop());
  }
  if(endStack === 'b' && startStack === 'c') {
    stacks.b.push(stacks.c.pop());
    orderedStacks.b.push(orderedStacks.c.pop());
  }
  if(endStack === 'c' && startStack === 'a') {
    stacks.c.push(stacks.a.pop());
    orderedStacks.c.push(orderedStacks.a.pop());
  }
  if(endStack === 'c' && startStack === 'b') {
    stacks.c.push(stacks.b.pop());
    orderedStacks.c.push(orderedStacks.b.pop());
  }
  if(endStack === 'a' && startStack === 'b') {
    stacks.a.push(stacks.b.pop());
    orderedStacks.a.push(orderedStacks.b.pop());
  }
  if(endStack === 'a' && startStack === 'c') {
    stacks.a.push(stacks.c.pop());
    orderedStacks.a.push(orderedStacks.c.pop());
  }

  // isLegal.apply(this, arguments); <---Possible use
}

// if startStack is equal to a, pop array a, b pops b, c pops c.




function getPrompt() {
  orderize();
  if(checkForWin() === true) {
    console.log('WINNER') 
  } else
    if(isLegal() === true && checkForWin() === false) {  
    printStacks();
    isLegal(); 
    rl.question('start stack: ', (startStack) => {
      rl.question('end stack: ', (endStack) => {
        towersOfHanoi(startStack, endStack);
        getPrompt();           
      });
    });
  }
  else{
    console.log('Invalid Move, try again')
  }
}


getPrompt();
