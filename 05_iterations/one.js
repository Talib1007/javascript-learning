// for

// for(let index=1;index<=10;index++){
//     const element=index
//     if(element==5){
//         console.log("element is 5")
//     }
//     console.log(element)
// }
// console.log(element)

// for(let i=1;i<=10;i++){
//     console.log(`outerloop: ${i}`)
// for(let j=1;j<=10;j++){
//     console.log(`${i}*${j}=${i*j}`)
// }
// }


let myArray=["flash","batman","superman"]

for(let index=0;index<myArray.length;index++){
    const element =myArray[index]
    console.log(element)
}
console.log(myArray.length)

// break and continue

// for(let index=0;index<=20;index++){
//     if(index==5){
//         console.log("5 is detected")
//         break;
//     }
//     console.log(index)
// }
for(let index=0;index<=20;index++){
    if(index==5){
        console.log("5 is detected")
        continue;
    }
    console.log(index)
}