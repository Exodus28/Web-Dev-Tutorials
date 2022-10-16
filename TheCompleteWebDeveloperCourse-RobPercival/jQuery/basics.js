$("#circle").click(function(){                        //detect click
    alert("circle clicked!")  
})
$("p").click(function(){                              //change DOM
    $("p").html("text changed")   
})
$(".square").click(function(){
    alert($("iframe").attr("src", "https://www.google.com"))  //change iframe site to google
}) 
$("div").click(function(){                            //change css
      $(this).css("width", "300px")
})
$("#rect").click(function(){                          
      $("#rect").css("width", "100px")
})
$("#rect").dblclick(function(){
      $("#rect").css("width", "400px")
})
$("#rect2").click(function(){                         //hide elements
      $("#rect2").hide()
})
$("#circle2").dblclick(function(){                    //fade elements
      $("#circle2").fadeOut(3000)
})
  
$("#fader").click(function(){
      $("p").fadeOut()
})

$("#fader2").click(function(){
      $("p").fadeIn()
})
$("#circle3").click(function(){                       //animate elements
      $(this).animate({
            width:"300px",
            height:"300px",
            borderRadius:"150px",
            marginLeft:"150px",
            marginTop:"150px"
      },1000)
})