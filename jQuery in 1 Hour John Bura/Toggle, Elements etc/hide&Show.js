$(document).ready(function(){
  $("#button1").click(function(){
    $("h1").fadeOut("slow");
    $("h2").fadeOut(2000);
  });
  
  $("#button2").click(function(){
    $(".fadeTag").fadeIn("fast");
  });
  
  $("#hideBtn").click(function(){
    $(".fadeTag").hide();
  });
  $("#showBtn").click(function(){
    $(".fadeTag").show();
  });
});

