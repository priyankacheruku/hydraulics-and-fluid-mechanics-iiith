//script for next button
var count=0;
function next(argument) {
	// body...
	

	count+=1;
	//alert(count);
	switch (parseInt(count)) {
		case 1: experiment();
				break;
  		case 2: displayVweir();
    			break;
    	case 3: 
    	case 7: 
    	case 11:
    			displaywater();
    			break;
    	case 4: case 8: case 12:
    			clearwater();
    			break;
    	case 5:clearVweir();
    			break;
    	case 6:displayRweir();
    			break;
    	case 9:clearRweir();
    			break;
    	case 10:displayEweir();
    			break;
    	case 13:clearEweir();
    			break;
    	default:complete();

	}	
}


function displayVweir(argument) {

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");


	document.getElementById("weir3").style.display = "none";
//v-shaped weir	
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,95);//vertical
	weir.lineTo(395,98);//horizontal
	weir.lineTo(390,140);//slant
	weir.lineTo(385,99);//slant
	weir.lineTo(370,100);//horizontal
//to fill the space in the shape
	weir.fillStyle = "lime";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "purple";
	weir.stroke();
	weir.restore();
	
}


function clearVweir(argument){

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	
	document.getElementById("weir3").style.display = "inline-block";
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,95);//vertical
	weir.lineTo(395,95);//horizontal
	
//to fill the space in the shape
	weir.fillStyle = "white";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "white";
	weir.stroke();
	weir.restore();
	displayblank();
	clearCyl();
	
}


function displayRweir(argument) {


	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");
	
	document.getElementById("weir2").style.display = "none";	

//rectangular weir
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,95);//vertical
	weir.lineTo(395,98);//horizontal
	weir.lineTo(395,130);//vertical
	weir.lineTo(385,130);//horizontal
	weir.lineTo(385,99);//
	weir.lineTo(370,100);//horizontal
//to fill the space in the shape
	weir.fillStyle = "lime";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "purple";
	weir.stroke();
	weir.restore();
	//displaywater();

}


function clearRweir(){

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir2").style.display = "inline-block";
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,95);//vertical
	weir.lineTo(395,95);//horizontal
	
//to fill the space in the shape
	weir.fillStyle = "white";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "white";
	weir.stroke();
	weir.restore();
	displayblank();
	clearCyl();
	
}

function displayEweir(argument) {

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir1").style.display = "none";	

//edge weir
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,130);//vertical
	weir.lineTo(395,130);//horizontal
	weir.lineTo(395,100);//vertical
	
	weir.lineTo(370,100);//horizontal
//to fill the space in the shape
	weir.fillStyle = "lime";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "purple";
	weir.stroke();
	weir.restore(); 
	//displaywater();

}


function clearEweir(argument) {

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir1").style.display = "inline-block";
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,95);//vertical
	weir.lineTo(395,95);//horizontal
	
//to fill the space in the shape
	weir.fillStyle = "white";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "white";
	weir.stroke();
	weir.restore();
	displayblank();
	clearCyl();

}


function clearCyl(argument) {

	cyl.save();
	cyl.clearRect(401,238,95,65); //to display blue in cylinder
	cyl.restore();

}


function displayblank(argument) {
	weir.save();
	weir.beginPath();
	weir.moveTo(370,110);
	weir.lineTo(370,175);
	weir.lineTo(410,170);
	weir.lineTo(410,110);
	weir.lineTo(370,110);
//to fill the space in the shape
	weir.fillStyle = "white";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "white";
	weir.stroke();
	weir.restore();
	
}

function displaywater(argument) {
	
	var c = document.getElementById("myCanvas");
	var cyl =c.getContext("2d");
	cyl.save();
	cyl.beginPath();
	drawCylinder(cyl ,405,240,90,63);//water level in sump 
	cyl.fillStyle="#1ca3ec";
	cyl.fill();

	cyl.beginPath();
	cyl.rect(405,245,90,52); //to display blue in cylinder
	cyl.fillStyle= "#1ca3ec";
	cyl.fill();
	cyl.restore();


	var rctx = c.getContext("2d");
	rctx.save();
	rctx.rotate(4* Math.PI / 180);
	rctx.beginPath();
	rctx.rect(35,90, 325, 60);//water
	rctx.fillStyle = "#1ca3ec";
	rctx.fill();
	rctx.restore();

}




function complete(argument) {
	alert("experiment completed");
	document.getElementById("next").disabled = true;
}
function clearwater(argument) {
	alert("water to be removed");
}