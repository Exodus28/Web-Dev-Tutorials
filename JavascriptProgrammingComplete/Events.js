/* document.onclick=function(){
    alert("you clicked the page");
}
 */

window.onload=function(){
    eventhandler();
}

function eventhandler(){


    var image = document.getElementById("image");

    image.onclick=function(){
        alert("you clicked the image");
    }
    
    var textField = document.getElementById("textField");

    textField.onblur = function() {
        if (textField.value == "") {
            textField.value = "Type here";
        }
    }

    textField.onfocus = function() {
        if (textField.value == "Type here") {
            textField.value = "";
        }
    }


    function message() {
        alert("3 second alert is on");
    }
    setTimeout(message,3000);

}



