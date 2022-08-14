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




//define module
var GameBoard = (function () {

       //needs to contain gameboard array
       let gameboardArray = [];

        var _privateMethod = function() {
            console.log("privateMethod called");
   
        };
        var publicMethod = function(){
            _privateMethod();
            console.log("publicMethod called");
       
        };
        var anotherPublicMethod = function(){
            console.log("anotherPublicMethod called");
           
        };

        return {
            publicMethod: publicMethod,
            anotherPublicMethod: anotherPublicMethod
        };
    })();


