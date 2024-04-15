// Primitive 

// 7 type : String, Number, Boolean, null, undefined, Symbol, BinInt. 

//JavaScript is Dynamically type language.
const scor = 100 
const scorValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);


const bigNumber = 8974651489465865n


// Reference (Non primitive)

// Array, Objects, Functions


const heros = ["Shaktiman", "naagraj", "doga"]

let myObj = {
    name: "ANkit",
    age: 22,
}

const myFunction =  function(){
    console.log("Hello world");
}


console.log(typeof myFunction);