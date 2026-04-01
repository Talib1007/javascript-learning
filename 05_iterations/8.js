const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)

// console.log(myTotal)

const myTotal=myNums.reduce((acc,curr)=>acc+curr,0)

console.log(myTotal)

const shoppingCard=[
    {
        itemName:"js course",
        price:999
    },
     {
        itemName:"py course",
        price:4999
    },
     {
        itemName:"cpp course",
        price:3999
    },
     {
        itemName:"rb course",
        price:2999
    },
     {
        itemName:"java course",
        price:1999
    },
     {
        itemName:"rust course",
        price:5999
    }
]

const priceToPay=shoppingCard.reduce((acc,currval)=>acc+currval.price,0)

console.log(priceToPay)