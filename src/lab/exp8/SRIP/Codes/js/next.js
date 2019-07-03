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
    	case 3:clearVweir();
    			break;
    	case 4:displayRweir();
    			break;
    	case 5:clearRweir();
    			break;
    	case 6:displayEweir();
    			break;
    	case 7:clearEweir();
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
	weir.lineTo(370,130);//vertical
	weir.lineTo(410,130);//horizontal below
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
	displaywater();

}


function clearRweir(){

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir2").style.display = "inline-block";
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,130);//vertical
	weir.lineTo(410,130);//horizontal below
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
	displaywater();

}


function clearEweir(argument) {

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir1").style.display = "inline-block";
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,130);//vertical
	weir.lineTo(410,130);//horizontal below
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
	weir.fillStyle = "blue";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "blue";
	weir.stroke();
	weir.restore();
	
}

function displaywater(argument) {

	cyl.save();
	cyl.beginPath();
	drawCylinder(cyl ,405,240,90,63);//water level in sump 
	cyl.fillStyle="blue";
	cyl.fill();

	cyl.beginPath();
	cyl.rect(405,245,90,52); //to display blue in cylinder
	cyl.fillStyle= "blue";
	cyl.fill();
	cyl.restore();

}


function complete(argument) {
	alert("experiment completed");
	document.getElementById("next").disabled = true;
}