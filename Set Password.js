let Eye = document.querySelector('.slash');
let Input = document.querySelector('.input')
let Input2 = document.querySelector('.input2')
let Input3 = document.querySelector('.input3')
let Input4 = document.querySelector('.input4')
let Input5 = document.querySelector('.input5')
let Input6 = document.querySelector('.input6')
let Input7 = document.querySelector('.input7')
let Input8 = document.querySelector('.input8')
let Input9 = document.querySelector('.input9')
let Input10 = document.querySelector('.input10')
let Input11 = document.querySelector('.input11')
let Input12 = document.querySelector('.input12')
let Set1 = document.querySelector('.set')

Eye.addEventListener('click', function(){
    if(Eye.className=="fa-regular fa-eye-slash slash"){
        Eye.className="fa-regular fa-eye slash"
    }else if( Eye.className="fa-regular fa-eye slash"){
        Eye.className="fa-regular fa-eye-slash slash"
    }
if(Eye.className =="fa-regular fa-eye slash"){
    Input.type="text"
    Input2.type="text"
    Input3.type="text"
    Input4.type="text"
    Input5.type="text"
    Input6.type="text"
    Input7.type="text"
    Input8.type="text"
    Input9.type="text"
    Input10.type="text"
    Input11.type="text"
    Input12.type="text"
    
}else if(Eye.className ="fa-regular fa-eye-slash slash" ){
    Input.type="password"
    Input2.type="password"
    Input3.type="password"
    Input4.type="password"
    Input5.type="password"
    Input6.type="password"
    Input7.type="password"
    Input8.type="password"
    Input9.type="password"
    Input10.type="password"
    Input11.type="password"
    Input12.type="password"
}

})
let Re1 =document.querySelector('.Re1')
let Re2 =document.querySelector('.Re2')
let Re3 =document.querySelector('.Re3')
let Re4 =document.querySelector('.Re4')
let Re5 =document.querySelector('.Re5')
let Re6 =document.querySelector('.Re6')
let Button = document.querySelector('.B')
Input12.addEventListener('blur', function(){
    if(Input.value ==Re1.value &&
 Input2.value == Re2.value &&
 Input3.value == Re3.value &&
Input4.value == Re4.value &&
Input5.value == Re5.value &&
Input6.value == Re6.value
        ){Button.classList.remove('B')
Button.classList.add('add')
        
        }
    })
    Input12.addEventListener('blur', function(){
        if(Input.value !== Re1.value &&
            Input2.value !== Re2.value &&
            Input3.value !== Re3.value &&
           Input4.value !== Re4.value &&
           Input5.value !== Re5.value &&
           Input6.value !== Re6.value){
          
            Button.classList.add('B')
            
        }
        let Local1 = localStorage.setItem('Input2',INPUT2)
    })
       

let Done = document.querySelector('.Done')
Button.addEventListener('click', function(){
    if(Button.classList.contains('add')){
        Done.href="/Personal Info.html"
    }else if (Button.classList.contains('B')){
        Done.href=""
    }
}

)

let First= document.querySelector('.input')
Input.addEventListener('blur', function(){
 localStorage.setItem('FirstInput',First.value)
})


let Second= document.querySelector('.input2')
Input2.addEventListener('blur', function(){
 localStorage.setItem('SecondInput',Second.value)
})


let Third= document.querySelector('.input3')
Input3.addEventListener('blur', function(){
 localStorage.setItem('ThirdInput',Third.value)
})


let Fourth= document.querySelector('.input4')
Input4.addEventListener('blur', function(){
 localStorage.setItem('FourthInput',Fourth.value)
})


let Fifth= document.querySelector('.input5')
Input5.addEventListener('blur', function(){
 localStorage.setItem('FifthInput',Fifth.value)
})


let Sixth= document.querySelector('.input6')
Input6.addEventListener('blur', function(){
 localStorage.setItem('SixthInput',Sixth.value)
})
