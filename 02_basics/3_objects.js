// singleton
 
// Object.create

// object literal

const mySym=Symbol("key1")


const JsUser={
    name:"hitesh",
    age:18,
    [mySym]:"mykey1",
    location:"Jaipur",
   email:"hitesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser[mySym])
// console.log(typeof mySym)

JsUser.email="hitesh@chatgpt.com"
console.log(JsUser["email"])
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello JS user")
}
JsUser.greetingTwo=function(){
    console.log(`Hello Js User ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())