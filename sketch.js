
const { Colors } = require("discord.js");

var x = 310;
var y = 180;
var xSpeed = 1 ;
var ySpeed = 2;
var radius = 30;
var gr = 204;
var g = 1;
moleimage;
var f = 0.5;


function preload(){



}

function setup() {
    createCanvas(1800, 1080, WEBGL);
    moles = [];
    let mellemrum = 10;

    let mellemrumx = width / count - mellemrum * 2;
    let count = 3;
    let mellemrumy = height / count - mellemrum * 2;

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
          var x = (i + 1) * spacingx;
          var y = (j + 1) * spacingy;
          let m = new mole();
          m.x = x;
          m.y = y;
          moles.push(m);
        }
      }



}

function draw() {
    background(32,76,52);
 
     
}

function mouseClicked() {
    
}


