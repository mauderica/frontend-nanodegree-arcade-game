// BASE CLASS
class Character {
    constructor(imgString, [initLocX, initLocY], boundary) {
        this.sprite = imgString;
        this.xInitial = initLocX;
        this.yInitial = initLocY;
        this.x = initLocX;
        this.y = initLocY;
        // Character boundary distance from its center coordinates,
        // used in collision detection between Player & Enemies:
        this.boundary = boundary;
    }
    
    // Draw the character on the screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Return character's x1 coordinate - the left-most part of the sprite image
    x1() {
        return this.x - this.boundary;
    }

    // Return character's x2 coordinate - the right-most part of the sprite image
    x2() {
        return this.x + this.boundary;
    }
}


// SUBCLASS
class Enemy extends Character {
    constructor(speed, imgString, [initLocX, initLocY], boundary) {
        super(imgString, [initLocX, initLocY], boundary);
        this.speed = speed;
    }

    // Update the enemy's position
    update(dt) {
        // Once enemy is off-canvas, reset its position:
        if (this.x > 606) {
            this.resetEnemy();
        } else {
            // Parameter: dt, a time delta between ticks
            this.x += (this.speed) * (1 + dt);
            // Check for collisions only of enemies that
            // are on the same row as the player:
            if (this.y === player.y) {
                this.checkCollision();
            }
        }
    }

    resetEnemy() {
        this.x = getRandomIntInclusive(-8, -2) * 100;
    }

    checkCollision() {
        // Solution inspired by this stackoverflow answer:
        // https://stackoverflow.com/questions/306316/determine-if-two-rectangles-overlap-each-other?answertab=votes#tab-top
        if ( player.x1() < this.x2() && player.x2() > this.x1() ) {
            console.log('COLLISION!');
            // TODO: count collisions and display in a scoreboard for player to see
            // TODO: add an effect when collision occurs (Ex: shake, background color, character rotation)
            player.resetPlayer();
        }
    }
}


// SUBCLASS
class Player extends Character {
    constructor(imgString, [initLocX, initLocY], boundary) {
        super(imgString, [initLocX, initLocY], boundary);
        this.xTrial;
        this.yTrial;
    }

    resetPlayer() {
        // Move player back to initial location
        this.x = this.xInitial;
        this.y = this.yInitial;
    }

    // Update the player's position once checks have been performed:
    update(moveDirection) {
        switch (moveDirection) {
            case 'left':
            case 'right':
                this.x = this.xTrial;
                break;
            case 'up':
            case 'down':
                this.y = this.yTrial;
                // If player reaches the water, reset player:
                if (this.y === -21) {
                    console.log('Player has won!');
                    this.resetPlayer();
                    // TODO: count wins and time-to-win and display in a scoreboard for user to see
                    // TODO: add an effect when win occurs (Ex: background color change, character jump)
                }
                break;
            default:
                // console.log('Player has not moved.');
        }
    }

    onCanvasCheck() {
        // TODO: get the canvas limit values (currently 505 & 606, width & height, respectively) from a variable
        // that is used both below,and in engine.js where the canvas is drawn (for ease of updating & maintaining)
        if (this.xTrial >= 505 || this.yTrial > 404 || this.xTrial < 0 || this.yTrial < -21) {
            console.log('Player was trying to move off-canvas.');
            return false;
        } else {
            console.log('Player is on-canvas.');
            return true;
        }
    }   

    handleInput(keyPressed) {        
        switch (keyPressed) {
            // TODO: store the player 'movement' numbers (currently 101 & 83) in a variable that is used both below,
            // and in engine.js where the canvas is drawn (for ease of updating & maintaining)
            case 37: // left
                this.xTrial = this.x - 101;
                console.log(`LEFT key pressed. Trial x-position = ${this.xTrial}.`);
                this.onCanvasCheck() ? this.update('left')
                    : console.log('Player cannot move off-canvas.');
                    // TODO: apply an animation that shakes the player (or other) to indicate
                    // the user tried to move in a direction that is not permitted
                this.xTrial = null;
                break;
            case 38: // up
                this.yTrial = this.y - 83;
                console.log(`UP key pressed. Trial y-position = ${this.yTrial}.`);
                this.onCanvasCheck() ? this.update('up')
                    : console.log('Player cannot move off-canvas.');
                this.yTrial = null;
                break;
            case 39: // right
                this.xTrial = this.x + 101;
                console.log(`RIGHT key pressed. Trial x-position = ${this.xTrial}.`);
                this.onCanvasCheck() ? this.update('right')
                    : console.log('Player cannot move off-canvas.');
                this.xTrial = null;
                break;
            case 40: // down
                this.yTrial = this.y + 83;
                console.log(`DOWN key pressed. Trial y-position = ${this.yTrial}.`);
                this.onCanvasCheck() ? this.update('down')
                    : console.log('Player cannot move off-canvas.');
                this.yTrial = null;
                break;
            default:
                console.log('A key was pressed. No action taken.');
        }
    }

}


// The below was taken from MDN:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function makeEnemies(quantity) {
    for (let i = 0; i < quantity; i++) {
        const speed = getRandomIntInclusive(1, 4);
        // 62, 145, 228 --> the y-coordinates of the rows on which to locate enemies
        let y;
        let x;
        // The below assigns the enemy starting coordinates for variety:
        switch (i) {
            case 1:
            case 7:
            case 13:
                y = 62;
                x = -200;
                break;
            case 2:
            case 8:
            case 14:
                y = 145;
                x = -300;
                break;
            case 3:
            case 9:
            case 15:
                y = 228;
                x = -400;
                break;
            case 4:
            case 10:
                y = 62;
                x = -400;
                break;
            case 5:
            case 11:
                y = 145;
                x = -300;
                break;
            case 6:
            case 12:
                y = 228;
                x = -200;
                break;
            default:
                y = 62;
                x = -200;
        }
        const enemy = new Enemy(speed, 'images/enemy-bug.png', [x,y], collisionRadius);
        allEnemies.push(enemy);
    }
}

// TODO: allow user to select the difficulty level
let difficultyLevel = 2;
let collisionRadius = 35;
let allEnemies = [];

// Vary enemy quantity based on selected difficulty level,
// and instantiate the enemy objects accordingly:
switch (difficultyLevel) {
    case 1:
        makeEnemies(5);
        break;
    case 2:
        makeEnemies(10);
        break;
    case 3:
        makeEnemies(15);
        break;
    default:
        makeEnemies(5);
}


// TODO: Allow user to select player image in a modal
let chosenPlayer = 'images/char-cat-girl.png';
const playerInitCoordinates = [202,394];
let player = new Player(chosenPlayer, playerInitCoordinates, collisionRadius);


const allowedKeys = {
    'ArrowLeft': 37,
    'ArrowUp': 38,
    'ArrowRight': 39,
    'ArrowDown': 40
};

// Modified the below to account for deprecated 'keyCode' property:
document.addEventListener('keyup', function(e) {
    // According to MDN, 'keyCode' is deprecated, so 'key' was used instead
    // https://developer.mozilla.org/en-US/docs/Web/Events/keyup
    player.handleInput(allowedKeys[e.key]);
});