const coding=["js","rb","py","java","cpp"]


const values=coding.forEach((item)=>{
    // console.log(item)
    return item 
})

console.log(values)
// first method for operation on array using filter function  
const myNums=[1,2,3,4,5,6,7,8,9,10]
const newNums=myNums.filter((nums)=>{
    return nums>4
})

console.log(newNums)

// second method for operation on array using for each function

const newNums1=[]

myNums.forEach((num)=>
{
    if(num>4){
        newNums1.push(num)
    }
})

console.log(newNums1)

const books = [
  { title: "The Alchemist", genre: "Fiction", publish: 1988, edition: 1993 },
  { title: "Clean Code", genre: "Programming", publish: 2008, edition: 2015 },
  { title: "Atomic Habits", genre: "Self-help", publish: 2018, edition: 2020 },
  { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997, edition: 2017 },
  { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: 2001 },
  { title: "Deep Work", genre: "Productivity", publish: 2016, edition: 2019 },
  { title: "Harry Potter", genre: "Fantasy", publish: 1997, edition: 2014 },
  { title: "Think and Grow Rich", genre: "Motivation", publish: 1937, edition: 2005 },
  { title: "The Pragmatic Programmer", genre: "Programming", publish: 1999, edition: 2019 }
];

let userBooks=books.filter((bk)=>{
    return bk.genre==="Fantasy"
})

userBooks = books.filter((bk)=>{
    return bk.publish>=1950
})
console.log(userBooks)