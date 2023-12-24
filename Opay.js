
let Icon =document.querySelector('.icon');
Icon.addEventListener('click', function(){
if(Icon.className=="fa-regular fa-square  icon me-2"){
  Icon.className ="fa-solid fa-square-check icon me-2 green"
}else if(Icon.className ="fa-solid fa-square-check icon me-2 green"){
  Icon.className="fa-regular fa-square  icon me-2"
}
})
let p = document.querySelector('.p');
let Inp =document.querySelector('.Input');
let six =document.querySelector('.whites');
let Inp1=document.querySelector('.Input1')

p.addEventListener('click', function(){
Inp.style.border="1px solid  rgb(18, 197, 18)"
})
p.addEventListener('blur', function(){
  Inp.style.border="none"
})

six.addEventListener('click', function(){
      Inp1.classList.add('add')
});
six.addEventListener('blur', function(){
  Inp1.classList.remove('add')
})
let Err=document.querySelector('.Error')
let Numbers =/[0-9]/g;
let Sign =document.querySelector('.button1');
let Input2 = document.querySelector('.p1')
let Erro1=document.querySelector('.Error1')
Sign.addEventListener('click',function(){
 if(p.value.length == 0){
    Err.innerHTML="Input Cannot be empty"
 }else if(p.value.length == 11){
    Err.innerHTML=`<i class="fa-solid fa-check Ic "></i>`
    button1.classList.add('button12')
 }
 else if(!p.value.match(/^[0-9]+$/)){
    Err.innerHTML="Input Should Contain only numbers"
 }else if(p.value.length < 11){
    Err.innerHTML="Input Should be 11!!"
 }

 if(Input2.value.length == 0){
    Erro1.innerHTML="Password can't be empty!!"
    }else if(Input2.value.length > 6){
        Erro1.innerHTML="Password cannot be greater than 6!!" 
    }else if(Input2.value.length < 6){
        Erro1.innerHTML ="Password cannot be less than 6"
    }else if(Input2.value.length == 6){
    Erro1.innerHTML=`<i class="fa-solid fa-check Ic "></i>`
    button1.classList.add('.button123')
}
})

let button1 = document.querySelector('.button1')


// if(!p.match(Numbers)){
//     Err.innerHTML="field should contain only numbers"
// }
// if(p.value !==11){
//     document.querySelector('.Error').innerHTML ="Number is greater Than 11"
// }