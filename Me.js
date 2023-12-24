let Local =localStorage.getItem('FirstName')
let Name = document.querySelector('.Local').innerHTML=`Hi,${Local.toUpperCase()}`;
let Asteric = document.querySelector('.Asteric')
let Money = document.querySelector('.Moneyy')
let Slash = document.querySelector('.Slash')
let CashBack = document.querySelector('.CashBack')
let K1 = document.querySelector('.K1')
Slash.addEventListener('click', function(){
    if(Slash.className=="fa-regular fa-eye-slash Slash"){
        Asteric.style.display="none"
        Money.style.display="block"
        Slash.className="fa-regular fa-eye Slash"
        CashBack.style.display="none";
        K1.style.display="block"
    } else if( Slash.className="fa-regular fa-eye Slash"){
        Asteric.style.display="block"
        Money.style.display="none"
        Slash.className="fa-regular fa-eye-slash Slash"
        CashBack.style.display="block";
        K1.style.display="none"
    }
})