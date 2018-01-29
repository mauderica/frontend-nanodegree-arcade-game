# To-Do List

### General
* create a "Character" class & make Enemy and Player subclasses of it -- done
* include default function parameters where appropriate

### Enemy
* Create the Enemy function, which initiates the Enemy by:
    * Loading the image by setting this.sprite to the appropriate image in the image folder (already provided) -- done
    * Setting the Enemy initial location (you need to implement) -- done
    * Setting the Enemy speed (you need to implement) -- done
* The update method for the Enemy
    * Updates the Enemy location (you need to implement) -- done
    * Handles collision with the Player (you need to implement) -- done
* You can add your own Enemy methods as needed -- done
* * Once you have completed implementing the Player and Enemy, you should instantiate them by:
    * Creating several new Enemies objects and placing them in an array called allEnemies -- done

### Player
* Create the Player function, which initiates the Player by:
    * Loading the image by setting this.sprite to the appropriate image in the image folder (use the code from the Enemy function as an example on how to do that) -- done
    * Setting the Player initial location -- done
* The update method for the Player (can be similar to the one for the Enemy) -- done
* The render method for the Player (use the code from the render method for the Enemy) -- done
* The handleInput method, which should receive user input, allowedKeys (the key which was pressed) and move the player according to that input. In particular:
    * Left key should move the player to the left, right key to the right, up should move the player up and down should move the player down. -- done
    * Recall that the player cannot move off screen (so you will need to check for that and handle appropriately). -- done
* If the player reaches the water the game should be reset by moving the player back to the initial location (you can write a separate reset Player method to handle that). -- done
* You can add your own Player methods as needed. -- done
* Once you have completed implementing the Player and Enemy, you should instantiate them by:
    * Creating a new Player object -- done

### Questions
* Walk-thru of engine.js & resources.js
* How can I ensure the game only starts once a button is pressed by the user?
* What is the significance and purpose of the 'dt' parameter?
* Simple & effective & fail-proof way of handling collisions?
    * How can I mark a certain area of the canvas as 'occupied'?
    * Maybe key is to handle the collision check from the Enemy perspective?
* Review of my solutions thus far.
* Use of a getter or function to update x1 & x2