function ShowSetClass() {
    document.getElementById("1stContent").onclick = function() {
        if ( document.getElementById("1stContent").className == "example") {
            document.getElementById("1stContent").className = "";
        }
        else {
            document.getElementById("1stContent").className="example";
        }
    };
}

window.onload = function() {
    ShowSetClass();
}