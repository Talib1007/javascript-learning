const name="hitesh"
const repoCount=50

// console.log(name+repoCount+ " value")

// console.log(`Hello my name is  ${name} and my repo is ${repoCount}`)

const gameName=new String('hitesh-hc')
// console.log(gameName.length)
console.log(gameName.__proto__)
// console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))
console.log(gameName.indexOf("c"))
const newString=gameName.substring(0,4)
console.log(newString)

const anotherString=gameName.slice(-7,8)
console.log(anotherString)

const newStringOne="      hitesh      "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://hitesh.com/hiteshChoudhary"

console.log(url.replace('Choudhary','singh'))

console.log(url.includes('hith')) 

console.log(gameName.split('-'))