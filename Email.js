let Email_input= document.querySelector('.Email')
Email_input.addEventListener('blur',function(){
localStorage.setItem('Email', Email_input.value)
})