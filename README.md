# tictactoe
## The Odin Project // Tic Tac Toe game
---
[View Deployment](https://peaches-xo.github.io/tictactoe/)
![plan](/images/plan.png)
![tictactoe screenshot](/images/Screen%20Shot%202022-09-11%20at%205.55.47%20pm.png)


### **Goals** 
Create a functional tic tac toe game in HTML, CSS & Javascript that is playable in the browser. 
 - Use as little global code as possible (Eg use modules & factories)
 - Store the gameboard as an array and render to the page.
 - Build logic that checks when the game is over, check for 3 in a row & tie.
   

---
### **Positives**
The logic for adding a mark, toggling the players, rendering the array and finding a winner came pretty quickly to me. This was a surprise as I had heard of people struggling for a while with this and was prepared for the same to happen to me. 

I used a lot of gradient backgrounds for the text colours this time and although I understand it may not be to everyones tastes, I really enjoyed using such bright colours with subtle glow hovers.

### **Challenges:**
Struggled with knowing what code needs to be private & what should be public. Once I delegated each function to either a logic or display module, it started to become easier to know where to place everything.

After adding the ability for the players to input their names, I was stuck on how to get the value of the input into the Player factory. Found out I could use a reference to the input element itself, passed as a parameter into the factory. 

### **To Come Back To:**

* * * 

## Pseudocode for tictactoe





** STILL TO DO
     - logic for tie. 
     - AI?

     PSEUDO/ NOTES

What am I trying to do currently:

 - move name input code into own functions 

 - make name fields required before button works OR
 - set default names/values for inputs if not provided INSIDE LETS GO CLICK EVENT CHECK FOR VALUES

 


Because a read-only field cannot have a value, required does not have any effect on inputs with the readonly attribute also specified.
 
 So can do EITHER
     - remove required so readonly works
          - make button not clickable until names have been entered (validation on click)
     - remove readonly and find another way to set text to not be able to be edited in game


Additional feature:
    - scrolling bar saying 'please enter your name' 