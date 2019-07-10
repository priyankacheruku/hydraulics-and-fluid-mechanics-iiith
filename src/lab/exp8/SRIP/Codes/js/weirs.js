//Script file for simulaton of weirs one after another
function display_Vweir(){

	experiment();
	setTimeout(weirV,3000);

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

		//water flow
		setTimeout(drawflow,2000);
		setTimeout(drawFlowWater,5000);
		setTimeout(drawcylwater,7000);
		setTimeout(observeReadings,10000);
		//rectangular weir
		setTimeout(display_Rweir,12000);//11
	}
	
}


function display_Rweir(){


	var c = document.getElementById("myCanvas");
    const context = c.getContext('2d');
    //context.save();
    context.clearRect(0, 0, c.width, c.height);
    //context.restore();
    context.beginPath();
	
	experiment();
	//clearweir();

	setTimeout(weirR,1000);

	function weirR(argument) {

		//var c = document.getElementById("myCanvas");
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

		setTimeout(drawflow,2000);
		setTimeout(drawFlowWater,6000);
		setTimeout(drawcylwater,8000);
		setTimeout(observeReadings,11000);
		//setTimeout(clearflow,9000);

		//edge weir
		setTimeout(display_Eweir,13000); 
	}

}
function display_Eweir(){

	var c = document.getElementById("myCanvas");
    const context = c.getContext('2d');
    //context.save();
    context.clearRect(0, 0, c.width, c.height);
    //context.restore();
    context.beginPath();

    experiment();
    setTimeout(weirE,1000);
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

		setTimeout(drawflow,2000);
		setTimeout(drawFlowWaterE,6000);
		setTimeout(drawcylwater,8000);
		setTimeout(observeReadings,11000);
	}
}

//clear weir canvas 
function clearweir(){


	var c = document.getElementById("myCanvas");
	var weir =c.getContext("2d");

	weir.save();
	weir.beginPath();
	weir.moveTo(370,100);//lefthand to right
	weir.lineTo(372,172);//vertical
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

	//drawblue();
}


function observeReadings(argument) {
	document.getElementById("note").innerHTML = "Adjust the hook scale that its apex touches water and observe the readings.<br>Repeat experiment to get accurate values";
}