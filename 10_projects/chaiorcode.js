const form =document.querySelector('form')
const cpunum=Math.floor(Math.random()*100+1)

let remainingguesses=10
 let guesslist=[]
     const guessDisplay=document.querySelector('#guesses')
form.addEventListener('submit',function(e){
    e.preventDefault()
    const chosen=parseInt(document.querySelector('#number').value)
   
      guesslist.push(chosen)
      guessDisplay.innerHTML=guesslist.join(', ')

if(chosen<cpunum){
        const div=document.querySelector('#result')
        const ans=document.querySelector('#low')
        div.innerHTML=ans.innerHTML
       const rem=document.querySelector('#remainingguesses')
       const cvb=parseInt(rem.innerHTML)-1
       rem.innerHTML=cvb

    }
    else if(chosen==cpunum){
        const div=document.querySelector('#result')
        const ans=document.querySelector('#correct')
       div.innerHTML=ans.innerHTML+'  hurray'
    
    }
    else if(chosen>cpunum){
                const div=document.querySelector('#result')
        const ans=document.querySelector('#high')
        div.innerHTML=ans.innerHTML
         const rem=document.querySelector('#remainingguesses')
       const cvb=parseInt(rem.innerHTML)-1
       rem.innerHTML=cvb

    }
})
