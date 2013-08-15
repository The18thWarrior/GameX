//Create home background
var homebgImage = new Image();
homebgImage.src = "images/homeBackground.png";

//Create Game Background
var gamebgImage = new Image();
gamebgImage.src = "images/gameBackground.png";

var hillbg = new Image();
hillbg.src = "images/hillBackground.png";

var skybg = new Image();
skybg.src = "images/skyBackground.png";

var trees = new Image();
trees.src = "images/treesBackground.png";

var sun = new Image();
sun.src = "images/sun.png";

//Create global variables
var gamex = {};
gamex.title = true;
gamex.pressedKeys = [];
gamex.score = 0;
gamex.enemyScore = 0;
gamex.pawns = [];
gamex.pawnx = 0;
gamex.enemies = [];
gamex.enemyx = 1200;
gamex.frontenemy = 0;
gamex.frontPawnType = "p";
gamex.frontpawn = 0;
gamex.bgrender = false;
gamex.menu = [];
gamex.pawnNo = 0;
gamex.monsterTimer = 0;
gamex.monsterNo = 0;
gamex.score = 0;
gamex.castle1Health = 500;
gamex.castle2Health = 500;
gamex.cloudTimer = 0;
gamex.clouds = [];
gamex.cloudNo = 0;
gamex.misc = [];
gamex.miscNo = 0;
gamex.pause = false;
gamex.pauseOff = true;

// cloud constructor
var cloud = function() {
	this.image = new Image();
	this.image.src = "images/cloud1.png";
	this.x = 0;
	this.y = Math.floor(Math.random()*180);
	this.speed = Math.floor(Math.random()*5);
	this.move = function() {
		this.x += 1/this.speed;
	};
};

// castle 1 object
var castle1 = {
	health: 500,
	x: 0,
	y: 400
};

//castle 1 image
var castle1Image = new Image();
castle1Image.src = "images/castle1.png";

//castle 2 object
var castle2 = {
	health: 500,
	x: 1050,
	y: 400
};

//castle 2 image
var castle2Image = new Image();
castle2Image.src = "images/castle2.png";

//Delete image
var deleteImage = new Image();
deleteImage.src = "images/dead.png";

// key map
var KEY = {
    UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39,
	P: 80,
	C: 67,
	K: 75,
	A: 65,
	M: 77
};

//Create home menu
var title = {
    x: 550,
	y: 150,
	speed: 10
};
var titleImage = new Image();
titleImage.src = "images/title.png";

var startGame = {
	x: 550,
	y: 250, 
	on: false,
	release: true
};	
var startGameImage = new Image();
startGameImage.src = "images/startMenu.png";

var startGameImage1 = new Image();
startGameImage1.src = "images/startMenu1.png";


//Functions for title screen
function moveTitle() {
	if (gamex.title === true) {
		//use our custom timer to continuously check if a key is pressed
		if (gamex.pressedKeys[KEY.UP]) {
			title.y -= title.speed;
		}
		if (gamex.pressedKeys[KEY.DOWN]) {
			title.y += title.speed;
		}
		if (gamex.pressedKeys[KEY.LEFT]) {
			title.x -= title.speed;
		}
		if (gamex.pressedKeys[KEY.RIGHT]) {
			title.x += title.speed;
		}
	}
}

// Function to check if the title is touching the start button
function titleTouch() {
	if (title.x <= (startGame.x + 32) && startGame.x <= (title.x + 32) && title.y <= (startGame.y) && startGame.y <= (title.y + 40)) {
			gamex.title = false;
			gamex.bgrender = false;
		}
}

//Game Controls
//Create pawn game button
var pawnButton = {
	x: 25,
	y: 550,
	on: false,
	release: true,
	newPawn: function() {
		gamex.pawns[gamex.pawnNo] = new pawn1();
		gamex.pawnNo++;
	}
	
};
var pawnButtonimage = new Image();
pawnButtonimage.src = "images/Buttons/pawn1.png";

