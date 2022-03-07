let inputNo = document.getElementById("number") //set var to text field input
let length = document.getElementById("length") //set vars to paragraph ids
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function convert(){
    let lengthImp = inputNo.value * 3.280 //set imperial unit var values
    let volumeImp = inputNo.value * 0.219
    let massImp = inputNo.value *  2.204
    
    if (inputNo.value == ""){       //if text field is blank, set p elements to blank
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""    
    }
    else if (inputNo.value == 1){  //update to display value & added text (singular)
        length.textContent = (inputNo.value + " " + "metre is equal to " + lengthImp + " feet")
        volume.textContent = (inputNo.value + " " + "litre is equal to " + volumeImp + " gallons")
        mass.textContent = (inputNo.value + " " + "kilogram is equal to " + massImp + " pounds")
        
    }
    else{        
        let lengthStr = lengthImp.toFixed(3) //use toFixed to set to 3 decimal places 
        let volumeStr = volumeImp.toFixed(3) //instead of setting manual character limit variable
        let massStr = massImp.toFixed(3)     //to fix string length like in previous attempt
        
        //update html <p> elements to display value + added text (plural)
        length.textContent = (inputNo.value + " " + "metres is equal to " + lengthStr + " feet")
        volume.textContent = (inputNo.value + " " + "litres is equal to " + volumeStr + " gallons")
        mass.textContent = (inputNo.value + " " + "kilograms is equal to " + massStr + " pounds")
    }
}

        //clear input & displayed conversions
function revert() {
        inputNo.value = ""
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""  
}
