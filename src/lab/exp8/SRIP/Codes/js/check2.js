//script file to display graph on clickcheckbox

function checkbox2(){
  //alert(outputValues.qv);
  //alert(arr[0][0]);
  	var checkBox = document.getElementById("show_graph");

  	
if (checkBox.checked == true){



	var chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		title:{
			text: "flow of discharge(q) vs Height"
		},
		axisX: {
			title: "Height",
		},
		axisY: {
			title: "flow of discharge",
			includeZero: false,
			scaleBreaks: {
				autoCalculate: true
			}	
		},
		data: [{
			type: "line",
			color: "#F08080",

			dataPoints: [
				
			//{ x: arr[1][0], y:[1][0] },
				{ x: 2, y: 930 },
				{ x: 32, y: 750 }
			]
		}]
	});
	
	chart.render();
	
	}
	else{
		var ch = document.getElementById("chartContainer");
		ch.style.display = "none";
	}

}