var pawnButtonimage1 = new Image();
pawnButtonimage1.src = "images/Buttons/pawn2.png";

//Create knight game button
var knightButton = {
	x: 105,
	y: 550,
	on: false,
	release: true,
	newKnight: function() {
		gamex.pawns[gamex.pawnNo] = new knight1();
		gamex.pawnNo++;
	}
};

var knightButtonimage = new Image();
knightButtonimage.src = "images/Buttons/knight1.png";

var knightButtonimage1 = new Image();
knightButtonimage1.src = "images/Buttons/knight2.png";

//Create catapult game button
var catapultButton = {
	x: 195,
	y: 550,
	on: false,
	release: true,
	newCatapult: function() {
		gamex.pawns[gamex.pawnNo] = new catapult1();
		gamex.pawnNo++;
	}
};

var catapultButtonimage = new Image();
catapultButtonimage.src = "images/Buttons/catapult1.png";

var catapultButtonimage1 = new Image();
catapultButtonimage1.src = "images/Buttons/catapult2.png";

//Create pause game button
var pauseButton = {
	x: 1100,
	y: 550,
	on: false,
	release: true,
	pauseGame: function() {
		gamex.pause = true;
	}
};

var pauseButtonimage = new Image();
pauseButtonimage.src = "images/Buttons/pause1.png";

var pauseButtonimage1 = new Image();
pauseButtonimage1.src = "images/Buttons/pause2.png";

//Button Press Utility
function buttonPress() {
	if (gamex.pressedKeys[KEY.A] && pawnButton.on === false) {
		pawnButton.newPawn();
		pawnButton.on = true;
	} 
	if (gamex.pressedKeys[KEY.K] && knightButton.on === false) {
		knightButton.newKnight();
		knightButton.on = true;
	}
	if (gamex.pressedKeys[KEY.C] && catapultButton.on === false) {
		catapultButton.newCatapult();
		catapultButton.on = true;
	}
	if (gamex.pressedKeys[KEY.P] && pauseButton.on === false) {
		pauseButton.pauseGame();
		pauseButton.on = true;
	}
}

//Pause Menu Utility
//Create Menu Button
var menuButton = {
	x: 525,
	y: 245,
	on: false,
	release: true
};

var menuButtonimage = new Image();
menuButtonimage.src = "images/Buttons/mainMenu.png";

var menuButtonimage1 = new Image();
menuButtonimage1.src = "images/Buttons/mainMenu1.png";

//Create Resume Button
var resumeButton = {
	x: 542,
	y: 320,
	on: false,
	release: true
};

var resumeButtonimage = new Image();
resumeButtonimage.src = "images/Buttons/resume.png";

var resumeButtonimage1 = new Image();
resumeButtonimage1.src = "images/Buttons/resume1.png";

//Pause Background
var pauseBackground = new Image();
pauseBackground.src = "images/pauseBackground.png";

//Pause Key Listener
function pausePress() {
	if (gamex.pressedKeys[KEY.P] && pauseButton.on === false) {
		pauseButton.pauseGame();
		gamex.pause = false;
		pauseButton.on = true;
	}
	if (gamex.pressedKeys[KEY.M]) {
		reset();
		gamex.pause = false;
	}
}

//Catapult Constructor
var catapult1 = function() {
	this.x = 100;
	this.y = 475;
	this.speed = 1;
	this.attack = 2;
	this.defense = 2;
	this.health = 120;
	this.activeAttack = false;
	this.move = true;
	this.pawnImage = [];
	catapultButton.release = false;
	for (var i = 0; i < 8; i++) {
		this.pawnImage[i] = new Image();
		this.pawnImage[i].src = "images/catapult1/run" + (i) + ".png";
	}
	this.imageIndex = 1;
	this.counter3 = 1;
	this.padding = 15;
	this.type = "c";
	
	//this.attackSwing = function() {
	//;
	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(this.attack * 3);
	};
	
	/*this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};*/
			
	this.move1 = function() {
		if(this.move === true) {
			this.x += 1/this.speed;
		}
	};
};

