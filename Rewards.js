let Naira ='₦'
let Cash=113
let Kobo =77
let CashBack = document.querySelector('.Cash').innerHTML=`${Cash} `
let Na= document.querySelector('.Naira').innerHTML=`${Naira} `
let ko= document.querySelector('.kobo').innerHTML=`${'.'+Kobo} `
let Rewards = document.querySelector('.Gem')
Rewards.addEventListener('click', function(){
  location.href="/Rewards.html"
})