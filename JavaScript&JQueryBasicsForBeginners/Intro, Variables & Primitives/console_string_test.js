'hello'
'hello'
"hello"
'hello'
//single quote string you can put double quotes inside
undefined
'"hello"'
'"hello"'
""hello""
VM1431:1 Uncaught SyntaxError: Unexpected identifier
//likewise, using quotation marks first enables use of apostrophe within
undefined
"it's an apostrophe"
"it's an apostrophe"
//concatenation (joining two strings together)
undefined
"hello" + "world"
'helloworld'

var s = "hello"
undefined
s
'hello'
s.charAt(0)
'h'
s.charAt(1)
'e'
s.charAt(2)
'l'
s.charAt(5)
''
//empty string if out of bounds
undefined
s[0]
'h'
s[1]
'e'
s[2]
'l'
//the above also works in some browsers but isn't best practice
undefined
var t = "www.google.com"
undefined
t.indexOf("e");
9
t.indexOf("x");
-1
//the above -1 indicates the string item wasn't found
undefined
t.indexOf("oo");
5
//the above search for two characters shows where the string begins
undefined
t.lastIndexOf(".")
10
t.slice(4, 9)
'googl'
t.slice(4,10)
'google'
t.substr(0,4)
'www.'
t.substr(1,4)
'ww.g'
t.toUpperCase()
'WWW.GOOGLE.COM'
t.toLowerCase()
'www.google.com'
s.replace("g","$")
'hello'
t.replace("g","$")
'www.$oogle.com'
t.replace("oo", "i")
'www.gigle.com'
//only replaces first instance, though can replace more than one character
undefined
t.split(".")
(3) ['www', 'google', 'com']
//creates an array, splitting each by the "." character
undefined
