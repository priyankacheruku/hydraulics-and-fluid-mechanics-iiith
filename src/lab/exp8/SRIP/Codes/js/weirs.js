//Script file for simulaton of weirs one after another


function display_Vweir(){

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

//rectangular weir
/*w.save();
setTimeout(drawflow,1000);
w.restore();
*/
setTimeout(display_Rweir,1000);

}


function display_Rweir(){

	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir2").style.display = "none";
	document.getElementById("weir3").style.display = "inline-block";


	//drawblue();
	clearweir();
//rcctangular weir
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

	//edge weir
	setTimeout(display_Eweir,3000); 
}
function display_Eweir(){


	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir1").style.display = "none";
	document.getElementById("weir2").style.display = "inline-block";


	//drawblue();
// CLEAR rEctangular weir
	clearweir();


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
}

//clear weir canvas 
function clearweir(){


	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

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

	//drawblue();
}
/*
//draw blue for wATER
function drawblue(){
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
*/