var firstNumber = 2;
var secondNumber = 3;
var variableName = 'John ';
var secondString = 'Johnson';

var newNumber = 3;

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
  if(newNumber ==1){
    var changeTextVariable = document.getElementById('changeUserText').value;  
    document.getElementById('paragraphText4').innerHTML = changeTextVariable;
  }
  else{
    var changeTextVariable = 'else statement fired';  
    document.getElementById('paragraphText4').innerHTML = changeTextVariable;
  }
}
