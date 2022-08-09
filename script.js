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


// var nav = document.querySelector('.nav');
// var toggleNav = function (){
//     var that = this;
//     console.log(that);
//     setTimeout(function(){
//         console.log(that);
//     }, 1000);
// };
// nav.addEventListener('click', toggleNav, false);

//  var links = document.querySelectorAll('nav li');
//  for (var i = 0; i < links.length; i++){
//     (function (){
//         console.log(this);
//     }).call(links[i]);
// };


//     var myFunction = function (){
//         console.log("myFunction has run")

//     };


// myFunction();


//define module
var Module = (function () {

       

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


    // return {
    //     publicMethod: function (){
    //         privateMethod();
    //         console.log("publicMethod");
    //     // myMethod: function() {
    //     //     console.log('myMethod has been called.');
    //     // }, 
    //     // someOtherMethod: function(){
    //     //     console.log('someotherMethod has been called.');
    //     // }
    //     }
    // };
})();

Module.publicMethod();
// Module.privateMethod();

// const car = {};

// (function(){
//     var start = () => {
//         console.log('start');
//     };

//     const stop = () =>{
//         console.log('stop');
//     };

// })();


// start();
// stop();

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