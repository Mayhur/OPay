let Local =localStorage.getItem('FirstName')
let Name = document.querySelector('.Name').innerHTML=`Hi,${Local. toUpperCase()}`
let Input = document.querySelector('.Input')
let slash= document.querySelector('.slash')
slash.addEventListener('click', function(){
   if( slash.className=="fa-regular fa-eye-slash slash"){
    slash.className ="fa-regular fa-eye slash"
    Input.type="text"
    Input.value=`${Currency + Acb}`
   }else if(slash.className ="fa-regular fa-eye slash"){
    slash.className="fa-regular fa-eye-slash slash"
    Input.type="password"
    Input.value=6000
   } 
})
let Currency='₦'
let Acb= ' '+606 +','+ 222.23
// fa-regular fa-eye slash
let Images= document.querySelector('.image')
// if(Local=="Nifemi"){
// Images.src="/IMG_4631.JPG"
// }else if(Local="Mayowa"){
//     Images.src="/IMG_4629.JPG"
// }
let Photo1 = document.querySelector('.Photo1')
let Photo = document.querySelector('.Photo').value
let Slice =Photo.slice(11,28)
Images.src = Slice
// let Picture = document.querySelector('.Picture')
// Picture.addEventListener('click', function(){
//     alert(`<input type="file" name="Add" id=""class="Photo Photo1">`)
// })

