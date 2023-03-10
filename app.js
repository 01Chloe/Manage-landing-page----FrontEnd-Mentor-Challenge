// Navigation
const nav = document.querySelector('nav');
const menubtn = document.querySelector('.menu');
const lines = document.querySelector('.line');

menubtn.addEventListener('click', handleNavigation);

function handleNavigation() {
     lines.classList.toggle('active');
     nav.classList.toggle('active');
}

// Testimonials Slider
const circlesBtn = document.querySelectorAll('.circle');
const slides = document.querySelectorAll('.slide');
let indexSlide = 0;

circlesBtn.forEach(btn => {
     btn.addEventListener('click', () => {
          indexSlide = btn.getAttribute('data-slideNb');

          for(i = 0; i < slides.length; i++) {
               if(slides[i].getAttribute('data-slideNb') == indexSlide) {
                    slides[i].classList.add('active');
               } else {
                    slides[i].classList.remove('active');
               }
          }
     })
})

circlesBtn.forEach(circle => {
     circle.addEventListener('click', function() {
          for(i = 0; i < circlesBtn.length; i++) {
               circlesBtn[i].classList.remove('active');
          }
          this.classList.add('active');
     })
})


// Check Mail
const mailInput = document.querySelector('input');
const msgErrorEmail = document.querySelector('small');
const sendBtn = document.querySelector('.go-btn');
let emailChecker = false;

mailInput.addEventListener('input', checkEmail);
function checkEmail() {
     let regExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
     if(regExpEmail.test(mailInput.value)) {
          msgErrorEmail.textContent = "";
          emailChecker = true;
     } else {
          msgErrorEmail.textContent = "Please, enter a correct email";
          emailChecker = false;
     }
}

sendBtn.addEventListener('click', resetInput);
function resetInput() {
     if(emailChecker) {
          mailInput.value = "";
     } else {
          return;
     }
}