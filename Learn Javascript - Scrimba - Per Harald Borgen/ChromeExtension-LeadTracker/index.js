let myLeads = [] //empty leads array
const inputEl = document.getElementById("input-el") //link text input field
const inputBtn = document.getElementById("input-btn") //and button
const ulEl = document.getElementById("ul-el") //link list element
const deleteBtn = document.getElementById("delete-btn") 
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") ) //setup local storage variable to equal any existing items stored & parse from string
const tabBtn = document.getElementById("tab-btn") 

if (leadsFromLocalStorage) {    //if true, populate array with local storage items
    myLeads = leadsFromLocalStorage
    render(myLeads)         //pass myLeads argument to render function
}

tabBtn.addEventListener("click", function(){    //add event listener on button
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){ //grab active tab in active window
        myLeads.push(tabs[0].url) //push active tab url to array
        localStorage.setItem("myLeads", JSON.stringify(myLeads) ) //convert to string & add to local storage
        render(myLeads)
    })
})

function render(leads) { //render function & leads parameter
    let listItems = "" //set empty string
    for (let i = 0; i < leads.length; i++) { //loop through length of array & for each iteration add web link template string
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems //update list element innerHTML with list items
}

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear() //delete local storage items
    myLeads = []        //set empty array
    render(myLeads)     //call render function passing myLeads argument
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)     //push input value to array
    inputEl.value = ""              //clear text field
    localStorage.setItem("myLeads", JSON.stringify(myLeads) ) //add to local storage
    render(myLeads)
})