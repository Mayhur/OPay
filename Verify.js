let Input1 =Math.round(Math.random(2)*5)
let Input2 =Math.round(Math.random(3)*5)
let Input3 =Math.round(Math.random(4)*5)
let Input4 =Math.round(Math.random(4)*5)
let Input5 =Math.round(Math.random(2)*5)
let Input6 =Math.round(Math.random(3)*5)
 let Result = Input1 +' '+Input2 +' '+Input3 +' '+Input4 +' '+Input5+' '+ Input6
let Local = localStorage.getItem('Email')


let Number1 = 60
let Seconds = 's'
document.addEventListener('DOMContentLoaded', function(){
let Interval=  setInterval(function(){
      
        Number1=Number1-1
Receive.innerHTML=`Didn't receive code? Resend ${`{`}${Number1}${Seconds} ${`}`}`
if(Number1 === 0 ){
clearInterval(Interval)
}
         },1000)
})
    


let Verify= document.querySelector('.Verify').innerHTML=`A verification code has been sent to your email ${Local}`

let Opay = document.querySelector('.Opay').innerHTML=`DO NOT DISCLOSE.This is the code Sent to your Email ${Result}, Remeber , No staff of Opay will ask for this code`

let Receive = document.querySelector('.Receive')
let Links = document.querySelector('.Link')
let card= document.querySelector('.All')
document.addEventListener('DOMContentLoaded', function(){
setTimeout(function(){
 card.style.display="block"
 if(card.style.display=="block"){
    Links.classList.add('Link1')
}else if(card.style.display =="none"){
    Links.classList.remove('Link1')
    Links.classList.add('Link')
}
},10000)

})



let Cancel= document.querySelector('.cancel')
Cancel.addEventListener('click', function(){
   card.style.display="none"
})
let input1=document.querySelector('.Input1')
let input2=document.querySelector('.Input2')
let input3=document.querySelector('.Input3')
let input4=document.querySelector('.Input4')
let input5=document.querySelector('.Input5')
let input6=document.querySelector('.Input6')
let Link = document.querySelector('.Very')

input6.addEventListener('blur', function(){
    if(input1.value == Input1&&
        input2.value == Input2 &&
        input3.value == Input3 &&
        input4.value == Input4 &&
        input5.value == Input5 &&
        input6.value == Input6
        ){ Link.classList.remove('Very')
            Link.classList.add('color')}

            if(Link.classList.contains('color')){
                Link.href="/MainPage.html"
            }
})


