
function checkbox2(){
  
  	var checkBox = document.getElementById("show_graph");
  	//alert("ds");
  	var ch = document.getElementById("chartContainer");
  	if (checkBox.checked == true){

  		//ch.style.display = "block";
			var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	animationEnabled: true,
	title:{
		text: "q vs log(h)"
	},

	axisY: {
		title: "Number of Visitors",
		includeZero: false,
		scaleBreaks: {
			autoCalculate: true
		}
	},
	data: [{
		type: "line",
		color: "#F08080",
		dataPoints: [
			
			{ x: 1, y: 890 },
			{ x: 2, y: 930 },
			{ x: 32, y: 750 }
		]
	}]
});
chart.render();
	}
	else{
	
		ch.style.display = "none";
	}

}

