let click =document.querySelector('.Square')
click.addEventListener('click', function(){
  if(click.className =="fa-regular fa-square Square"){
    click.className="fa-solid fa-square-check Square" 
  }else if( click.className="fa-solid fa-square-check Square" ){
    click.className ="fa-regular fa-square Square"
  }
})
let Options= document.querySelector('.Options')
let Hidden= document.querySelector('.Hidden')
let Line1= document.querySelector('.Line1')
let Line= document.querySelector('.Line')
let Virtual = document.querySelector('.Virtual')
let Physical = document.querySelector('.Physical')
let Image1= document.querySelector('.Image')

Physical.addEventListener('click', function(){
Image1.src="/Verve Card.PNG"
Line.style.display="none";
Line1.style.display="block"
Virtual.classList.add('Normal')
Physical.classList.add('Abnorm')
Hidden.style.display="block";
Options.style.display="none"
})
Virtual.addEventListener('click', function(){
    Image1.src="/Virtual Card.PNG"
    Line.style.display="block";
Line1.style.display="none"
Virtual.classList.add('Abnorm')
Physical.classList.add('Normal')
Hidden.style.display="none";
Options.style.display="block"
})