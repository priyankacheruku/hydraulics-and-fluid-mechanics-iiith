function checkbox() {
	//alert("js");
  var checkBox = document.getElementById("inputParameter");
  var text = document.getElementById("parameters");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}
