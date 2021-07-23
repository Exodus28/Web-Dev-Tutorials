/* Not yet explained in Tutorial though assuming create variable,
assign/attribute it to element in HTML by ID name */
var jsCanvas = document.getElementById("jsCanvas");

var context = jsCanvas.getContext("2d"); /* don't understand getContext() 
                                      yet though again assuming just to 
                                      designate type of element as
                                      2D rather than 3D / other? */

context.fillStyle = "red"; /* set fill on var 'context' to red */

context.fillRect(25,10,350,80); /* Create rectangle 
`````````````````````````````````first two are x & y position,
                                 last two are x & y size, 
                                 orange rect behind appears due to
                                 CSS on <canvas> tag*/


var jsCanvas2 = document.getElementById("jsCanvas2");    
var context2 = jsCanvas2.getContext("2d");
var aGradient = context2.createRadialGradient(0,0,3,50,50,100);  
/* create var - createRadialGradient(x0, y0, radius0, x1, y2, radius1) */

aGradient.addColorStop(0, "cyan"); /* add colors into gradient */
aGradient.addColorStop(1, "purple");

context2.fillStyle = aGradient;  /* set fill to var aGradient */
context2.fillRect(0,0,150,150);   /* set pos & size of rect */ 


var jsCanvas3 = document.getElementById("jsCanvas3");
var context3 = jsCanvas3.getContext("2d");
var aGradient2 = context3.createLinearGradient(0,0,70,100,100);

aGradient2.addColorStop(0, "black");
aGradient2.addColorStop(1, "green");

context3.fillStyle = aGradient2;
context3.fillRect(0,0,150,150);