//Knight Constructor
var knight1 = function() {
	this.x = 100;
	this.y = 435;
	this.speed = .75;
	this.attack = 2;
	this.defense = 2;
	this.health = 120;
	this.activeAttack = false;
	this.move = true;
	this.pawnImage = [];
	knightButton.release = false;
	for (var i = 0; i < 8; i++) {
		this.pawnImage[i] = new Image();
		this.pawnImage[i].src = "images/knight1/run" + (i) + ".png";
	}
	this.imageIndex = 1;
	this.counter3 = 1;
	this.padding = 45;
	this.type = "k";
	
	//this.attackSwing = function() {
	//;

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(this.attack * 3);
	};
	
	/*this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};*/
			
	this.move1 = function() {
		if(this.move === true) {
			this.x += 1/this.speed;
		}
	};
};

//Pawn Constructor
var pawn1 = function() {
	this.x = 100;
	this.y = 507;
	this.speed = .5;
	this.attack = 2;
	this.defense = 2;
	this.health = 120;
	this.activeAttack = false;
	this.move = true;
	this.pawnImage = [];
	pawnButton.release = false;
	for (var i = 0; i < 12; i++) {
		this.pawnImage[i] = new Image();
		this.pawnImage[i].src = "images/pawn1/run" + (i+1) + ".png";
	}
	this.imageIndex = 1;
	this.counter3 = 1;
	this.padding = 0;
	this.type = "p";
	
	//this.attackSwing = function() {
	//;

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-(this.attack * 3);
	};
	
	/*this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};*/
			
	this.move1 = function() {
		if(this.move === true) {
			this.x += 1/this.speed;
		}
	};
};


//monster 1 constructor
var monster1 = function() {
	this.x = 1000;
	this.y = 500;
	this.speed = .90;
	this.attack = 2;
	this.defense = 2;
	this.health = 120;
	this.activeAttack = false;
	this.move = true;
	this.monsterImage = [];
	this.attackSequence = [];
	for (var i = 0; i < 10; i++) {
		this.monsterImage[i] = new Image();
		this.monsterImage[i].src = "images/enemy1/run" + (i+2) + ".png";
	}
	for (var o = 1; o < 16; o++) {
		this.attackSequence[o] = new Image();
		this.attackSequence[o].src = "images/enemy1/attack" + (o) + ".png";
	}
	this.imageIndex = 1;
	this.attackIndex = 0;
	this.counter3 = 0;
	this.counter4 = 1;
	this.padding = 0;
	this.type = "m";
	
	//this.attackSwing = function() {
	//;

	
	this.attackPlayer = function(player) {
		// attackSwing();
		player.health = player.health-((this.attack * 2)/33);
	};
	
	/*this.attackRepeat = function(enemy) {
		while(activeAttack === true) {
			setTimeout(attackPlayer(enemy),1000);
		}
	};*/
			
	this.move1 = function() {
		if(this.move === true) {
			this.x -= 1/this.speed;
		}
	};
};

//Barricade Constructor
var barricade1 = function () {
	this.x = 300;
	this.y = 507;
	this.attack = 1;
	this.speed = .5;
	this.image = new Image();
	//this.image.src = "images/misc/";
};

//Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.id = "canvas";
canvas.width = 1200;
canvas.height = 600;
document.body.appendChild(canvas);

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
}

