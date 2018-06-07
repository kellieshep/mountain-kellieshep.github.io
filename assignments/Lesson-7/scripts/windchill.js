function windChill(){
var tempF = 81;
var speed = 5; 
var s = Math.pow(speed,0.16);
var wchill = 35.74 +( 0.6215 * tempF) -( 35.75 * s) + (0.4275 * tempF * s);
document.getElementById("wchill").innerHTML="The value is <strong>"+ wchill.toFixed(1)+"</strong>";
} 