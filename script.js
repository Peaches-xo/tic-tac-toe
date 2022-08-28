// THE ODIN PROJECT - TIC TAC TOE JS FILE

    //Player FACTORIES
    const Player = (name, marker, turn) => {
        const getName = () => name; 
        const getMarker = () => marker;
        const yourTurn = turn; 
        return {getName, getMarker, yourTurn};
    };

    const player1 = Player('killerMike', "X", true);
    const player2 = Player('El-P', "O", false);


let gameBoardModule = (function () { //LOGIC & DATA
    'use strict';

    let gameBoardArr = Array(9);

    let _privateMethod = function() {
        let nodeList = document.querySelectorAll('div[data-index]'); //node list of all divs
      
        for (let div of nodeList){
            div.addEventListener('click', (e)=>{
                _addMarkToArray(e); //update array (logic)
               
                displayController.publicMethod(e); //display mark on board from array (ui)
                _checkWinner(gameBoardArr);
                _toggleTurn();// (logic)
            });
        };
    };

    let _addMarkToArray = function(e){  
        if (e.target.textContent ==  ""){ //if div empty...
            //...add currentplayers marker to array
            gameBoardArr[e.target.dataset.index] = (player1.yourTurn ? player1.getMarker() : player2.getMarker());
          };
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

    let _checkWinner = function(arr){
        if ( //across rows
            arr[0] === 'X' && arr[1] === 'X' && arr[2] === 'X' ||
            arr[3] == 'X' && arr[4] == 'X' && arr[5] == 'X' ||
            arr[6] == 'X' && arr[7] == 'X' && arr[8] == 'X' ||
            //down columns
            arr[0] === 'X' && arr[3] === 'X' && arr[6] === 'X' ||
            arr[1] == 'X' && arr[4] == 'X' && arr[7] == 'X' ||
            arr[2] == 'X' && arr[5] == 'X' && arr[8] == 'X' ||
            //diagonals
            arr[0] === 'X' && arr[4] === 'X' && arr[8] === 'X' ||
            arr[2] == 'X' && arr[4] == 'X' && arr[6] == 'X') {
                displayWinner(player1.getName());
                    //call reset screen & reset array
        } else if ( arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O' ||
            arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O' ||
            arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O' ||
            //down columns
            arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O' ||
            arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O' ||
            arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O' ||
            //diagonals
            arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O' ||
            arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O'){
                    displayWinner(player2.getName());
                    //call reset screen & reset array
            };

};

function displayWinner(player){
    console.log (`${player} is the winner`);
    setTimeout(resetGame, 1000);

};







        let publicMethod = function(){
            _privateMethod();
        };

        return {
            publicMethod: publicMethod
        };
     })(); //<pass in any parameters here

     gameBoardModule.publicMethod();


     let displayController = (function () { //UI AND DOM
        'use strict';

        let _addMarkToBoard = function(e){ //change this to render from array
            if (e.target.textContent ==  ""){
                e.target.textContent = (player1.yourTurn ? player1.getMarker() : player2.getMarker());
                // toggleTurn();
            };
        };

             var publicMethod = function(e){
                 _addMarkToBoard(e);
            };

    
             return {
                 publicMethod: publicMethod,

             };
         })();












function resetGame(){
    gameBoardArr = [];
    for (let div of nodeList){
        div.textContent = "";
    };
};



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



//check for winning conditons after 4 turns



// function clickMeButton() {

    // var choices = ["Rock", "Paper", "Scissors"];
    // function getComputerChoice(choices) {
    //     // console.log(choices[Math.floor(Math.random()*choices.length)]);
    //     return choices[Math.floor(Math.random()*choices.length)];
    // }
    
    // return getComputerChoice(choices);
    // }

// function clickMeButton(){
//     getCompChoices();
// };

// function getCompChoices(){
//     var choices = ["Rock", "Paper", "Scissors"];
//     return choices[Math.floor(Math.random()*choices.length)];
// }