//On DOM ready
$(function(){
	//set interval to call gameloop every 30 milliseconds
	gamex.timer = setInterval(gameloop, 15);
	
	// mark down 
	//what key is don and up into an array called pressedKeys
	$(document).keydown(function(e){
		gamex.pressedKeys[e.which] = true;
		});
	
	$(document).keyup(function(e){
        gamex.pressedKeys[e.which] = false;
		pawnButton.on = false;
		knightButton.on = false;
		catapultButton.on = false;
		pauseButton.on = false;
    });
	
	canvas.addEventListener('click', function(evt) {
        var mousePos = getMousePos(canvas, evt);
		mouseClick(mousePos);
	});
	
	canvas.addEventListener('mousedown', function(evt) {
        var mousedown = getMousePos(canvas, evt);
		mouseDown(mousedown);
	});
	
	canvas.addEventListener('mouseup', function(evt) {
        var mouseup = getMousePos(canvas, evt);
		mouseUp(mouseup);
	});
});


//Main game loop
function gameloop() {
	if (gamex.pause === false) {
		renderBackground();
		if (gamex.title === true) {
			titleloop();
		} else {
			rungame();
		}
	} else {
		pauseMenu();
	}
	
}

// Function to create home and game backgrounds. 
function renderBackground() {
		if (gamex.title === true) {
			ctx.drawImage(homebgImage, 0, 0);
			if (startGame.on === false) {
				ctx.drawImage(startGameImage, startGame.x, startGame.y);
			} else {
				ctx.drawImage(startGameImage1, startGame.x, startGame.y);
			}
			gamex.bgrender = true;
		}
		else {
			ctx.drawImage(skybg, 0, 0);
			ctx.drawImage(hillbg, 0, 0);
			ctx.drawImage(trees, 0, 300);
			ctx.drawImage(sun, 1000, 70);
			ctx.drawImage(castle1Image, castle1.x, castle1.y);
			ctx.drawImage(castle2Image, castle2.x, castle2.y);
			gamex.bgrender = true;
			gamex.cloudTimer++;
		}
	
}

//Function to draw title and check for title/start game interaction
function titleloop() {
	moveTitle(5);
	ctx.drawImage(titleImage, title.x, title.y);
	titleTouch();
	
}

//Pause function
function pauseMenu() {
	var radius = 20;
	ctx.drawImage(pauseBackground, 0, 0);
	
	ctx.lineJoin = "round";
	ctx.lineWidth = radius;
	ctx.strokeStyle="#948e8e";
	ctx.strokeRect(450+(radius/2), 200+(radius/2), 300-radius, 200-radius);
	ctx.fillStyle="#948e8e";
	ctx.fillRect(450+(radius/2), 200+(radius/2), 300-radius, 200-radius);
	
	if (menuButton.on === false) {
		ctx.drawImage(menuButtonimage, menuButton.x, menuButton.y);
	} else {
		ctx.drawImage(menuButtonimage1, menuButton.x, menuButton.y);
	}
	
	if (resumeButton.on === false) {
		ctx.drawImage(resumeButtonimage, resumeButton.x, resumeButton.y);
	} else {
		ctx.drawImage(resumeButtonimage1, resumeButton.x, resumeButton.y);
	}
	
	pausePress();
	
}	

//Main function for game loop
function rungame() {
	movePlayers();
	drawMenu();
	buttonPress();
	printScore();
	if (gamex.monsterTimer == 300) {
		createMonsters();
		gamex.monsterTimer = 0;
	}
	gamex.monsterTimer++;
	if (gamex.cloudTimer > 400) {
		createClouds();
		gamex.cloudTimer = 0;
	}
	//calculateHealth();
	//calculateScore();
	drawAll(gamex.pawns, gamex.enemies, gamex.clouds, gamex.misc);
}

//Function to draw the game menu
function drawMenu() {
	if (pawnButton.on === false) {
		ctx.drawImage(pawnButtonimage, pawnButton.x, pawnButton.y);
	} else {
		ctx.drawImage(pawnButtonimage1, pawnButton.x, pawnButton.y);
	}
	
	if (knightButton.on === false) {
		ctx.drawImage(knightButtonimage, knightButton.x, knightButton.y);
	} else {
		ctx.drawImage(knightButtonimage1, knightButton.x, knightButton.y);
	}
	
	if (catapultButton.on === false) {
		ctx.drawImage(catapultButtonimage, catapultButton.x, catapultButton.y);
	} else {
		ctx.drawImage(catapultButtonimage1, catapultButton.x, catapultButton.y);
	}
	
	ctx.drawImage(pauseButtonimage, pauseButton.x, pauseButton.y);
}

