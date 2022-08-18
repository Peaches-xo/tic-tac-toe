
//loop through divs that are children of gameboard, add event listener


let nodeList = document.querySelectorAll('div[data-index]'); //node list of all divs
let gameboardArr = [];

for (let div of nodeList){
    div.addEventListener('click', function(e){
        // console.log(e.target);

        player1.yourTurn() ? e.target.textContent = player1.getMarker() : e.target.textContent = player2.getMarker();

     

        // e.target.textContent = e.target.dataset.index; //add number to div
        gameboardArr[e.target.dataset.index] = e.target.dataset.index; //add marker in array at correct spot
        console.log(gameboardArr);


        //remove event listeners? here or elsewhere
    });
}






// //define module
// var GameBoard = (function () {

//        //needs to contain gameboard array
//        let gameboardArray = 
//                 ["X","X","X",
//                 "O","O","O",
//                 "X","X","X"];

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
        

        //FACTORIES
            //Player1 Object
                // name, marker, turn

            //Player2 Object
                // name, marker, turn

const Player = (name, marker, turn) => {
   
   
    const getName = () => name; 
    const getMarker = () => marker;
    const yourTurn = () => turn; //not sure bout this bit
    
    const turnToggle = (turn) => {
        return turn = !turn;
    }
    return {getName, getMarker, yourTurn, turnToggle};
};

const player1 = Player('alfred', "X", true);
const player2 = Player('bart', "O", false);


    
    
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





