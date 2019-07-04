function drawflow() {
	var c = document.getElementById("myCanvas");
	var w =c.getContext("2d");
	//var i=0;
//Configuration
	var myRect = {"x":35,"y":90,"w":325,"h":60}  //rect definition
	timeInterval= 250;          //time between 2 draw
	thick = 3;             //thickness of a line (pixel)
	//w.fillStyle = "blue";  //color of the rect

	var cpt = 0;

//loop will process fast but we make a delay on each draw with setTimeout which grow at each iteration
	for(var ind = thick; ind < myRect.h+thick ; ind += thick){
		//w.rotate(4* Math.PI / 180);
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
  		w.save();
  		w.rotate((4)* Math.PI / 180);
  		w.fillStyle = "	#1ca3ec"; //color of the rect
  		w.fillRect(myRect.x, tempY,  myRect.w, thick);
  	//w.fillStyle = "blue"; 
  		w.restore();
  		//i+=0.01;
	}
	setTimeout(drawcylwater,3000);
}	


function clearflow() {
	var c = document.getElementById("myCanvas");
	var w =c.getContext("2d");
	//var i=0;
//Configuration
	var myRect = {"x":35,"y":90,"w":325,"h":60}  //rect definition
	timeInterval= 250;          //time between 2 draw
	thick = 3;             //thickness of a line (pixel)
	//w.fillStyle = "blue";  //color of the rect

	var cpt = 0;

//loop will process fast but we make a delay on each draw with setTimeout which grow at each iteration
	for(var ind = myRect.h+thick; ind>=thick ; ind -= thick){
		//w.rotate(4* Math.PI / 180);
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
  		w.save();
  		w.rotate((4)* Math.PI / 180);
  		//w.fillStyle = "w"; //color of the rect
  		w.clearRect(myRect.x, tempY,  myRect.w, thick);
  	//w.fillStyle = "blue"; 
  		w.restore();
  		//i+=i;
	}
	
}
function drawcylwater(argument) {
  var c = document.getElementById("myCanvas");
  var w =c.getContext("2d");
  var cyl =c.getContext("2d");
  //var i=0;
//Configuration
  var myRect = {"x":405,"y":245,"w":90,"h":58}  //rect definition
  timeInterval= 100;          //time between 2 draw
  thick = 3;             //thickness of a line (pixel)
  //w.fillStyle = "blue";  //color of the rect

  var cpt = 0;

//loop will process fast but we make a delay on each draw with setTimeout which grow at each iteration
  for(var ind = thick; ind < myRect.h+thick ; ind += thick){
    //w.rotate(4* Math.PI / 180);
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
      w.save();
      //w.rotate((4)* Math.PI / 180);
      w.fillStyle = " #1ca3ec"; //color of the rect
      w.fillRect(myRect.x, tempY,  myRect.w, thick);
    //w.fillStyle = "blue"; 
      w.restore();
      //i+=0.01;
  }
  /*
  cyl.beginPath()
  drawCylinder(cyl ,405,240,90,63);//water level in sump 
  cyl.fillStyle="#1ca3ec";
  cyl.fill();
  */
}