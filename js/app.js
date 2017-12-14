// BASE CLASS
class Character {
    constructor(imgString, [initLocX, initLocY]) {
        this.sprite = imgString;
        this.x = initLocX;
        this.y = initLocY;
    }

    // Handle updating character location
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


// SUBCLASS
class Enemy extends Character {
    constructor(speed, imgString = 'images/enemy-bug.png', [initLocX, initLocY]) {
        super(imgString, [initLocX, initLocY]);
        this.speed = speed;
    }

    // Update the enemy's position, required method for game
    update(dt) {
        // handle updating character location --> from super
        super.update(dt);
        // handle collision --> Enemy-specific method
    }

    // Draw the enemy on the screen, required method for game
    render() {
        super.render();
    }
}


// SUBCLASS
class Player extends Character {
    constructor(speed, imgString = 'images/char-cat-girl.png', [initLocX, initLocY]) {
        super(imgString, [initLocX, initLocY]);
        // TODO: add any player-specific properties here
    }

    // Update the player's position, required method for game
    update(dt) {
        // handle updating character location --> from super
        super.update(dt);
        // handle collision?
        // handle user input?
    }

    // Draw the player on the screen, required method for game
    render() {
        super.render();
    }    

    handleInput() {

    }

    resetPlayer() {
        // If the player reaches the water the game should be
        // reset by moving the player back to the initial location
    }
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
