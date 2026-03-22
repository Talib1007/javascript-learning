// primitive 

// 7 types: string,Number,Boolean,null,
// undefined,Symbol,BigInt

// Reference (Non-Primitive)

// array,objects,functions

const score=100
const scoreValue=100.3

const isLoggedIn =false
const outsideTemp =null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id===anotherId);

const bigNumber=32731879293929191n

const heros=["Shaktiman","Nagraj","doga"]

let myObj=
{
    name:"hitesh",
    age:22,
}

const myFunction=
function(){
console.log("hello world")
}

// console.log(typeof id)


// ++++++++++++++++++++++++++

// Stack(primitive),heap(Non-Primitve)

let myYoutubename="hiteshChoudharydotcom"

let anotherName=myYoutubename

anotherName="chaiaurcode"

// console.log(myYoutubename)
// console.log(anotherName)


let userOne={
    email:"user@google.com",
    upi:"user@ybl",
}

let userTwo=userOne

userTwo.email="hitesh@google.com"
console.log(userOne)
console.log(userTwo)
