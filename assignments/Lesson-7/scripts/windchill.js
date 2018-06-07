function windChill(){
var tempF = 80.9;
var speed = 5;
var s = Math.pow(speed,0.16);
var w = 35.74 +( 0.6215 * tempF) -( 35.75 * s) + (0.4275 * tempF * s);
var result= w.toFixed(1);
document.getElementById("outputDiv").innerHTML= result; 
}