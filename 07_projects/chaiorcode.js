const buttons=document.querySelectorAll('.box');
// console.log(buttons);
const body=document.querySelector('.body1')
buttons.forEach(function(button){
    // console.log(button)
    button.addEventListener('click',function (e){
    //    console.log(e)
     console.log(e.target.id)
    body.style.backgroundColor=e.target.id
})
})
