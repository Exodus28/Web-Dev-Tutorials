let inputNo = document.getElementById("number")
let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

function convert(){
    let lengthImp = inputNo.value * 3.280
    let volumeImp = inputNo.value * 0.219
    let massImp = inputNo.value *  2.204
    
    if (inputNo.value == ""){
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""    
    }
    else if (inputNo.value == 1){
        length.textContent = (inputNo.value + " " + "metre is equal to " + lengthImp + " feet")
        volume.textContent = (inputNo.value + " " + "litre is equal to " + volumeImp + " gallons")
        mass.textContent = (inputNo.value + " " + "kilogram is equal to " + massImp + " pounds")
        
    }
    else{
        let charLimit = 5;
        
        let lengthStr = lengthImp.toString()
        let volumeStr = volumeImp.toString()
        let massStr = massImp.toString()
        
        let trimLengthStr = lengthStr.substring(0, charLimit)
        let trimVolumeStr = volumeStr.substring(0, charLimit)        
        let trimMassStr = massStr.substring(0, charLimit)
        
        length.textContent = (inputNo.value + " " + "metres is equal to " + trimLengthStr + " feet")
        volume.textContent = (inputNo.value + " " + "litres is equal to " + trimVolumeStr + " gallons")
        mass.textContent = (inputNo.value + " " + "kilograms is equal to " + trimMassStr + " pounds")
    }
}


function revert() {
        inputNo.value = ""
        length.textContent = ""
        volume.textContent = ""
        mass.textContent = ""  
}
