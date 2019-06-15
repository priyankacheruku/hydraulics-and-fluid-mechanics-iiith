function checkbox() {
	//alert("js");
  var checkBox = document.getElementById("inputParameter");
  var text = document.getElementById("parameters");
  if (checkBox.checked == true){



    text.style.display = "block";


//length
      var length = document.getElementById("Length");
      var length_output= document.getElementById("Length_output");
      length_output.innerHTML = length.value;

      length.oninput = function() {
          //alert("js");
          length_output.innerHTML = this.value;
          var length_value=this.value;
          //alert(length_value);
      }

  //height
     var height = document.getElementById("Height");
      var height_output= document.getElementById("Height_output");
      height_output.innerHTML = height.value;

      height.oninput = function() {
          
          height_output.innerHTML = this.value;
          var height_value=this.value;
          //alert(length_value);
      }


    //cofficient of discharge
      var cd = document.getElementById("cd");
      var cd_output= document.getElementById("cd_output");
      cd_output.innerHTML = cd.value;

      cd.oninput = function() {
          
          cd_output.innerHTML = this.value;
          var cd_value=this.value;
          //alert(length_value);
      }
    //area
      var area  = document.getElementById("Area");
      var area_output= document.getElementById("Area_output");
      area_output.innerHTML = area.value;

      area.oninput = function() {
          
          area_output.innerHTML = this.value;
          var area_value=this.value;
          //alert(length_value);
      }
  }//if closing for input parameters 

  else {
     text.style.display = "none";
  }

  
  var checkBox2 = document.getElementById("show_graph");
  if (checkBox2.checked == true){
    alert("as");
  }

  
}
