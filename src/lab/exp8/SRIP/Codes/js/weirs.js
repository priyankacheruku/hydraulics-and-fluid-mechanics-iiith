//Script file for simulaton of weirs one after another

function display_Vweir(){

	experiment();
	setTimeout(vernierWithScale,1000);// in experiment.js
	setTimeout(drawBaffel ,2000);
	setTimeout(weirV,3000);
	//water flow
	setTimeout(drawFlow,5000);
	setTimeout(drawFlowWater,8000);
	setTimeout(drawcylwater,10000);
	setTimeout(observeReadings,13000);

	//rectangular weir
	setTimeout(display_Rweir,15000);

}

function display_Rweir(){

	var c = document.getElementById("myCanvas");
   	
	experiment();
	setTimeout(vernierWithScale ,1000);
	setTimeout(drawBaffel ,2000);
	setTimeout(weirR,3000);
	setTimeout(drawFlow,5000);
	setTimeout(drawFlowWater,9000);
	setTimeout(drawcylwater,11000);
	setTimeout(observeReadings,14000);
		
	//edge weir
	setTimeout(display_Eweir,16000);

}


function display_Eweir(){

    experiment();
    setTimeout(vernierWithScale ,1000);
	setTimeout(drawBaffel ,2000);
    setTimeout(weirE,3000);
    setTimeout(drawFlow,4000);
	setTimeout(drawFlowWaterE,8000);
	setTimeout(drawcylwater,10000);
	setTimeout(observeReadings,13000);
	setTimeout(simulatonComplete,15000);
    
}


function weirV(argument) {
		
	 	document.getElementById("weir3").style.display = "none";

	 	document.getElementById("note").innerHTML = "Place v-notch weir on hydralic bench";

	 	var c = document.getElementById("myCanvas");
	 	var weir =c.getContext("2d");
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


function weirR(argument) {

		var c = document.getElementById("myCanvas");
		var weir =c.getContext("2d");

		document.getElementById("weir2").style.display = "none";
		document.getElementById("weir3").style.display = "inline-block";

		document.getElementById("note").innerHTML = "Place rectangular-notch weir on hydralic bench";

		//rectangular weir
		weir.save();
		weir.beginPath();
		weir.moveTo(370,100);//lefthand to right
		weir.lineTo(370,175);//vertical
		weir.lineTo(410,170);//horizontal below
		weir.lineTo(410,95);//vertical
		weir.lineTo(395,98);//horizontal
		weir.lineTo(395,125);//vertical
		weir.lineTo(385,125);//horizontal
		weir.lineTo(385,99);//
		weir.lineTo(370,100);//horizontal
		//to fill the space in the shape
		weir.fillStyle = "lime";
		weir.fill(); 
		//stroke style
		weir.strokeStyle = "purple";
		weir.stroke();
		weir.restore();
 
}


function weirE(argument) {
   		
   	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	document.getElementById("weir1").style.display = "none";
	document.getElementById("weir2").style.display = "inline-block";

	document.getElementById("note").innerHTML = "Place edge-notch weir on hydralic bench";

	//edge weir
	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(370,175);//vertical
	weir.lineTo(410,170);//horizontal below
	weir.lineTo(410,125);//vertical
	weir.lineTo(395,125);//horizontal
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


function observeReadings(argument) {

	document.getElementById("note").innerHTML = "Adjust the hook scale that its apex touches water and observe the readings.<br>Repeat experiment to get accurate values";

}


function simulatonComplete(argument) {
	
	document.getElementById("note").innerHTML = "simulaton completed use restart button to observe again";
	document.getElementById("stop").style.display="none";

}