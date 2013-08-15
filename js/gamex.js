//Create the canvas

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 500;
canvas.height = 325;
document.body.appendChild(canvas);

//Current State
var screen = 0;
var clear = false;
var cycle = 0;



//Create home background
var homebgReady = false;
var homebgImage = new Image();
homebgImage.src = "images/homeBackground.png";
homebgImage.onload = function() {
    homebgReady = true;
};


//Create home menu
var titleReady = false;
var title = {
    x: 200,
	y: 50,
	speed: 200
};
var titleImage = new Image();
titleImage.src = "images/title.png";
titleImage.onload = function () {
	titleReady = true;
};


var startGameReady = false;
var startGame = {
	x: 200,
	y: 150
};	
var startGameImage = new Image();
startGameImage.src = "images/startMenu.png";
startGameImage.onload = function () {
	startGameReady = true;
};


//Create level 1 background
var gamebgImage = new Image();
gamebgImage.src = "images/gameBackground.png";
var gamebgReady = false;
gamebgImage.onload = function () {
	gamebgReady = true;
};

//Create level 2 background
var gamebgImage1 = new Image();
gamebgImage1.src = "images/gameBackground2.png";
var gamebgReady1 = false;
gamebgImage1.onload = function () {
	gamebgReady1 = true;
};

//Create lvel 3 background
var gamebgImage2 = new Image();
gamebgImage2.src = "images/gameBackground3.png";
var gamebgReady2 = false;
gamebgImage2.onload = function () {
	gamebgReady2 = true;
};

//Create enemy info
var monster1 = function() {
	this.x = 400;
	this.y = 20;
	this.speed = 100;
	this.attack = 1;
	this.defense = 1;
	this.health = 100;
	this.activeAttack = false;
	this.move = true;
	
	this.attackSwing = function() {
	};

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(attack * 3);
	};
	
	this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};
			
	this.moveForward = function() {
		while(move === true) {
			x -= 5;
		}
	};
};

var monster2 = function() {
	this.x = 400;
	this.y = 20;
	this.speed = 150;
	this.attack = 2;
	this.defense = 3;
	this.health = 125;
	this.activeAttack = false;
	this.move = true;
	
	this.attackSwing = function() {
	};

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(attack * 3);
	};
	
	this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};
			
	this.moveForward = function() {
		while(move === true) {
			x -= 10;
		}
	};
};

var monster3 = function() {
	this.x = 400;
	this.y = 20;
	this.speed = 250;
	this.attack = 5;
	this.defense = 10;
	this.health = 200;
	this.activeAttack = false;
	this.move = true;
	
	this.attackSwing = function() {
	};

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(attack * 3);
	};
	
	this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};
			
	this.moveForward = function() {
		while(move === true) {
			x -= 20;
		}
	};
};


//Create player info
var pawn1 = function() {
	this.x = 100;
	this.y = 20;
	this.speed = 110;
	this.attack = 2;
	this.defense = 2;
	this.health = 120;
	this.activeAttack = false;
	this.move = true;
	
	this.attackSwing = function() {
	};

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(attack * 3);
	};
	
	this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};
			
	this.moveForward = function() {
		while(move === true) {
			x -= 5;
		}
	};
};

var pawn2 = function() {
	this.x = 100;
	this.y = 20;
	this.speed = 200;
	this.attack = 5;
	this.defense = 5;
	this.health = 200;
	this.activeAttack = false;
	this.move = true;
	
	this.attackSwing = function() {
	};

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(attack * 3);
	};
	
	this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};
			
	this.moveForward = function() {
		while(move === true) {
			x -= 15;
		}
	};
};

var pawn3 = function() {
	this.x = 100;
	this.y = 20;
	this.speed = 275;
	this.attack = 15;
	this.defense = 15;
	this.health = 300;
	this.activeAttack = false;
	this.move = true;
	
	this.attackSwing = function() {
	};

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(attack * 3);
	};
	
	this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};
			
	this.moveForward = function() {
		while(move === true) {
			x -= 25;
		}
	};
};

var resetHome = function () {
	startGame.x = 200;
	startGame.y = 150;
	
	title.x = 200;
	title.y = 50;
};

var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

var gameCompile = function () {
	
};

var update = function (modifier) {
	if (screen === 0) {
		if (38 in keysDown) { // Player holding up
			title.y -= title.speed * modifier;
		}
		if (40 in keysDown) { // Player holding down
			title.y += title.speed * modifier;
		}
		if (37 in keysDown) { // Player holding left
			title.x -= title.speed * modifier;
		}
		if (39 in keysDown) { // Player holding right
			title.x += title.speed * modifier;
		}

		// Are they touching?
		if (
			title.x <= (startGame.x + 32)
			&& startGame.x <= (title.x + 32)
			&& title.y <= (startGame.y + 32)
			&& startGame.y <= (title.y + 32)
		) {
			screen = 1;
		}
	} else {
		// if (38 in keysDown) { // Player holding up
		
	}
};

var render = function (cycle) {
	if (screen === 0) {
		if (homebgReady) {
			ctx.drawImage(homebgImage, 0, 0);
		}

		if (titleReady) {
			ctx.drawImage(titleImage, title.x, title.y);
		}

		if (startGameReady) {
			ctx.drawImage(startGameImage, startGame.x, startGame.y);
		}
	} else {
		if (gamebgReady && gamebgReady1 && gamebgReady2) {
			if (cycle < 25) {
				
				ctx.drawImage(gamebgImage, 0, 0);
				
			} 
			if (cycle >= 25 && cycle < 50) {
				canvas.clearRect(0,0,500,325);
				ctx.drawImage(gamebgImage1, 0, 0);
				
			}
			if (cycle >= 50 && cycle < 75) {
				canvas.clearRect(0,0,500,325);
				ctx.drawImage(gamebgImage2, 0, 0);
				
			} else {
				cycle = 0;
			}
		}	
	}
};

var main = function () {
	var now = Date.now();
	var delta = now - then;
	if (clear) {
		canvas.clearRect(0,0,500,325);
		clear = false;
	}
	
	update(delta / 1000);
	render(cycle);
	
	then = now;
};

resetHome();
var then = Date.now();
setInterval(main, 10);

