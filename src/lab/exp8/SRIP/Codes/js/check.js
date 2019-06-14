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




  } 

  else {
     text.style.display = "none";
  }
}
