/*const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 


let x = canvasWidth / 2
let y = canvasHeight / 2
let player_jump_speed = 0
//let player_x_speed = 0
let player_acceleration = 0


const ground = y
let width = 100

const t1 = {
    x: 40,
    y: 40,
    width: 40,
    speed: 5,
    color: 'hotpink'
};



var arr = []
var arr_newtrees = []


for(let i = 0; i < 1000; i++)
{
    arr.push(
        {
            x: Math.random() * canvasWidth, 
            y:Math.random() * canvasHeight, 
            size: Math.random() * 2 + .5,
            growth: 1.05
        
        }
    )
}
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);







}

function draw(){

    clear()
    
    for(let i = 0; i < 1000; i++){
        strokeWeight(0);
        fill('white');
        circle(arr[i].x, arr[i].y, arr[i].size)//arr[i].size)
        if(arr[i].size < .5 || arr[i].size > 2.5)
        {
            arr[i].growth = 1/arr[i].growth
        }
        arr[i].size *= arr[i].growth
    }

    for(let i = 0; i < arr_newtrees.length; i++)
    {
        drawLandscapeObject(arr_newtrees[i].x, arr_newtrees[i].y, 30)
    }
    drawCreature(294, 314, 50);
    drawCreature(199, 123, 50);

    if(Math.abs(y - t1.y) <= 10)
    {
        x = canvasWidth / 2
        y = canvasHeight / 2

    }

    drawCreature(x, y, 50);
    if(t1.x > canvasWidth+ t1.width/2){
        t1.x = 100
    }
    else{

    
    t1.x += t1.speed;}
    y -= player_jump_speed
    player_jump_speed -= player_acceleration
    if(y > ground && player_jump_speed < 0)
    {
        player_jump_speed = 0
        player_acceleration = 0
    }
    

    drawLandscapeObject(t1.x, t1.y, t1.width);
    
    drawLandscapeObject(200, 495, 60);
    drawLandscapeObject(489, 295, 80);


}

async function stars(){
    for(let i = 0; i < 1000; i++){
        strokeWeight(0);
        fill('white');
        circle(Math.random() * canvasWidth, Math.random() * canvasHeight, Math.random() * 2 + .5);}}
// replace this function with YOUR creature!

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        console.log('up arrow!');
        if(player_jump_speed == 0)
        {
        player_acceleration = 5;
        player_jump_speed = 40
        }
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 5;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 5;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 5;
    } 
    // redraw circle:
    clear();
    
    drawCreature(x, y, 50);
    stars();
    
    
    // message
   displayMessage();
}





function drawLandscapeObject(treeX, treeY, treeSize){
    fill('brown');
    rect(treeX, treeY, treeSize, treeSize * 3);

    fill('green');
    circle(treeX + treeSize/2, treeY - treeSize/2, treeSize * 1.5)
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
/*
}

function mouseClicked() {
    arr_newtrees.push({x: mouseX, y: mouseY});
}


*/

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

let x = canvasWidth / 2
let y = canvasHeight / 2
let width = 100
let player_jump_speed = 0
let player_acceleration = 0
let x_speed = 5

const ground = y

const t1 = {
    x: 40,
    y: 40,
    width: 40,
    speed: 5,
    color: 'hotpink'
};



var arr = []
var arr_newtrees = []


for(let i = 0; i < 1000; i++)
{
    arr.push(
        {
            x: Math.random() * canvasWidth, 
            y:Math.random() * canvasHeight, 
            size: Math.random() * 2 + .5,
            growth: 1.05
        
        }
    )
}
    
function setup() {
    createCanvas(canvasWidth, canvasHeight);







}

function draw(){

    clear()
    
    for(let i = 0; i < 1000; i++){
        strokeWeight(0);
        fill('white');
        circle(arr[i].x, arr[i].y, arr[i].size)//arr[i].size)
        if(arr[i].size < .5 || arr[i].size > 2.5)
        {
            arr[i].growth = 1/arr[i].growth
        }
        arr[i].size *= arr[i].growth
    }

    for(let i = 0; i < arr_newtrees.length; i++)
    {
        drawLandscapeObject(arr_newtrees[i].x, arr_newtrees[i].y, 30)
    }
    drawCreature(294, 314, 50);
    drawCreature(199, 123, 50);

    if(Math.abs(y - t1.y) <= 10)
    {
        x = canvasWidth / 2
        y = canvasHeight / 2

    }

    drawCreature(x, y, 50);
    if(t1.x > canvasWidth+ t1.width/2){
        t1.x = 100
    }
    else{

    
    t1.x += t1.speed;}
    y -= player_jump_speed
    player_jump_speed -= player_acceleration
    x += x_speed
    if(y > ground && player_jump_speed < 0)
    {
        player_jump_speed = 0
        player_acceleration = 0
    }

    if(x > canvasWidth)
    {
        x = 0
    }



    
    drawLandscapeObject(200, 495, 60);
    drawLandscapeObject(489, 295, 80);


}

async function stars(){
    for(let i = 0; i < 1000; i++){
        strokeWeight(0);
        fill('white');
        circle(Math.random() * canvasWidth, Math.random() * canvasHeight, Math.random() * 2 + .5);}}
// replace this function with YOUR creature!

function moveController(ev) {
    console.log(ev.code);
    if (ev.code == 'Space') {
        console.log('up arrow!');
        if(player_jump_speed == 0)
        {
        player_acceleration = 4;
        player_jump_speed = 40
        }
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
        y += 5;
    } else if (ev.code == 'ArrowLeft') {
        console.log('left arrow!');
        x -= 5;
    } else if (ev.code == 'ArrowRight') {
        console.log('right arrow!');
        x += 5;
    } 
    // redraw circle:

    
    
    // message
   displayMessage();
}


function drawLandscapeObject(treeX, treeY, treeSize){
    fill('brown');
    rect(treeX, treeY, treeSize, treeSize * 3);

    fill('green');
    circle(treeX + treeSize/2, treeY - treeSize/2, treeSize * 1.5)
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


function mouseClicked() {
    arr_newtrees.push({x: mouseX, y: mouseY});
}

document.addEventListener('keydown', moveController);