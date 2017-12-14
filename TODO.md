# To-Do List

### General
* create a "Character" class & make Enemy and Player subclasses of it
* Idea: Use a static method for updating all of the characters or maybe just all enemies at once?
* include default function parameters where appropriate

### Enemy
* Create the Enemy function, which initiates the Enemy by:
    * Loading the image by setting this.sprite to the appropriate image in the image folder (already provided)
    * Setting the Enemy initial location (you need to implement)
    * Setting the Enemy speed (you need to implement)
* The update method for the Enemy
    * Updates the Enemy location (you need to implement)
    * Handles collision with the Player (you need to implement)
* You can add your own Enemy methods as needed
* * Once you have completed implementing the Player and Enemy, you should instantiate them by:
    * Creating several new Enemies objects and placing them in an array called allEnemies

### Player
* Create the Player function, which initiates the Player by:
    * Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that)
    * Setting the Player initial location
* The update method for the Player (can be similar to the one for the Enemy)
* The render method for the Player (use the code from the render method for the Enemy)
* The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    * Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down.
    * Recall that the player cannot move off screen (so you will need to check for that and handle appropriately).
* If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that).
* You can add your own Player methods as needed.
* Once you have completed implementing the Player and Enemy, you should instantiate them by:
    * Creating a new Player object