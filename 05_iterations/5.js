const coding=["js","rb","py","java","cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })

// coding.forEach( (item)=>{
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding=[
    {
        languageName:'javascript',
        languageFile:'js'
    } ,
     {
        languageName:'java',
        languageFile:'java'
    },
      {
        languageName:'python',
        languageFile:'py'
    },
      {
        languageName:'cplusplus',
        languageFile:'c++'
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName)
    console.log(item.languageFile)
})