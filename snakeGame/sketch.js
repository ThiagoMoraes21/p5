let snake;
let scl = 15;  //scale
let food;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  pickLocation();
}

function draw() {
  background(51);
  snake.death();
  snake.update();
  snake.show();

  if(snake.eat(food)) {
    pickLocation();
  }

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function pickLocation() {
  let cols = floor(width/scl);
  let rows = floor(height/scl);
  food = createVector(
    floor(random(cols)), floor(random(rows))
  );
  food.mult(scl);
}

// changes snake direction
function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.dir(0, -1); // moves up
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1); // moves down
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0); // moves down
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0); // moves down
  }
}
