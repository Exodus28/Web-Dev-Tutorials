window.onload=function(){
    eventhandler();
    show();
}

document.getElementById("dataBlock").style.display="none"; //set default view

function eventhandler(){
   
    function message() {
        alert("3 second alert is on");
    }
    setTimeout(message,3000);

    
    //get image

    var image = document.getElementById("mainImage");

    //create array of different images
    var imageArray = ["images/hero_image.jpg", "images/code.png", 
                "images/academy_brand_med.png", "images/top_logo.png",
                "images/one_million_bottom_brand.png"];

    //set array index value to 0;
    var imageIndex = 0;

    //create function to change image, set attribute to "src" 
    //and value to imageArray[indexValue]
    function changeImage() {
        image.setAttribute("src", imageArray[imageIndex]);
        imageIndex++; //increment Index
        if(imageIndex>=imageArray.length){ //loop Index back to 0
            imageIndex = 0;
        }
    }

    var intervalHandler = setInterval(changeImage, 3000); //set timer on function 

    image.onclick=function(){
        alert("you clicked the image");
        clearInterval(intervalHandler); //clear the timer 
    }


}

function show(){
    document.getElementById("select").onclick = function(){ //when clicked, do this
        if(document.getElementById("select").checked){ //if element is checked
            document.getElementById("dataBlock").style.display="block"; //display as block
        }
        else {
            document.getElementById("dataBlock").style.display="none"; //otherwise don't
        }
    };
}


