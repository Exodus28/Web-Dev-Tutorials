$(document).ready(function(){
  $("#button1").click(function(){
    $("h1").fadeOut("slow");
    $("h2").fadeOut(4000);

  });
  
  $(".otherButton").click(function(){
    $(".fadeTag").fadeIn("fast");

  });
});

