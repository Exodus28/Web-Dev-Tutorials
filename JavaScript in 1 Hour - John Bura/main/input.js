var firstNumber = 2;
var secondNumber = 3;
var variableName = 'John ';
var secondString = 'Johnson';

function changeTheText(){
  document.getElementById('paragraphText').innerHTML = firstNumber + secondNumber;
}

function changeTheText2(){
  document.getElementById('paragraphText2').innerHTML = variableName + secondNumber;
}

function changeTheText3(){
  document.getElementById('paragraphText3').innerHTML = variableName + secondString;
}

function changeText(){
  var changeTextVariable = document.getElementById('changeUserText').value;  
  document.getElementById('paragraphText4').innerHTML = changeTextVariable;
}