//Function to update HTML to debug
function printScore() {
		$("#score").text(gamex.enemyScore);
}

//Function to create cloud and modify cloudNo Gamex variable
function createClouds() {
	gamex.clouds[gamex.cloudNo] = new cloud();
	gamex.cloudNo++;
}

//Function to create monsters and modify the monsterNo Gamex variable
function createMonsters() {
	gamex.enemies[gamex.monsterNo] = new monster1();
	gamex.monsterNo++;
}

//Function to draw all sprites: pawns, monsters, and clouds
function drawAll(pawn, m, c, misc) {
	for (var i = 0; i < pawn.length; i++) {
		if (pawn[i] != null) {
				ctx.drawImage(pawn[i].pawnImage[pawn[i].counter3], pawn[i].x, pawn[i].y);
			if (pawn[i].imageIndex%4==0) {
				pawn[i].counter3++;
			}
		}		
	}
	
	if (m.length !== 0) {	
		for (var u = 0; u < m.length; u++) {
			if (m[u].activeAttack === false) {
				ctx.drawImage(m[u].monsterImage[m[u].counter3], m[u].x, m[u].y);
			} else {
				ctx.drawImage(m[u].attackSequence[m[u].counter4], m[u].x, m[u].y);
			}
			if (m[u].imageIndex%3==0) {
				m[u].counter3++;
			}
			if (m[u].attackIndex % 3 == 0) {
				m[u].counter4++;
			}
		}
	}
	
	if (misc.length !== 0) {
		for (var mm = 0; mm < misc.length; mm++) {
			ctx.drawImage(misc[mm].image, misc[mm].x, misc[mm].y);
		}
	}
	
	if (c.length !== 0) {
		for (var l = 0; l < c.length; l++) {
			ctx.drawImage(c[l].image, c[l].x, c[l].y);
		}
	}
}

