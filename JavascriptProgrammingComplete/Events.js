/* document.onclick=function(){
    alert("you clicked the page");
}
 */

function eventhandler(){


    var image = document.getElementById("image");

    image.onclick=function(){
        alert("you clicked the image");
    }
}

window.onload=function(){
    eventhandler();
}