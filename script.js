
//loop through divs that are children of gameboard, add event listener
let nodeList = document.querySelectorAll('div[data-index]'); //node list of all divs
let gameboardArr = [];

for (let div of nodeList){

    div.addEventListener('click', function(e){

        addMarkToBoard(e);
        addMarkToArray(e);
        checkWinner(gameboardArr);
    });
};


function addMarkToBoard(e){
    if (e.target.textContent ==  ""){
        e.target.textContent = (player1.yourTurn ? player1.getMarker() : player2.getMarker());
        toggleTurn();
    };
}

function addMarkToArray(e){
    gameboardArr[e.target.dataset.index] = e.target.textContent; //add marker in array at correct spot
    console.log(gameboardArr);
}

function toggleTurn(){
    if (player1.yourTurn === true) {
        player1.yourTurn = false;
         player2.yourTurn = true;
    } else if (player2.yourTurn === true){
         player1.yourTurn = true;
         player2.yourTurn = false;
    }
};

function checkWinner(arr){
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
                console.log ("X is the winner");
    } else if 
        ( arr[0] === 'O' && arr[1] === 'O' && arr[2] === 'O' ||
        arr[3] == 'O' && arr[4] == 'O' && arr[5] == 'O' ||
        arr[6] == 'O' && arr[7] == 'O' && arr[8] == 'O' ||
        //down columns
        arr[0] === 'O' && arr[3] === 'O' && arr[6] === 'O' ||
        arr[1] == 'O' && arr[4] == 'O' && arr[7] == 'O' ||
        arr[2] == 'O' && arr[5] == 'O' && arr[8] == 'O' ||
        //diagonals
        arr[0] === 'O' && arr[4] === 'O' && arr[8] === 'O' ||
        arr[2] == 'O' && arr[4] == 'O' && arr[6] == 'O'){
                console.log ("O is the winner");
        }
};



    // let winningConditions = [
    //     gameboardArr[0] === 'X' && gameboardArr[1] === 'X' && gameboardArr[2] === 'X',
    //     gameboardArr[3] == 'X' && gameboardArr[4] == 'X' && gameboardArr[5] == 'X',
    //     gameboardArr[6] == 'X' && gameboardArr[7] == 'X' && gameboardArr[8] == 'X',
    //   ];




// function removeListener(e){
//     console.log("from removeListener:" + e.target.dataset.index);
// }






// //define module
// var GameBoard = (function () {

//        //needs to contain gameboard array
//        let gameboardArray = [];

//         var _privateMethod = function() {
//             console.log("privateMethod called");
   
//         };
//         var publicMethod = function(){
//             _privateMethod();
//             console.log("publicMethod called");
       
//         };
//         var anotherPublicMethod = function(){
//             console.log("anotherPublicMethod called");
           
//         };

//         return {
//             publicMethod: publicMethod,
//             anotherPublicMethod: anotherPublicMethod
//         };
//     })();

    // **********************************************

    //Gameboard Object MODULE
        //store gameboard as an array

//Player FACTORIES
const Player = (name, marker, turn) => {
    const getName = () => name; 
    const getMarker = () => marker;
    const yourTurn = turn; 
    
    return {getName, getMarker, yourTurn};
};

const player1 = Player('killerMike', "X", true);
const player2 = Player('El-P', "O", false);


    
    
    // Object displayController MODULE

     //Object gameController Game Control Object  MODULE



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





