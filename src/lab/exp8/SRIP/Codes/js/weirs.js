//alert("ds");

function display_weirs(){

	
//v-shaped weir	
		//var weir =c.getContext("2d");
	//clear(weir);
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
	weir.fillStyle = "black";
	weir.fill(); 
//stroke style
	weir.strokeStyle = "#FF0000";
	weir.stroke();
	weir.restore();

//rectangular weir


//edge weir

}
