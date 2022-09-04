// THE ODIN PROJECT - TIC TAC TOE JS FILE
'use strict';

    //Player FACTORIES
    const Player = (name, marker, turn) => {
        const getName = () => name; 
        const getMarker = () => marker;
        const yourTurn = turn; 
        return {getName, getMarker, yourTurn};
    };

    const player1 = Player('killerMike', "X", true);
    const player2 = Player('El-P', "O", false);


let gameModule = (function(){ //controls flow of game
    // PLAYERS
    // BOARD 
    // DISPLAY UI
    return;
})();


let gameBoardModule = (function () { //LOGIC & DATA

    let gameBoardArr = Array(9);
    let nodeList = document.querySelectorAll('div[data-index]'); //node list of all divs
    let winnerDisplay = document.querySelector('.winnerDisplay');

    let _startGame = function() {

        for (let div of nodeList){
            div.addEventListener('click', (e)=>{
                
                if(_checkIfEmpty(e)){ //CHECK IF SPACE EMPTY, if so... 
                    _addMarkToArray(e); //1. update array (logic)
                    displayController.publicMethod(e, gameBoardArr); //2. display mark on board from array (ui)


                    if (_checkWinner(gameBoardArr)){
                        //call reset array(logic), clear screen(display), display Winner(display);
                        console.log(_checkWinner(gameBoardArr));
                        _checkWinner(gameBoardArr) == player1.getName() ? _displayWinner(player1.getName()) : _displayWinner(player2.getName());

                    } else {
                        _toggleTurn();// (logic) 
                    };
                        
                };
            });
        };
    };

    let _checkIfEmpty = function(e){
        console.log("gba[e.targ.data.indx]:" + gameBoardArr[e.target.dataset.index]);
        if (gameBoardArr[e.target.dataset.index] == undefined) {//square is empty 
            return true;
        } else { //square is not empty 
            return false; //do nothing
        }
    };


    let _addMarkToArray = function(e){  //= 1. GET DIV INDEX & ADD MARK TO ARRAY AT THAT INDEX
        gameBoardArr[e.target.dataset.index] = (player1.yourTurn ? player1.getMarker() : player2.getMarker());
    };

    let _toggleTurn = function(){ //simplify this
        if (player1.yourTurn === true) {
            player1.yourTurn = false;
                player2.yourTurn = true;
        } else if (player2.yourTurn === true){
                player1.yourTurn = true;
                player2.yourTurn = false;
        }
    };

    let _checkWinner = function(arr){ //3. CHECK WINNER
        if ( //across rows 
            arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X' ||
            arr[3] === 'X' && arr[4] === 'X' && arr[5] === 'X' ||
            arr[6] === 'X' && arr[7] === 'X' && arr[8] === 'X' ||
            //down columns
            arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X' ||
            arr[1] === 'X' && arr[4] === 'X' && arr[7] === 'X' ||
            arr[2] === 'X' && arr[5] === 'X' && arr[8] === 'X' ||
            //diagonals
            arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X' ||
            arr[2] === 'X' && arr[4] === 'X' && arr[6] === 'X') {
           

return player1.getName();

                // _displayWinner(player1.getName());
                // //call reset screen & reset array
                // return true;
                

        } else if ( arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O' ||
            arr[3] === 'O' && arr[4] === 'O' && arr[5] === 'O' ||
            arr[6] === 'O' && arr[7] === 'O' && arr[8] === 'O' ||
            //down columns
            arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O' ||
            arr[1] === 'O' && arr[4] === 'O' && arr[7] === 'O' ||
            arr[2] === 'O' && arr[5] === 'O' && arr[8] === 'O' ||
            //diagonals
            arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O' ||
            arr[2] === 'O' && arr[4] === 'O' && arr[6] === 'O'){



return player2.getName();
                // _displayWinner(player2.getName());
                // //call reset screen & reset array
                // return true;
                    
            };
            return false;
    };

   
     let _displayWinner = function (player){ 
    
        setTimeout(()=>{
            winnerDisplay.textContent = `${player} is the winner`;
        },900);
        
        setTimeout(resetGame,800);
    };


    let resetGame = function(e){
        console.log("resetGame Called");
        gameBoardArr = Array(9); //empty array
        for (let div of nodeList){ //empty board from array
            console.log("div of nodelist:" + div.textContent);
            div.textContent = gameBoardArr[div];
        };
        //remove text from screen
        setTimeout(()=>{
            winnerDisplay.textContent = '';
        },1500);
        _startGame();


        //reset player turns 

    };




    let publicMethod = function(){
        _startGame();
    };

    return {
        publicMethod: publicMethod,
        resetGame: resetGame,
    };
})(); //<pass in any parameters here

   

// DISPLAY CONTROLLER *********************************
let displayController = (function () { //UI AND DOM
    'use strict';

    let _addMarkToBoard = function(e, arr){ // 2. DISPLAY BOARD FROM ARRAY 
        e.target.textContent = arr[e.target.dataset.index];
    };

    // let _displayWinner = function (player){ //not able to be called from gamemodule bc private
    //     console.log (`${player} is the winner`);
 
        
    //     setTimeout(_resetGame, 1000);

    // };






    let startBtn = document.querySelector('.btn_start');

        startBtn.addEventListener('click', (e)=>{

            if(e.target.textContent == 'Lets Go'){
                gameBoardModule.publicMethod();
                e.target.textContent = 'Reset Game';
            } else if (e.target.textContent == 'Reset Game'){
                gameBoardModule.resetGame();
            }
                 
        });



    var publicMethod = function(e, arr){
        _addMarkToBoard(e, arr);

    };
    
    return {
        publicMethod: publicMethod,
    };
})();






    // let winningConditions = [
    //     [0,1,2],
    //     [3,4,5],
    //     [6,7,8],
    //     [0,4,8],
    //     [2,4,6]
    // ];

    // let [a,b,c] = [gameboardArr[0], gameboardArr[1], gameboardArr[2]];
    // console.log([a,b,c]);



// function removeListener(e){
//     console.log("from removeListener:" + e.target.dataset.index);
// }

    // **********************************************

    //FUNCTIONS TO ADD
        // - render contents of gameboard array to page
        // - allow players to add marks to specific spot, tie to DOM, click gameboard to place marker WITH logic to prevent spots being filled twice

        // - logic that checks when game is over 
        // - allow players to enter names
        // - display that congratulates winner (confetti)
        // - start/restart button


////****** Game Flow
// [Add after core functionality]
//              Prompt or overlay screen to get user name, and marker preference, put into Player object, set turn to true. Set player 2 object to opposite marker & turn to false. 

//display contents of array
//add 9 event listeners with data-index attributes

//on click,
    //Push marker to corresponding array index eg. If clicked on data-index: 3, 
    // If player1 turn = true, push player1.marker to array[3]. ELSE if player2 turn = true, push player2.marker to array[3]
    //Remove click listener from data-index 3. 
    //rerender array to screen
    //increment turn counter
    // toggle turn

