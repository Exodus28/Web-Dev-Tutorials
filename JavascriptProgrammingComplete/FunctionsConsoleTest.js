var x = 10;
var y= 20;
var v;
var s, t, u; //create multiple variables on same line

function add() { //create function
    v=x+y;       //set v to x+y
    console.log(v);//log result
}

add();
add();
add(); //can call multiple times

function add2(t,u){ //set function with parameters t, u
    s=t+u;
    console.log(s) //log result
}

add2(30,50); //call function add2 & pass parameters values
