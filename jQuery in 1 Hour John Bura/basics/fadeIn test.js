$(document).ready(function(){
  $("#button1").click(function(){
    $("h1").fadeOut();
    $("h2").fadeOut();
  });
  
  $("#button2").click(function(){
    $("h1").fadeIn();
    $("h2").fadeIn();
  });
});

