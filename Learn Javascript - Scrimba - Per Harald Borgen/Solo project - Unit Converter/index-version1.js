let inputNo = document.getElementById("number") //set var to text field input
let length = document.getElementById("length") //set vars to paragraph ids
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function convert(){
    let lengthImp = inputNo.value * 3.280 //set imperial unit var values
    let volumeImp = inputNo.value * 0.219
    let massImp = inputNo.value *  2.204
    
    if (inputNo.value == ""){   //if text field is blank, set p elements to blank
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""    
    }
    else if (inputNo.value == 1){   //update to display value & added text (singular)
        length.textContent = (inputNo.value + " " + "metre is equal to " + lengthImp + " feet")
        volume.textContent = (inputNo.value + " " + "litre is equal to " + volumeImp + " gallons")
        mass.textContent = (inputNo.value + " " + "kilogram is equal to " + massImp + " pounds")
        
    }
    else{
        let charLimit = 5; //set character limit for string
        
        let lengthStr = lengthImp.toString() //convert to string var
        let volumeStr = volumeImp.toString()
        let massStr = massImp.toString()
        
        let trimLengthStr = lengthStr.substring(0, charLimit) //then create new var & set max string length
        let trimVolumeStr = volumeStr.substring(0, charLimit) //probably a better way to do this though
        let trimMassStr = massStr.substring(0, charLimit)
        
        //update html <p> elements to display value + added text (plural)
        length.textContent = (inputNo.value + " " + "metres is equal to " + trimLengthStr + " feet")
        volume.textContent = (inputNo.value + " " + "litres is equal to " + trimVolumeStr + " gallons")
        mass.textContent = (inputNo.value + " " + "kilograms is equal to " + trimMassStr + " pounds")
    }
}

        //clear input & displayed conversions
function revert() {
        inputNo.value = ""
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""  
}
