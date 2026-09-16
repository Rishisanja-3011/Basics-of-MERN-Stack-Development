// console.log("Hello There!")
// console.warn("This is warning")
// var a = 10

// //alert("welcome home?")

// var a = confirm("are you an adult ")

// console.log(a)

// var name = prompt("Enter your name...")
// console.log(name)


/* 
JS DATATYPES
 -premetive
    -numbers
    -string
    -boolean
    -undefined
    -null
    -symbol
    -nan
 -reference
    -array
    -object
    -function
*/


var abc = function(){
   console.log("Hey you called a funtion")
}
abc()


var obj1 = {
   user : 'Rishi',
   surname : 'Sanja',
   age : 21
}

console.log(obj1)
console.log(obj1.user)

//array of objects

var arr = [{name:"Rishi",age:21}]

console.log(arr[0].age)


//Dom 

// 4 pillars of dom i)
var a = document.querySelector('#try1')
a.innerHTML = "Hello World!"
a.style.backgroundColor = 'red'

var r = document.querySelector("h1")
console.log(r)

var s = document.querySelector("span")
console.log(s)

var u= document.querySelector("#p1")
console.log(u)



r.addEventListener("copy",function(){
   console.log("hello")
   r.innerHTML = "By World!",
   r.style.backgroundColor = "yellow"
})