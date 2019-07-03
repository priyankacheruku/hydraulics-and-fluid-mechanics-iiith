function drawflow(argument) {
	var c = document.getElementById("myCanvas");
	var w =c.getContext("2d");
//Configuration
	var myRect = {"x":35,"y":90,"w":325,"h":60}  //rect definition
	w.rotate(4* Math.PI / 180);
	timeInterval= 250;          //time between 2 draw
	thick = 3;             //thickness of a line (pixel)
	w.fillStyle = "blue";  //color of the rect

	var cpt = 0;

//loop will process fast but we make a delay on each draw with setTimeout which grow at each iteration
	for(var ind = thick; ind < myRect.h+thick ; ind += thick){
  	setTimeout(function(ind){
    	  drawLittleRect(ind)
  	}, timeInterval*cpt, ind);
  	cpt++
	}

	function drawLittleRect(ind){
  		var tempY = myRect.y + myRect.h - ind;

  		//Limit top of rect in order to get desired size
  		if(tempY < myRect.y){
    	tempY = myRect.y
  	}

  	w.fillRect(myRect.x, tempY,  myRect.w, thick);

	}
 
}	