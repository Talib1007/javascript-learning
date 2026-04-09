const form =document.querySelector('form')
form.addEventListener('submit',function (e){
    e.preventDefault()
const height =parseInt(document.querySelector('#height').value)
const weight =parseInt(document.querySelector('#weight').value)
 const result =document.querySelector('#result')
if(height==0|| isNaN(height)|| height<0){
   result.innerHTML="enter valid height"
}
else if(weight==0|| isNaN(weight)|| weight<0){
   result.innerHTML="enter valid weight"

}
else{
    const bmi=Math.round((weight*10000)/(height*height))
   
result.innerHTML=`<span>${bmi}</span>`
if(bmi<18){
    const information=document.querySelector('#information')
    information.innerHTML='underweight'
}
else if(bmi>=18 && bmi<24){
    const information=document.querySelector('#information')
    information.innerHTML='standard weight'
}
else if(bmi>24){
    const information=document.querySelector('#information')
    information.innerHTML='overweight'
}
}


})