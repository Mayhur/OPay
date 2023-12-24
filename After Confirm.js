let Local =localStorage.getItem('Number')
document.addEventListener('DOMContentLoaded', function(){
    let Verification =document.querySelector('.Veri').innerHTML=`A verification has been sent to your phone number  +234${localStorage.getItem('Number')}`
})
let Random1=Math.round(Math.random()*3)
let Random2=Math.round(Math.random()*3)
let Random3=Math.round(Math.random()*3)
let Random4=Math.round(Math.random()*3)
let Random5=Math.round(Math.random()*3)
let Random6=Math.round(Math.random()*3)
let OTP =+Random1+' '+Random2+' '+Random3+' '+Random4 +' '+Random5 +' ' +Random6;
let Numbers =24;
let Seconds ='s'
let Code =document.querySelector('.Resend')

document.addEventListener('DOMContentLoaded',function(){

    let Inter=setInterval(function(){
 Numbers-=1
Code.innerHTML=`Don't receive a code ? Resend in ${Numbers+Seconds}`
if(Numbers == 0){
    clearInterval(Inter)
}  
    },1000)
   
})

let Card = document.querySelector('.card');
setTimeout(function(){
  Card.style.display="block"
  if(Card.style.display=="block"){
    Margin.classList.add('marginl')
    }
    
    
},10000)

let Disclose = document.querySelector('.disclose').innerHTML=`DO NOT DISCLOSE . To login your iphone 7 Plus device pls use  OTP ${OTP}. No staff of OPay will ask for this code`

let Cancel = document.querySelector('.cancel')
Cancel.addEventListener('click', function(){
    Card.style.display ="none"
})
let Margin = document.querySelector('.margin')


let Input1=document.querySelector('.Input1')
let Input2=document.querySelector('.Input2')
let Input3=document.querySelector('.Input3')
let Input4=document.querySelector('.Input4')
let Input5=document.querySelector('.Input5')
let Input6=document.querySelector('.Input6')

let Next = document.querySelector('.Next')

Input6.addEventListener('blur', function(){
    if(Input1.value == Random1 &&
        Input2.value == Random2 &&
        Input3.value == Random3 &&
        Input4.value == Random4 &&
        Input5.value == Random5 &&
        Input6.value == Random6 
        )
    { Next.classList.remove('Next')
        Next.classList.add('Next1')}
   else if(Input1.value !== Random1 &&
    Input2.value !== Random2 &&
    Input3.value !== Random3 &&
    Input4.value !== Random4 &&
    Input5.value !== Random5 &&
    Input6.value !== Random6){
        Next.classList.add('Next')
    }
})
let NEXTLINK = document.querySelector('.NextLink')
Next.addEventListener('click', function(){
    if(Next.classList.contains('Next1')){
        NEXTLINK.href="/Set Password.html"
    }else if(Next.classList.contains('Next')){
        NEXTLINK.href=""
    }
})


//     Input2.value == Random2 &&
    //      Input3.value == Random3 && 
    //      Input4.value == Random4 && 
    //      Input5.value == Random5 &&
    //       Input6.value == Random6){