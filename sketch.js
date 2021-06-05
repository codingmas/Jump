var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite (0,580,360,30)
    block2 = createSprite (295,580,200,30)
    block3 = createSprite (515,580,200,30)
    block4 = createSprite (740,580,220,30)

    block1.shapeColor = "red"
    block2.shapeColor = "orange"
    block3.shapeColor = "green"
    block4.shapeColor = "blue"

    //create box sprite and give velocity

    ball = createSprite (random(20,750),100,40,40)
    ball.shapeColor = "white"
    ball.velocityX = 4
    ball.velocityY = 9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    edges = createEdgeSprites ()

    if (block1.isTouching(ball)){ ball.shapeColor ="red" }
    if (block2.isTouching(ball)){ ball.shapeColor ="orange" }
    if(block3.isTouching(ball)){ ball.shapeColor ="green" }
    if(block4.isTouching(ball)){ ball.shapeColor ="blue" }

    ball.bounceOff (block1)
    ball.bounceOff(block2)
    ball.bounceOff(block3)
    ball.bounceOff (block4)

    drawSprites ()

    //add condition to check if box touching surface and make it box
}
