function sayMyName(){
    console.log("h")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}

// sayMyName()

function addTwoNumbers(number1,number2){
        console.log(number1+number2)
}

function addTwoNumbers(number1,number2){
    //  let  result=number1+number2
    //     return result
    return number1+number2           
}

// addTwoNumbers(4,null)
// addTwoNumbers(4,"4")
// addTwoNumbers(4,"a")

const result=addTwoNumbers(3,44)
console.log("Result:",result)

function loginUserMessage(username="sam"){
    if(!username){
        return "Please enter name"
    }
    else
{return `${username} just logged In`}
}

// console.log(loginUserMessage(""))
 console.log(loginUserMessage("hitesh"))

 function calculateCartPrice(val1,val2,...num1){
return num1
 }

// console.log(calculateCartPrice(200,400,500,322,442))

const user={
    name:"hitesh",
    price:199
}

function handleObject(anyObject){
     console.log(`username is ${anyObject .name} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    name:"sam",
    price:199
})

const myNewArray=[200,400,100,500]

function returnSecondValue(getArray){
console.log(getArray[1])
}

// returnSecondValue(myNewArray)

returnSecondValue([200,300,400])