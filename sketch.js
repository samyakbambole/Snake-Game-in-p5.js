// Snake Game 
// Made by - Samyak Bambole
// 10/6/2020
// Taught by - The Coding Train 

var s;
var scl = 20;  

var food; 

function setup() {
  	// put setup code here
  	createCanvas(600, 600); 
  	s = new Snake();
  	frameRate(10); 
	pickLocation(); 	

}

function pickLocation()  {
	var cols = floor(width / scl); 
	var rows = floor(height / scl); 
	food =  createVector(floor(random(cols)), floor(random(rows))); 
	food.mult(scl); 
}

function draw() {
  	// put drawing code here
  	background(51);

  	if (s.eat(food)) {
  		pickLocation();
  		frameRate(10); 
  	} 

  	s.death(); 
  	s.update(); 
  	s.show();

  	fill(246, 59, 59);
  	rect(food.x, food.y, scl, scl);  
}

function keyPressed() {
	if (keyCode === 87) { // UP 
		s.dir(0, -1); 
	} else if (keyCode === 83) { // Down
		s.dir(0, 1);
	} else if (keyCode === 68) { // Right
		s.dir(1, 0);
	} else if (keyCode === 65) { // Left
		s.dir(-1, 0);
	} else if (keyCode === 71) { // Increase
		s.total++; 
	} else if (keyCode === 82) {
		s.total--; 
	}
}