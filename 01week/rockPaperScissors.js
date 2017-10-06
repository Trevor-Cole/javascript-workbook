'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Two users. User1 picks first, then User2

  

// Three types of input. Rock, Pape, Siz

// Compare hands

// User1 and user2 pick same hand = tie, else figure out who wins.

//user1 picks rock, user2 picks siz, user1 wins, else user2 wins.

//user1 picks pape, user 2picks rock, user1 wins, else user2 wins.

//user1 picks siz, user2 picks pape, user1 wins, else user2 wins.

const rockPaperScissors = (hand1, hand2) => {
  if(hand1 === hand2) {
    return "It's A Tie!"
  } else {
    if(hand1 === "rock" && hand2 === "scissors" || hand1 === "paper" && hand2 === "rock" || hand1 === "scissors" && hand2 === "paper") {
      return "Player 1 Wins!"
    } else {
      return "Player 2 Wins!"
    }
  }  
}    



function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();

}