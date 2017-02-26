var colours = ["#81358E",
         "#00A0DC",
         "#FDB024",
         "#C84932",
         "#70BF54",
         "#D94B9B",
		 "#3069B3"];
var colours_tmp = [];		

function setup() {
	createCanvas(1920, 1080);
	}

function draw() {

// ciclo di for per creare un reticolato di moduli
	
	for (x = 40; x < 1920; x += 80) {
    for (y = 40; y < 1080; y += 80){
    
		modulo();
    }
    noLoop()
	}
  }
function modulo(){

// sistema per controllare la casualità dei colori in modo da non avere due colori uguali ravvicinati
	
	arrayCopy(colours, colours_tmp)
		
		colour1 = random(colours_tmp);
		var index1 = colours_tmp.indexOf(colour1);
		colours_tmp.splice(index1, 1);
		
		colour2 = random(colours_tmp);
		var index2 = colours_tmp.indexOf(colour2);
		colours_tmp.splice(index2, 1);
		
		colour3 = random(colours_tmp);
		var index3 = colours_tmp.indexOf(colour3);
		colours_tmp.splice(index3, 1);

// logo creation
	
	noStroke();
	fill(colour1);
	ellipse(x, y, 70, 70);
	fill(colour2);
	ellipse(x, y, 55, 55);
	fill(colour3);
	ellipse(x, y, 40, 40);
	fill(colour1);
	ellipse(x, y, 25, 25);
	
	}	

// funzioni che riaprono il loop della funzione con consequente ri-generazione dei loghi
	
function mousePressed() {
	background(255);
	loop();	
}

function mouseReleased() {
  noLoop();
}

// altra piccola possibilità di interazione con il programma che rigenera i loghi

/*function mouseWheel() {
background(255);
	loop();
  noLoop();
}*/