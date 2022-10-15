$("#circle").click(function(){
    alert("circle clicked!")  
})
$("p").click(function(){
    $("p").html("text changed")   
})
$(".square").click(function(){
    alert($("iframe").attr("src", "https://www.google.com"))  //change iframe site to google
}) 
$("div").click(function(){
      $(this).css("width", "300px")
})
$("#rect").click(function(){
      $("#rect").css("width", "100px")
})
$("#rect").dblclick(function(){
      $("#rect").css("width", "400px")
})
$("#rect2").click(function(){
      $("#rect2").hide()
})
$("#circle2").dblclick(function(){
      $("#circle2").fadeOut(3000)
})
  