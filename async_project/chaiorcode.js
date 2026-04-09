const h=function (){
   let letters="0123456789ABCDEF"
    let color="#"

    for(let i=0;i<6;i++){
   color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId


document.querySelector('#start').addEventListener('click',function (e){
    if(!intervalId){
        intervalId= setInterval(()=>{
     document.querySelector('#body').style.backgroundColor=h()
   },1000)

    }
  
})
document.querySelector('#stop').addEventListener('click',function (){
clearInterval(intervalId)
intervalId=null;
})