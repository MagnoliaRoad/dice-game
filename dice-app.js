/* Outline
HOW THE GAME OPERATES
- button roll, rolls the dice and stores in current score variable, player has as many dice rolls as they like. each dice roll adds to the last dice in current score box, current player presses button hold to hold their score next players turn. 
- button hold, holds the current score and moves it to the round score, 
- button new, starts a new game, zeroing out round and score variables, starting the game with Player 1. 

RULES OF THE GAME
- first player to have a round score of 100 wins the game
- rolls snake eyes (two 1's in a row) + 10.
- rolls a 3 once looses turn, current score is zero, next players turn.
*/


//global variables
var scores, roundScore, activePlayer, lastDice, gamePlaying;

initGame();

document.getElementById('btn-roll').addEventListener('click', function() {
    //roll dice
    var dice = Math.floor(Math.random() * 6 + 1);
    //console.log(dice);
    
    //display dice roll
    var DOMdice = document.getElementById('dice');
    DOMdice.style.display = 'block';
    DOMdice.src = 'dice-' + dice + '.png';
    
    // game rules
    if (dice !== 3) {
            roundScore += dice;
            //Update UI
            document.getElementById("current-" + activePlayer) == roundScore;
        } else if (lastDice === 1 && dice === 1) {
            roundScore += dice;
            //update UI for active player current score to round score
            document.getElementById('current-' + activePlayer).textContent == roundScore + 10;
            //next player's turn
            nextPlayer();
        } else { //when player rolls a 3.
            roundScore = 0;
            document.getElementById('dice').style.display = 'block';
            document.getElementById('dice').src = 'dice-' + dice + '.png';
            document.getElementById('current-' + activePlayer).textContent == 0;
            nextPlayer();
        }
    
    lastDice = dice;
    
});

document.getElementById('btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        //add current score to global score
        scores[activePlayer] += roundScore;
        //update UI from current score to round score
        document.getElementById('round-' + activePlayer).textContent = scores[activePlayer];
        
        //check status of winner
        if (scores[activePlayer] >= 20) {
            document.getElementById('player-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice').src = 'blank-dice.png';
            document.getElementById('player-' + activePlayer + '-wrapper').classList.remove = 'active'; 
            document.getElementById('player-' + activePlayer + '-wrapper').classList.add = 'winner';
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
});
    
function nextPlayer() {
    //activePlayer ? activePlayer = 1 : activePlayer = 0;
    if(activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    roundScore = 0;
    
    //Reset UI current score to zero
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    //toggle active class in UI
    document.getElementById('player-0-wrapper').classList.toggle = 'active';
    document.getElementById('player-1-wrapper').classList.toggle = 'active';
    
    //blank dice for restart for next player
    document.getElementById('dice').src = 'blank-dice.png';
}

document.getElementById('btn-new').addEventListener('click', initGame);
    
//write an init function - that will initate gameplay at the time the page loads online.
function initGame() {
    //set all scores to zero
    scores = [0,0];
    roundScore = 0;
    lastDice = 0;
    gamePlaying = true;
    //activePlayer = 0;
        
    //current and round scores are zero
    document.getElementById('round-0').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('round-1').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    
    //reset player names & remove winner class
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 1';
    document.getElementById('player-0-wrapper').classList.remove = 'winner';  
    document.getElementById('player-1-wrapper').classList.remove = 'winner';  
    document.getElementById('player-0-wrapper').classList.add = 'active'; 

    //dice and lastDice is zero
    document.getElementById('dice').src = 'blank-dice.png';
    lastDice = 0;
}


/* TO CONTINUE WORK ON
- finish the winner & active classes within the dice-app, btn-hold event listener and add these elements to the init(). 

-activePlayer is not working with 0 or 1 in scores variable. 
- try another boolean value? Like activePlayer = true is player 1 and when false is player 2. But how can that work with the HTML id's? 

*/







