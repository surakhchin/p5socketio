var socket;











function setup() {

    createCanvas(400, 400);
    background(50);
    fill(0, 0, 255);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);

    socket = io.connect('http://localhost:3000');

    //FINAL STEP TO RECEIVE DATA FROM OTHER CLIENTS THAT SEND THEIR DATA TO SERVER
    socket.on('mouse', newDrawing);

}
//IF THIS SOCKET RECEIVED A NEW MESSAGE CALLED newDrawing
function newDrawing(data) {
   noStroke();
  fill(255, 0, 100);
  ellipse(data.x,data.y,36,36);
}

function mouseDragged() {
  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
      x: mouseX,
      y: mouseY
  };
  //EMIT/SEND OUR DATA TO THE SERVER SOCKET
  socket.emit('mouse', data);


  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,20,20);

}

