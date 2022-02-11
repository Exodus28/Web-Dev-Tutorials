$(document).ready(function(){
  $("#button1").click(function(){
    $("div").animate({left:'200px'}, "slow")
  });
  $("#button2").click(function(){
    $("div").animate({left:'8px'},"fast")
  });
  $("#button3").click(function(){
    $("div").animate({
      height:'+=50px',
      width:'+=50px'
    })
  });
    $("#button4").click(function(){
    $("div").animate({
      height:'-=40px',
      width:'-=40px'
    })
  });
});

