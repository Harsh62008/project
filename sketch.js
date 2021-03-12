var canvas;
var music;

var s1;
var s2;
var s3;
var s4;

var edges;

var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    s1=createSprite(700,580,180,20)
    s2=createSprite(500,580,180,20)
    s3=createSprite(300,580,180,20)
    s4=createSprite(100,580,180,20)

    
s1.shapeColor='blue'
s2.shapeColor='pink'
s3.shapeColor='teal'
s4.shapeColor='yellow'

ball=createSprite(random(20,750),100,60,60,20)
ball.velocityX=-6
ball.velocityY=6

ball.shapeColor='black'

    //create box sprite and give velocity

}

function draw() {

    

    background(rgb(169,169,169));

    
    //create edgeSprite


    edges=    createEdgeSprites();

    ball.bounceOff(edges)

if(s1.isTouching(ball)&& ball.bounceOff(s1)){
ball.shapeColor='blue'
music.play();

}

if(s2.isTouching(ball)&& ball.bounceOff(s2)){
    ball.shapeColor='pink'
    ball.velocityX=0;
    ball.velocityY=0;
    music.stop();
    
    
    }


    if(s4.isTouching(ball)&& ball.bounceOff(s4)){
        ball.shapeColor='yellow'
        ball.velocityX=0;
        ball.velocityY=0;
        music.stop();
        
        
        }

        if(s3.isTouching(ball)&& ball.bounceOff(s3)){
            ball.shapeColor='teal'
           
            music.play();
            
        }
            




    //add condition to check if box touching surface and make it box
    drawSprites();
}
