
 

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
let y = (canvasHeight / 2)*1.2
let width = 100
let player_jump_speed = 0
let player_acceleration = 0
let x_speed = 5


let level = 0;



const t1 = {
    x: 40,
    y: 40,
    width: 40,
    speed: 5,
    color: 'hotpink'
};

let coins_collection = [[{x: 1410, y: 188}, {x: 875, y: 348}, {x: 655, y: 125}, {x: 293, y: 303}, {x: 520, y: 224}],
[{x: 721, y: 245}, {x: 184, y: 256}, {x: 1514, y: 356}, {x: 129, y: 379}, {x: 1128, y: 79}, {x: 370, y: 69}, {x: 1056, y: 192}],
[{x: 1503, y: 70}, {x: 743, y: 65}, {x: 1356, y: 439}, {x: 131, y: 43}, {x: 1478, y: 127}, {x: 1392, y: 161}, {x: 1231, y: 184}],
[{x: 1145, y: 42}, {x: 961, y: 5}, {x: 628, y: 362}, {x: 316, y: 54}, {x: 1177, y: 414}, {x: 653, y: 461}, {x: 1479, y: 256}],
[{x: 548, y: 318}, {x: 1324, y: 67}, {x: 438, y: 73}, {x: 626, y: 234}, {x: 675, y: 82}, {x: 959, y: 474}, {x: 1382, y: 51}]
                        ]
let coin_counter = 0

var arr = []
var arr_newtrees = []


function platform(leftX, rightX, y){
    fill('green');
    rect(leftX, y, rightX-leftX, (rightX-leftX)/16);
    fill('#3B2521')
    rect(leftX+(rightX-leftX)/16, y+(rightX-leftX)/16, (rightX-leftX)-(rightX-leftX)/8, (rightX-leftX)/16)
}

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



function coins(x, y)
{
    fill('yellow')
    circle(x, y, 20)
}

const floor = y;
let lives = 10;

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

    for(i = 0; i < coins_collection[level].length; i++)
    {
        coins(coins_collection[level][i].x, coins_collection[level][i].y)
        if(Math.abs(x - coins_collection[level][i].x) < 25 && Math.abs(y - coins_collection[level][i].y) < 50)
        {
            coins_collection[level].splice(i, i)
            coin_counter ++
        }
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
    if(Math.abs(y - floor) < 10 && player_jump_speed < 0)
    {
        player_jump_speed = 0
        player_acceleration = 0
        y = floor
    }

    if(x > canvasWidth)
    {
        x = 0
        level ++
    }
    if(level >= coins_collection.length && coin_counter > 6)
    {
        document.querySelector("body").style.background="url('IMG_6341.jpg')";
    }
    else if(level >= coins_collection.length && coin_counter <= 6)
     {
        document.querySelector("body").style.background="url('https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F210204102100-steve-harvey-family-feud.jpg')";
     }


    



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
        if(player_jump_speed === 0 && player_acceleration === 0)
        {
        player_acceleration = 4;
        player_jump_speed = 50
        }
    } else if (ev.code == 'ArrowDown') {
        console.log('down arrow!');
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
    console.log("Sha Boing Boing")
    console.log(floor)
    console.log(canvasWidth)
}

document.addEventListener('keydown', moveController);

//highest = 185
//floor = 486
// 1536