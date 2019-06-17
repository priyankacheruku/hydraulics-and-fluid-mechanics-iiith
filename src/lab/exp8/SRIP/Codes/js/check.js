function Parameters(l, h, cd , a) {
  this.len= l;
  this.hei = h;
  this.cof= cd;
  this.are = a;


}
var inputValues = new Parameters(50, 50, 50, 50);



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
          inputValues.len = length_value;
             //alert(length_value);
      }

  //height
     var height = document.getElementById("Height");
      var height_output= document.getElementById("Height_output");
      height_output.innerHTML = height.value;

      height.oninput = function() {
         
          height_output.innerHTML = this.value;
          var height_value=this.value;
          inputValues.hei=height_value;
          //alert(length_value);
      }


    //cofficient of discharge
      var cd = document.getElementById("cd");
      var cd_output= document.getElementById("cd_output");
      cd_output.innerHTML = cd.value;

      cd.oninput = function() {
          
          cd_output.innerHTML = this.value;
          cd_value=this.value;
          inputValues.cof=this.value;
      }
    //area
      var area  = document.getElementById("Area");
      var area_output= document.getElementById("Area_output");
      area_output.innerHTML = area.value;

      area.oninput = function() {
          
          area_output.innerHTML = this.value;
          var area_value=this.value;
          inputValues.are=this.value;


      }
  }//if closing for input parameters 

  else {
     text.style.display = "none";
  }


}//ckeckbox()




function show(){
  //alert("sa");
       //document.getElementById("sh").style.display=block;
      document.getElementById("sh").innerHTML = "length is  " + inputValues.len+"<br>height is" + 
      inputValues.hei+"<br>cofficient of discharge is" +
       inputValues.cof+"<br>area is" + inputValues.are;
       //"RESULT without velocity is ";
       //alert("sa");
       var l=parseInt(inputValues.len);
       var h=parseFloat(inputValues.hei);
       var c=parseFloat(inputValues.cof);
       var a=parseInt(inputValues.are);
       //q=2/3 * c * l * sqrt (2g) * h ^ 2/3 
       //q=(1.71*cd*l*(h^(3/2))

       //v=q/a
       //hv=v^2/2*g
       //g is  9.8
       //h1=h+hv
       //qv=1.71*cd*l(h1^(3/2)-hv^(3/2))

       //var q =(2/3)* parseInt(inputValues.cof)*parseInt(inputValues.length)*Math.sqrt(2*9.8)*parseInt(inputValues.hei);
       //alert(2/3*c*l*Math.sqrt(2*9.8)*Math.pow(h,(3/2)));
       //alert(q);2/3*c*l*Math.sqrt(2*9.8)*Math.pow(h,(3/2))
       var q=parseFloat(1.71*c*l*Math.pow(h,(3/2)));
       
       var V =q/a;
       var hv= Math.pow(V,2)/(2*9.8);
       var h1=h+hv;
       var qv=1.71*c*l*(Math.pow(h1,3/2)-Math.pow(hv,3/2))
       document.getElementById("q_value").innerHTML = "q value without velocity"+q+"<br> q value with velocity is "+qv;
}