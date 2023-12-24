let Eye = document.querySelector('.Eye')
let Naira = document.querySelector('.Naira')
let Cash1= document.querySelector('.Cash1')
let int= document.querySelector('.int')
let w = document.querySelector('.Ow')
let Wal = document.querySelector('.Wal')
let Aza = document.querySelector('.Aza')
let Aza1 = document.querySelector('.Aza1')
let Star= document.querySelector('.Star')
let As= document.querySelector('.As')
Eye.addEventListener('click', function(){
 if(Eye.className=="fa-regular fa-eye-slash ms-1 Eye mt-1"){
Naira.style.display="block"
Cash1.style.display="block"
int.style.display="block"
Aza1.style.display="none"
Aza.style.display="none"
Wal.style.display="block"
w.style.display="block"
As.style.display="none"
Star.style.display="none"

   Eye.className ="fa-regular fa-eye slas ms-1 mt-1"
 }else if(Eye.className="fa-regular fa-eye slas ms-1 mt-1"){
   Naira.style.display="none"
Cash1.style.display="none"
int.style.display="none"
As.style.display="block"
Star.style.display="block"
Aza1.style.display="block"
Aza.style.display="block"
Wal.style.display="none"
w.style.display="none"
   Eye.className="fa-regular fa-eye-slash ms-1 Eye mt-1"
 }
})
