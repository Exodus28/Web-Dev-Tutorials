[1,2,3,4]
(4) [1, 2, 3, 4]
[]
[]
[2]
[2]
[1,"hello",true,[2,3,4]]
(4) [1, 'hello', true, Array(3)]
var a = ["Foxtrot", "Uniform", "Charlie", "Kilo"]
undefined
a [0]
'Foxtrot'
a [0].charAt(0) + a [1].charAt(0) + a [2].charAt(0) + a [3].charAt(0) + ' ' + a[2]
'FUCK Charlie'
a.length
4
a [a.length] = "Echo"
'Echo'
a [a.length] = "Romeo"
'Romeo'
a
(6) ['Foxtrot', 'Uniform', 'Charlie', 'Kilo', 'Echo', 'Romeo']
a.push("Sierra")
7
a
(7) ['Foxtrot', 'Uniform', 'Charlie', 'Kilo', 'Echo', 'Romeo', 'Sierra']
a.splice(6, 1)
['Sierra']
a
(6) ['Foxtrot', 'Uniform', 'Charlie', 'Kilo', 'Echo', 'Romeo']
a.splice(0, 2)
(2) ['Foxtrot', 'Uniform']
a
(4) ['Charlie', 'Kilo', 'Echo', 'Romeo']
a.pop()
'Romeo'
a[0] = Indigo 
VM2177:1 Uncaught ReferenceError: Indigo is not defined
    at <anonymous>:1:8
(anonymous) @ VM2177:1
a[0] = "Indigo"
'Indigo'
a
(3) ['Indigo', 'Kilo', 'Echo']
a [0].push("Hotel")
VM2412:1 Uncaught TypeError: a[0].push is not a function
    at <anonymous>:1:7
(anonymous) @ VM2412:1
b = [5, 8, 2, 4, 9, 0]
(6) [5, 8, 2, 4, 9, 0]
b.sort()
(6) [0, 2, 4, 5, 8, 9]
