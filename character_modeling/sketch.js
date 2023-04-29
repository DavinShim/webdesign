function setup() {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight; 
    createCanvas(canvasWidth, canvasHeight);
    background('#456abc');
    // Exercise 1:
    drawCircle(100, 100, 100, 'hotpink');
    drawCircle(200, 100, 50, 'navy');
    drawCircle(300, 100, 100, 'teal');
    drawCircle(400, 100, 50, 'hotpink');

    // Exercise 2: 
    drawOval(100, 200, 100, 62.5, 'teal');
    drawOval(200, 200, 62.5, 100, 'hotpink');
    drawOval(300, 200, 100, 62.5, 'navy');
    drawOval(400, 200, 62.5, 100, 'teal');

    // Exercise 3:
    drawBullseye(100, 300, 100);
    drawBullseye(200, 300, 50);
    drawBullseye(300, 300, 100);
    drawBullseye(400, 300, 50);

    // Exercise 4:
  /*  drawFace(100, 400, 50);
    drawFace(200, 400, 100);
    drawFace(300, 400, 50);
    drawFace(400, 400, 100);
    */
    drawCreature(100, 400, 50);
    drawCreature(200, 400, 100);
    drawCreature(300, 400, 50);
    drawCreature(400, 400, 100);


    drawGrid(canvasWidth, canvasHeight);



}


// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, size, and fillColor
function drawCircle(centerX, centerY, size, fillColor) {


    fill(fillColor);
    circle(centerX, centerY, size);
}

// modify this function so that it accepts and honors
// the following parameters: centerX, centerY, sizeX, sizeY, and fillColor
function drawOval(centerX, centerY, sizeX, sizeY, fillColor) {
    fill(fillColor);
    ellipse(centerX, centerY, sizeX, sizeY);
}


// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawBullseye(centerX, centerY, size) {
    fill('teal');
    circle(centerX, centerY, size);
    fill('navy');
    circle(centerX, centerY, .75 * size);
    fill('teal');
    circle(centerX, centerY, .5 * size);
    fill('navy');
    circle(centerX, centerY, .25 * size);
}

// modify this function so that it accepts and honors
// the following 3 parameters: centerX, centerY, and size
function drawFace(centerX, centerY, size) {
    fill('white');
    circle(centerX, centerY, size);
    fill('black');
    circle(centerX - .16 * size, centerY - .16 * size, .16 * size);
    circle(.16 * size + centerX, centerY - .16 * size, .16 * size);
}

function drawCreature(positionX, positionY, size) {

    var head_x = positionX+ size/4
    var head_y = positionY- (size * 2.5)
    var ear_size = size/3

    //ear1
    fill('black')
    circle(head_x+ear_size/2, head_y, ear_size)
    //ear2
    fill('black')
    circle(head_x+(ear_size/2)+ear_size * 2, head_y, ear_size)
    //head  
    fill('white');
    rect(positionX+ size/4, positionY- (size * 2.5), size, size, 5); //body
    //body
    fill('black')
    rect(positionX, positionY -size* 1.5, size * 1.5, size* 1.5, 10);
    //white belly
    fill('white');
    rect(positionX+ size/4, positionY- (size * 1.25), size, size, 5);
    //eye1
    fill('black')
    circle(head_x+size/4, head_y+size/3, size/6);
    //eye2
    fill('black')
    circle(head_x+size*.75, head_y+size/3, size/6)
    /*fill(secondaryColor);  //hand1
    circle(positionX+1.25*size, positionY+.5*size, size*.5);

    fill(secondaryColor); //hand2
    circle(positionX, positionY+.5*size, size*.5);
    
    fill('black'); //eye1
    circle(positionX+size*11/12, positionY+size/3, size/6);

    fill('black'); //eye2
    circle(positionX+size*7/12, positionY+size/3, size/6);*/
}