var phrase = "Let\"s code in Javascript";
var p = 'ad\'d aaa';
console.log(p);
console.log(phrase);
console.log(phrase.length);
var x = phrase.toUpperCase();
console.log(x);
var x = phrase.indexOf("s");
console.log(x);
if(phrase.indexOf("jazeb")==-1){
    console.log("doesn't have any");
}
var x = phrase.lastIndexOf("in");
console.log(x);
var x = phrase.slice(6,11);
console.log(x) ;
var x = phrase.substring(8,11);
console.log(x);
var x = phrase.substr(6,11);
console.log(x);
var str1 = "hello";
var str2 = "Hello";
if (str1.toUpperCase()==str2.toUpperCase()){
    console.log("they are equal");
}