// Function to calculate and move each sprite type
function movePlayers() {
	// Calculate for pawns
	if (gamex.pawns !== 0) {
		var pawnContact = 0;
		var pawnFront = 0;
		var pawnType = "p";
		//Loop to go through all pawn objects
		for (var pa = 0; pa < gamex.pawns.length; pa++) {
			if (gamex.pawns[pa] != null) {
				if (gamex.pawns[pa].health < 0) {
					delete gamex.pawns[pa];
					gamex.enemyScore += 200;
				} else {
				//Check to move pawn forward
					if (gamex.pawns[pa].x+gamex.pawns[pa].padding < castle2.x - 50 && gamex.pawns[pa].x+gamex.pawns[pa].padding < gamex.enemyx) {
						gamex.pawns[pa].move1();
					} 
					// Check to continue moving the image Index forward (to allow sprite animation)
					if (gamex.pawns[pa].imageIndex < gamex.pawns[pa].pawnImage.length*3) {
						gamex.pawns[pa].imageIndex++;
					} else {
						//Resetting index and counters
						gamex.pawns[pa].imageIndex = 1;
						gamex.pawns[pa].counter3 = 1;
					}
					// Check to set the pawn with the longest x as the forward pawnx
					if (gamex.pawns.length !== 0 && gamex.pawns[pa].x > pawnContact) {
							pawnContact = gamex.pawns[pa].x + 50;
							pawnFront = pa;
							pawnType = gamex.pawns[pa].type;
					}
				}
			}
		}
		gamex.pawnx = pawnContact;
		gamex.frontpawn = pawnFront;
		gamex.frontPawnType = pawnType;
	}
	//Calculate for monsters
	if (gamex.enemies !== 0) {
		var enemyContact = 1200;
		var enemyNumber = 0;
		//Loop to go through all enemy objects
		for (var en = 0; en < gamex.enemies.length; en++) {
			// Check to move enemies forward
			if (gamex.enemies[en].x-gamex.enemies[en].padding > castle1.x + 200 && gamex.enemies[en].x-gamex.enemies[en].padding  > gamex.pawnx) {
				gamex.enemies[en].move1();
				gamex.enemies[en].activeAttack = false;
			} else {
				// Attack frontpawn
				gamex.enemies[en].activeAttack = true;
				if (gamex.pawns[gamex.frontpawn] != null) {
					gamex.enemies[en].attackPlayer(gamex.pawns[gamex.frontpawn]);
				} else {
					gamex.enemies[en].attackPlayer(castle1);
				}
			}
			// Check to move index forward
			if (gamex.enemies[en].imageIndex < gamex.enemies[en].monsterImage.length*3) {
				gamex.enemies[en].imageIndex++;
			} else {
				// Reset index and counter
				gamex.enemies[en].imageIndex = 1;
				gamex.enemies[en].counter3 = 0;
				
			}
			
			// Check for attack index to move forward
			if (gamex.enemies[en].attackIndex < (gamex.enemies[en].attackSequence.length*3)-3) {
				gamex.enemies[en].attackIndex++;
			} else {
				gamex.enemies[en].attackIndex = 1;
				gamex.enemies[en].counter4 = 1;
			}	
		
			//Check to set the front enemy to enemyx and the enemy number to frontEnemy
			if (gamex.enemies[en].x < enemyContact && gamex.enemies.length !== 0) {
					enemyContact = gamex.enemies[en].x - 35;
					enemyNumber = en;
			}
		}
		gamex.enemyx = enemyContact;
		gamex.frontenemy = enemyNumber;
	}
	//Check to move the cloud objects.
	if (gamex.clouds !== 0) {
		for (var cl = 0; cl < gamex.clouds.length; cl++) {
			if (gamex.clouds[cl].x <= canvas.width + 20) {
				gamex.clouds[cl].move();
			}
		}
	}				
}

//Function to calculate the total health of each team
function calculateHealth() {

}

//Function to calculate the total score for the player. 
function calculateScore() {

}

//Function to reset game
function reset() {
	gamex.score = 0;
	gamex.pawns.length = 0;
	gamex.enemies.length = 0;
	gamex.clouds.length = 0;
	gamex.frontenemy = 0;
	gamex.frontpawn = 0;
	gamex.pawnNo = 0;
	gamex.monsterTimer = 0;
	gamex.monsterNo = 0;
	gamex.castle1Health = 500;
	gamex.castle2Health = 500;
	gamex.cloudTimer = 0;
	gamex.cloudNo = 0;
	title.x = 550;
	title.y = 150;
	canvas.width = canvas.width;
	gamex.title = true;
}


//Function to register mouse clicks
function mouseClick(e) {
	if (gamex.pause === false) {
		//Home screen mouse clicks
		if (gamex.title === true && e.x > (startGame.x) && e.x <= (startGame.x+90) && e.y >= (startGame.y) && e.y <= (startGame.y+45)) {
			gamex.title = false;
			gamex.bgrender = false;
		}
		//Main game mouse clicks
		if (gamex.title === false) {
			if (e.x > pawnButton.x && e.x <= (pawnButton.x+80) && e.y > pawnButton.y && e.y <= (pawnButton.y+40)) {
				pawnButton.newPawn();
			} 
			if (e.x > knightButton.x && e.x <= (knightButton.x+85) && e.y > knightButton.y && e.y <= (knightButton.y+40)) {
				knightButton.newKnight();
			}
			if (e.x > catapultButton.x && e.x <= (catapultButton.x+110) && e.y > catapultButton.y && e.y <= (catapultButton.y+40)) {
				catapultButton.newCatapult();
			}
			if (e.x > pauseButton.x && e.x <= (pauseButton.x+30) && e.y > pauseButton.y && e.y <= (pauseButton.y+30)) {
				pauseButton.pauseGame();
			}
			
		}
	} else {
		//Pause menu mouse clicks
		if (e.x > menuButton.x && e.x <= (menuButton.x+155) && e.y > menuButton.y && e.y <= (menuButton.y+35)) {
			reset();
			gamex.pause = false;
		}
		if (e.x > resumeButton.x && e.x <= (resumeButton.x+115) && e.y > resumeButton.y && e.y <= (resumeButton.y+35)) {
			gamex.pause = false;
			pauseButton.on = true;
		}
	}
}

