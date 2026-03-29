const user ={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`)
         console.log(this)
    }
   
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username)
// }
const chai=()=>{
    let username="hitesh"
    console.log(this)
}
// chai()

// const addTwo=(num1,num2)=>{
//     console.log(num1+num2)
// }
// const addTwo=(num1,num2)=> (num1+num2)
const addTwo=(num1,num2)=>({
    username:"hitesh"
})
console.log(addTwo(5,3))

const myArray=[2,3,5,7,8]
  