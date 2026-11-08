// Paranormal Escape Game

// Player variables
let playerX = 50;
let playerY = 200;
let playerSize = 25;
let playerSpeed = 4;

// Game variables
let won = false;

// Stationary obstacle
let obstacleX = 0;
let obstacleY = 0;
let obstaclePlaced = false;

// Moving ghost obstacles
let ghost1X =150;
let ghost1Y = 100;
let ghost1Size = 35;

let ghost2X = 300;
let ghost2Y = 250;
let ghost2Size = 55;

let ghost1SpeedX = 2;
let ghost1SpeedY = 1;

let ghost2SpeedX = -2;
let ghost2SpeedY = 2;

function setup() {
  createCanvas(500, 400);
}

function draw() {
 background(25, 20, 40);

  // Draw stationar obstacle
  if (obstaclePlaced) {
    fill("orange");
    ellipse(obstacleX, obstacleY, 30, 30);
  }

  // Move the first ghost
  ghost1X += ghost1SpeedX;
  ghost1Y += ghost1SpeedY;

  // Move the second ghost
  ghost2X += ghost2SpeedX;
  ghost2Y += ghost2SpeedY;

  // Randomly change ghost directions
  if (random(1)  < 0.02) {
    ghost1SpeedX = random(-3, 3);
    ghost1SpeedY = random(-3, 3);
  }
   if (random(1) < 0.02) {
     ghost2SpeedX = random(-3, 3);
     ghost2SpeedY = random(-3, 3);
   }

  // Make ghosts reappear on the opposte side
  if (ghost1X > width) {
    ghost1X = 0
  }
  if (ghost1X <0) {
    ghost1X = width;
  }
  if (ghost1Y > height) {
    ghost1Y = 0;
    }
  if (ghost1Y <0) {
    ghost1Y = height;
  }
  if (ghost2X > width){
    ghost2X = 0;
  }
  if (ghost2X < 0) {
    ghost2X = width;
  }
  if (ghost2Y > height) {
  ghost2Y = 0;
  }
  if (ghost2Y < 0) {
    ghost2Y = height;
  }
  
  // Draw the red ghost
  fill("red");
  ellipse(ghost1X, ghost1Y, ghost1Size);
// Draw the purple ghost
  fill("purple");
  ellipse(ghost2X, ghost2Y, ghost2Size);
// Draw the player
fill("lime");
ellipse(playerX, playerY, playerSize);

// Draw the exit door
fill("yellow");
rect(440, 150, 60, 100);

fill("black");
textSize(16);
text("EXIT", 450, 205);

// Move player using keyboard
if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
  playerX -= playerSpeed;
}

else if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
  playerX += playerSpeed;
}

else if (keyIsDown(UP_ARROW) || keyIsDown(87)) {
  playerY -= playerSpeed;
}
  else if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {
    playerY += playerSpeed;
  }
// check if player reaches the exit
if (playerX > 440 && playerY > 150 && playerY < 250) {
  won = true;
}

// show winning message
if (won) {
  fill("white");
  textSize(32);
  text("YOU ESCAPED!", 130, 80);
}
}

// Place obstacle when mouse is clicked
function mousePressed() {
  obstacleX = mouseX;
  obstacleY = mouseY;
  obstaclePlaced = true;
}





