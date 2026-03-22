// date

let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate=new Date(2026,2,19,3,32)
 let myCreatedDate=new Date(2026,2,19,20,50,40)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())
let myTimeStamp=Date.now()
 console.log(Math.floor(myTimeStamp/1000))
// console.log(myCreatedDate.getTime())
console.log(Math.floor(myCreatedDate.getTime()/1000))

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDate())

// `${newDate.getDay()} and the time `

