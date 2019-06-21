//script for 2d canavas  to represent simulation
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");


//suport stands for water tanker
ctx.save();
ctx.beginPath();
ctx.fillStyle="brown";
ctx.fillRect(20, 180, 10, 100);
ctx.fillRect(70, 185, 10, 100);
ctx.fillRect(200, 190, 10, 110);
ctx.fillRect(220, 190, 10, 110);
ctx.fillRect(350, 200, 10, 110);
ctx.fillRect(420, 195, 10, 110);
ctx.restore();


var rctx = c.getContext("2d");

rctx.save();
var rctx = c.getContext("2d");
//rctx.rotate(4* Math.PI / 180);
rctx.beginPath();
rctx.rect(18, 70, 50, 90);//BACKSIDE
rctx.fillStyle = "#4e9daf";
rctx.fill();
rctx.restore();





/*
rctx.save();
var rctx = c.getContext("2d");
rctx.rotate(4* Math.PI / 180);
rctx.beginPath();
rctx.rect(35, 75, 400, 50);//glass
rctx.fillStyle = "#74ccf4";
rctx.fill();
rctx.restore();
*/


//container
rctx.save();
var rctx = c.getContext("2d");
rctx.rotate(2* Math.PI / 180);
rctx.beginPath();
rctx.rect(33,100, 400, 62);//water
rctx.fillStyle = "blue";
rctx.fill();
rctx.restore();



//base support
rctx.save();
rctx.rotate(4* Math.PI / 180);
rctx.beginPath();
rctx.fillStyle="brown";
rctx.rect(28, 150, 340, 30);
rctx.fill();
rctx.restore();





//front view
var front_rect=c.getContext("2d");

front_rect.save();
front_rect.rotate(-6* Math.PI / 180);
front_rect.beginPath();
front_rect.rect(330,210,80,30);
front_rect.fillStyle ="brown";
front_rect.fill();
front_rect.restore();

front_rect.save();
front_rect.beginPath();
front_rect.rect(350,100,20,80);
front_rect.fillStyle ="brown";
front_rect.fill();
front_rect.restore();


front_rect.save();
front_rect.beginPath();
front_rect.rect(410,100,20,80);
front_rect.fillStyle ="brown";
front_rect.fill();
front_rect.restore();


//out let water container
//var cylinder=document.getElementById("cylinder");

var cyl =c.getContext("2d");
cyl.save();
drawCylinder(cyl ,400,210,100,100);

cyl.beginPath();
drawCylinder(cyl ,405,240,90,65);
cyl.fillStyle="blue";
cyl.fill();

cyl.beginPath();
cyl.rect(405,245,90,52); //to display blue in cylinder
cyl.fillStyle= "blue";
cyl.fill();

cyl.restore();


//function to draw cylinder
function drawCylinder(cy, x, y, w, h) {
    'use strict';
    var i, xPos, yPos, pi = Math.PI, twoPi = 2 * pi;

    cy.beginPath();

    for (i = 0; i < twoPi; i += 0.001) {
        xPos = (x + w / 2) - (w / 2 * Math.cos(i));
        yPos = (y + h / 8) + (h / 8 * Math.sin(i));

        if (i === 0) {
            cy.moveTo(xPos, yPos);
        } else {
            cy.lineTo(xPos, yPos);
        }
    }
    cy.moveTo(x, y + h / 8);
    cy.lineTo(x, y + h - h / 8);

    for (i = 0; i < pi; i += 0.001) {
        xPos = (x + w / 2) - (w / 2 * Math.cos(i));
        yPos = (y + h - h / 8) + (h / 8 * Math.sin(i));

        if (i === 0) {
            cy.moveTo(xPos, yPos);
        } else {
            cy.lineTo(xPos, yPos);
        }
    }
    cy.moveTo(x + w, y + h / 8);
    cy.lineTo(x + w, y + h - h / 8);

    cy.stroke();
}

