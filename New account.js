let Icon =document.querySelector('.icon');
Icon.addEventListener('click', function(){
if(Icon.className=="fa-regular fa-square  icon me-2"){
  Icon.className ="fa-solid fa-square-check icon me-2 green"
}else if(Icon.className ="fa-solid fa-square-check icon me-2 green"){
  Icon.className="fa-regular fa-square  icon me-2"
}})
let input = document.querySelector('.p');
let Confirm = document.querySelector('.Next')
input.addEventListener('keydown',function(){
    if(input.value.length ==9){
        Confirm.classList.add('Opa')
        }
})
let Link =document.querySelector('.Link')
Confirm.addEventListener('click', function(){
    if(Confirm.classList.contains('Opa')){
        Confirm.href="/After Confirm.html"
    }else if(Confirm.classList.contains('Next')){
        Confirm.href=""
    }
  
})
let Input = document.querySelector('.p')
input.addEventListener('blur', function(){
  Input.push(localStorage.setItem('Number',Input.value))
  
})
