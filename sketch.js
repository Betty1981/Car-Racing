var hypnoticBall, dataf;
var pos;


function setup(){
  dataf = firebase.database();
  
  console.log(dataf);
  createCanvas(500,500);

  hypnoticBall = createSprite(250,250,10,10);
  hypnoticBall.shapeColor = "red";


  var hypnoticBallP = dataf.ref('ball/position');
  hypnoticBallP.on("value", readPosition, showError);

}

function draw(){
  background("white");
  
    if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();
  
}
function readPosition(data1){
  pos = data1.val();
  console.log(pos);
  hypnoticBall.x = pos.x;
  hypnoticBall.y = pos.y;
}

function writePosition(x,y){
  dataf.ref('ball/position').set({
    'x': pos.x + x ,
    'y': pos.y + y
  })
}



function showError(){
  console.log("Error in writing to the database");
}
