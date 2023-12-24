let Male = document.querySelector('.Male')
let Female = document.querySelector('.Female')
let Next = document.querySelector('.Next')
let Ic = document.querySelector('.ic')
Male.addEventListener('click', function(){
    Male.classList.add('Gen')
    Ic.style.color="white"
  Female.addEventListener('click', function(){
    Male.classList.remove('Gen')
    Female.classList.add('Gen')
    Ic.style.color="black"
  })
  Next.classList.remove('Next')
  Next.classList.add('NextB')
    
})
Female.addEventListener('click', function(){
    Female.classList.add('Gen')
    Male.addEventListener('click', function(){
        Male.classList.add('Gen')
        Female.classList.remove('Gen')
    })
    Next.classList.remove('Next')
    Next.classList.add('NextB')
})
Next.addEventListener('click',function(){
    if(Next.classList.contains('Next')){
        Next.href=""
    }else if(Next.classList.contains('NextB')){
Next.href="/Yes Or No.html"
    }
})


let F_input=document.querySelector('.F_input')
F_input.addEventListener('blur',function(){
    localStorage.setItem('FirstName',F_input.value)
})
let M_input= document.querySelector('.M_input')
M_input.addEventListener('blur',function(){
    localStorage.setItem('MiddleName',M_input.value)
})

let Su_input= document.querySelector('.Su_input')
Su_input.addEventListener('blur',function(){
    localStorage.setItem('Surname',Su_input.value)
})

let D_input= document.querySelector('.D_input')
D_input.addEventListener('blur',function(){
    localStorage.setItem('DOB',D_input.value)
})
let MaleB =document.querySelector('.Male')
MaleB.addEventListener('click', function(){
    localStorage.setItem('Gender',MaleB.innerHTML)
})
let FemaleB = document.querySelector('.Female')
FemaleB.addEventListener('click', function(){
    localStorage.setItem('Gender',FemaleB.innerText)
})
   