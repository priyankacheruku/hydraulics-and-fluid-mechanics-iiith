//alert("js");
var c = document.getElementById("myCanvas");

var cyl =c.getContext("2d");
cyl.fillRect(500,250,100,200)


var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 5, 0);
grd.addColorStop(0, "brown");
ctx.fillStyle = grd;

ctx.fillRect(20, 180, 10, 200);
ctx.fillRect(70, 185, 10, 200);
ctx.fillRect(200, 190, 10, 200);
ctx.fillRect(220, 190, 10, 200);
ctx.fillRect(350, 200, 10, 200);
ctx.fillRect(400, 200, 10, 200);



var rctx = c.getContext("2d");
rctx.rotate(4* Math.PI / 180);
rctx.fillRect(28, 150, 340, 30);


;