var skip = 50;
var lastButton = 0;
var bstart = 150;

var redButton;
var blueButton;
var greenButton;
var blackButton;
var resetButton;
var printButton;

var red = [];
var green = [];
var blue = [];
var black = [];

var reset;
var save;
var pick;
var make;
var share;
var title;

function preload(){
	for (var i=0; i < 10; i++){
		red[i] = loadImage("images/R"+i+".png");
		green[i] = loadImage("images/G"+i+".png");
		blue[i] = loadImage("images/B"+i+".png");
		black[i] = loadImage("images/K"+i+".png");
	}

}

function setup() {
  createCanvas(700,700);
  smooth();

	//draw the buttons
  redButton = new Button(20,bstart,skip,skip,204,41,60);
	greenButton = new Button(20,bstart+70,skip,skip,35,108,81);
  blueButton = new Button(20,bstart+140,skip,skip,26,64,160);
  blackButton = new Button(20,bstart+210,skip,skip,0,0,0);
  resetButton = new Button(20,bstart+310,skip,skip,230,230,230);
  printButton = new Button(20,bstart+380,skip,skip,230,230,230);

	fill(255);
	noStroke();
	rect(0,0,700,700);

	textFont('Avenir');

	fill(0);
	textSize(12);
	textAlign(CENTER);
	text("noahmatteucci.com", width/2,80);
	textSize(18);
	text("Pick a color:",18,95,60,60);
	textSize(38);
	text("WOODBLOCK PIXEL MAKER",width/2,60);

}

function draw() {

	stroke(230);
  grid();
  dots();

	redButton.show();
	greenButton.show();
	blueButton.show();
	blackButton.show();
	resetButton.show();
	printButton.show();

	fill(0);
	textSize(14);
	textStyle(BOLD);
	text("RESET",45,bstart+340);
	text("SAVE",45,bstart+410);


}

function mousePressed(){

	//check which color is clicked
	if(redButton.MouseIsOver()){
		lastButton = 1;
		print(lastButton);
	}else if (greenButton.MouseIsOver()){
		lastButton = 2;
		print(lastButton);
	}else if (blueButton.MouseIsOver()){
		lastButton = 3;
		print(lastButton);
	}else if (blackButton.MouseIsOver()){
		lastButton = 4;
		print(lastButton);
	}

	//switching colors
	if (mouseX > 100 && lastButton ==1) {
      for (var x = 100; x < width-100; x += skip){
        for (var y = 100; y < height-100; y += skip){
          if (mouseX > x && mouseX < (x+skip) && mouseY > y && mouseY < (y+skip)){
						var pick = int(random(10));
            image(red[pick],x,y);
        }
      }
    }
  }else if (mouseX > 100 && lastButton ==2) {
      for (var x = 100; x < width-100; x += skip){
        for (var y = 100; y < height-100; y += skip){
          if (mouseX > x && mouseX < (x+skip) && mouseY > y && mouseY < (y+skip)){
						var pick = int(random(10));
            image(green[pick],x,y);
        }
      }
    }
  }else if (mouseX > 100 && lastButton ==3) {
      for (var x = 100; x < width-100; x += skip){
        for (var y = 100; y < height-100; y += skip){
          if (mouseX > x && mouseX < (x+skip) && mouseY > y && mouseY < (y+skip)){
            var pick = int(random(10));
            image(blue[pick],x,y);
        }
      }
    }
  }else if (mouseX > 100 && lastButton ==4) {
      for (var x = 100; x < width-100; x += skip){
        for (var y = 100; y < height-100; y += skip){
          if (mouseX > x && mouseX < (x+skip) && mouseY > y && mouseY < (y+skip)){
						var pick = int(random(10));
            image(black[pick],x,y);
        }
      }
    }
  }

//reset createCanvas

if (resetButton.MouseIsOver()){
	fill(255);
	noStroke();
	rect(100,100,500,500);
	//redraw the grid
	stroke(230);
	grid();
}

if (printButton.MouseIsOver()){
	//erase the grid
	stroke(255);
	grid();
	//erase the sides
	fill(255);
	rect(0,0,100,height);
	rect(0,0,width,100);
	rect(width-100,0,width-100,height);
	rect(0,height-100,width,height);

	save('Image.png');

	fill(0);
	textSize(12);
	textAlign(CENTER);
	textStyle(NORMAL);
	text("noahmatteucci.com", width/2,80);
	textSize(18);
	text("Pick a color:",18,95,60,60);
	textSize(38);
	text("WOODBLOCK PIXEL MAKER",width/2,60);
}

}

function grid() {
  strokeWeight(2);
  for (var x = 100; x < width-100; x += skip){
    for (var y = 100; y < height-100; y += skip){
      noFill();
      rect(x,y,skip,skip);
    }
  }
}

function dots(){
  //draw a dotted line
  for (var x = 20; x < 80; x += 10){
    stroke(0);
    line(x, bstart+285, x + 3, bstart+285);
    line(x, bstart+287, x + 3, bstart+287);
  }
}

function Button (x,y,w,h,r,g,b){
    this.x = x;
    this.y = y;
		this.w = w;
		this.h = h;
		this.r = r;
		this.g = g;
		this.b = b;

		this.show = function(){
			noStroke();
			fill(this.r,this.g,this.b);
			rect(this.x,this.y,this.w,this.h,10);
		}

		this.MouseIsOver = function(){
			if(mouseX > this.x && mouseX < (this.x + this.w) && mouseY > this.y && mouseY < (this.y + this.h)){
				return true;
			}
			return false;
		}
}
