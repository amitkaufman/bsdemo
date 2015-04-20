# Battleship React live-coding demo

## Installation instructions:

* Run bower install
* Run serve (assuming it will work on port 3000)
* Open http://localhost:3000/index.html

## These are the steps that will be covered in the demo:

### step 1 - greet and show board
* Write the simple app and a board, use the logic.Game object itself and pass as a whole. Handle click down in the board

### step 2 - show hints of solution
* Add the "show solution" and "show hints" checkboxes, start with checked, then onClick, 
    and then show the link state mixin (checkedLink)
    
### step 3 - number of guesses
* Add the GuessCount and show how it is not refreshed though it is changed in game.Board
* Move the click handler to the app. Talk about flux, show how it works
* Add render count on the guess count. Show how shouldComponentUpdate prevents renders
* Replace to React.addons.PureRenderMixin and show that it still works
* Add React.addons.PureRenderMixin to board, and show that stops working - explain about ref compare
* Pass the matrix instead of the game

### step 4 - enter name to start
* Add "Enter your name to start" and get focus using ref and componentDidMount.
* Add button to change the state of "loggedIn"
* Show the board only after loggedIn