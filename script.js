// THE ODIN PROJECT - TIC TAC TOE JS FILE
'use strict';
let gameModule = (function(){ //controls flow of game
    let gameBoardArr = Array(9);
    let nodeList = document.querySelectorAll('div[data-index]'); //node list of all divs
    let winnerDisplay = document.querySelector('.winnerDisplay');
    let player1Display = document.querySelector('.names_p1');
    let player2Display = document.querySelector('.names_p2');
    let player1Name = document.querySelector('#name1');
    let player2Name = document.querySelector('#name2');

    // PLAYERS
    const Player = (nameElement, marker, turn) => {
        const getName = () => nameElement.value; 
        const getMarker = () => marker;
        const yourTurn = turn; 
        return {getName, getMarker, yourTurn};
    };

    const player1 = Player(player1Name, "X", true);
    const player2 = Player(player2Name, "O", false);

    // BOARD 
    let gameBoardModule = (function () { //LOGIC & DATA

        let _startGame = function() {
            nodeList.forEach(div=>div.addEventListener('click', _gameFlowFunctions));
        };
    
        let _gameFlowFunctions = function(e){
            if(_checkIfEmpty(e)){ //1. CHECK IF SPACE EMPTY, if so... 

            //make inputs readonly 
            player1Name.readOnly = true;
            player2Name.readOnly = true;

                _addMarkToArray(e); //2.. update array (logic)
                displayController.publicMethod(e, gameBoardArr); //3. display mark on board from array (ui)
    
                if (_checkWinner(gameBoardArr)){ //4. check winner (will return name(truthy) or false)
                    removeListeners();

                    //5. display the winner on screen
                    _checkWinner(gameBoardArr) == player1.getName() ? displayController.displayWinner(player1.getName()) : displayController.displayWinner(player2.getName());

                    //clear array
                    _clearArray();
                    displayController.clearBoard();
    
                } else { //if no winner, next turn
                    _toggleTurn();// (logic) 
                };
            };
        };
    
        let _checkIfEmpty = function(e){ //1. if index of arr at div-index is empty, return true
           return  (gameBoardArr[e.target.dataset.index] == undefined) ? true : false;
        };
    
    
        let _addMarkToArray = function(e){  //= 2. GET DIV INDEX & ADD MARK TO ARRAY AT THAT INDEX
            gameBoardArr[e.target.dataset.index] = (player1.yourTurn ? player1.getMarker() : player2.getMarker());
        };
    
        let _checkWinner = function(arr){ //4. CHECK WINNER
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

                };
                return false;
        };
    
        let _toggleTurn = function(){ //simplify this
            
            if (player1.yourTurn === true) {
                player1.yourTurn = false;
                    player2.yourTurn = true;
            } else if (player2.yourTurn === true){
                    player1.yourTurn = true;
                    player2.yourTurn = false;
            }
            displayController.getScaled();
        };

        let _clearArray = function(){
            gameBoardArr = Array(9); 
        }
       
        let removeListeners = function(){
            nodeList.forEach(div=>div.removeEventListener('click', _gameFlowFunctions));
        };
    
        
        let resetGame = function(){
            winnerDisplay.textContent = "";
            _clearArray();
            displayController.clearBoard();
                //reset player turns 
                player1.yourTurn = true;
                player2.yourTurn = false;

                //clear inputs
                player1Name.value = "";
                player2Name.value = "";

                //reset text inputs to accept input
                player1Name.readOnly = false;
                player2Name.readOnly = false;
            _startGame();
        }
    
    
        let publicMethod = function(){
            _startGame();
        };
    
        return {
            publicMethod: publicMethod,
            resetGame: resetGame,
    
        };
    })(); 

  
    // DISPLAY CONTROLLER *****************************************************
    let displayController = (function () { //UI AND DOM
        let _addMarkToBoard = function(e, arr){ // 3. DISPLAY BOARD FROM ARRAY 
            e.target.textContent = arr[e.target.dataset.index];
        };

        let startBtn = document.querySelector('.btn_start');
            startBtn.addEventListener('click', (e)=>{
                if(e.target.textContent == 'Lets Go'){
                    gameBoardModule.publicMethod();
                    e.target.textContent = 'Reset Game';
                } else if (e.target.textContent == 'Reset Game'){
                    gameBoardModule.resetGame();
                }
            });


        let displayWinner = function (player){ //5. WINNER DISPLAYED ON SCREEN 
                setTimeout(()=>{
                    winnerDisplay.textContent = `${player} is the winner`;
                },1000);
        };

        let clearBoard = function(){
            setTimeout(()=>{
            nodeList.forEach(div=>div.textContent = gameBoardArr[div]); //render board from array
            }, 500);
        }

        let getScaled = function(){
            if (player1.yourTurn){
                player1Display.classList.add('scaled');
                player2Display.classList.remove('scaled');
            } if (player2.yourTurn){
                player2Display.classList.add('scaled');
                player1Display.classList.remove('scaled');
            }
        };

        var publicMethod = function(e, arr){
            _addMarkToBoard(e, arr);
        };
        
        return {
            publicMethod: publicMethod,
            getScaled: getScaled,
            displayWinner: displayWinner,
            clearBoard: clearBoard,
        };
    })();

    return;
})();




   



