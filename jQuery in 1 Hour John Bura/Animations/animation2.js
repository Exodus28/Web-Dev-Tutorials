$(document).ready(function(){
  $("#button1").click(function(){
    $("div").animate({left:'200px'}, "slow")
  });
  $("#button2").click(function(){
    $("div").animate({left:'8px'},"fast")
  });
  $("#button3").click(function(){
    $("div").animate({
      height:'300px',
      width:'300px'
    })
  });
    $("#button4").click(function(){
    $("div").animate({
      height:'100px',
      width:'100px'
    })
  });
});

