const gameBoard = document.querySelector(".gameBoard");

const player1 = new Player(true);
const player2 = new Player(false);


gameBoard.addEventListener('click', ()=>{

if (player1.turn){
    gameBoard.textContent = "X";
    player1.toggleTurn();
    player2.toggleTurn();
} else if (player2.turn){
    gameBoard.textContent = "O";
    player1.toggleTurn();
    player2.toggleTurn();
}
    


});



function Player (turn) {
	this.turn = turn;
}


  
Player.prototype.toggleTurn = function() {
	this.turn = !this.turn
}

// player1.toggleTurn()
// player2.toggleTurn()
  
// player1.turn // true
// player2.turn // false