//Mouse down
function mouseDown(e) {
	if (gamex.pause === false) {
		//Home screen mouse clicks
		if (gamex.title === true && e.x > (startGame.x) && e.x <= (startGame.x+90) && e.y >= (startGame.y) && e.y <= (startGame.y+45)) {
			startGame.on = true;
		}
		//Main game mouse clicks
		if (gamex.title === false) {
			if (e.x > pawnButton.x && e.x <= (pawnButton.x+80) && e.y > pawnButton.y && e.y <= (pawnButton.y+40)) {
				pawnButton.on = true;
			} 
			if (e.x > knightButton.x && e.x <= (knightButton.x+85) && e.y > knightButton.y && e.y <= (knightButton.y+40)) {
				knightButton.on = true;
			}
			if (e.x > catapultButton.x && e.x <= (catapultButton.x+110) && e.y > catapultButton.y && e.y <= (catapultButton.y+40)) {
				catapultButton.on = true;
			}
			if (e.x > pauseButton.x && e.x <= (pauseButton.x+30) && e.y > pauseButton.y && e.y <= (pauseButton.y+30)) {
				pauseButton.on = true;
			}
			
		}
	} else {
		//Pause menu mouse clicks
		if (e.x > menuButton.x && e.x <= (menuButton.x+155) && e.y > menuButton.y && e.y <= (menuButton.y+35)) {
			menuButton.on = true;
		}
		if (e.x > resumeButton.x && e.x <= (resumeButton.x+115) && e.y > resumeButton.y && e.y <= (resumeButton.y+35)) {
			resumeButton.on = true;
		}
	}
}

//Mouse up
function mouseUp(e) {
	if (gamex.pause === false) {
		//Home screen mouse clicks
		if (gamex.title === true && e.x > (startGame.x) && e.x <= (startGame.x+90) && e.y >= (startGame.y) && e.y <= (startGame.y+45)) {
			startGame.on = false;
		}
		//Main game mouse clicks
		if (gamex.title === false) {
			if (e.x > pawnButton.x && e.x <= (pawnButton.x+80) && e.y > pawnButton.y && e.y <= (pawnButton.y+40)) {
				pawnButton.on = false;
			} 
			if (e.x > knightButton.x && e.x <= (knightButton.x+85) && e.y > knightButton.y && e.y <= (knightButton.y+40)) {
				knightButton.on = false;
			}
			if (e.x > catapultButton.x && e.x <= (catapultButton.x+110) && e.y > catapultButton.y && e.y <= (catapultButton.y+40)) {
				catapultButton.on = false;
			}
			if (e.x > pauseButton.x && e.x <= (pauseButton.x+30) && e.y > pauseButton.y && e.y <= (pauseButton.y+30)) {
				pauseButton.on = false;
			}
			
		}
	} else {
		//Pause menu mouse clicks
		if (e.x > menuButton.x && e.x <= (menuButton.x+155) && e.y > menuButton.y && e.y <= (menuButton.y+35)) {
			menuButton.on = false;
		}
		if (e.x > resumeButton.x && e.x <= (resumeButton.x+115) && e.y > resumeButton.y && e.y <= (resumeButton.y+35)) {
			resumeButton.on = false;
		}
	}
}
	
	
	
	
	
	