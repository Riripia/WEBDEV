document.addEventListener('DOMContentLoaded', () => {
  const modal     = document.getElementById('authModal');
  const trigger   = document.getElementById('authTrigger');
  const closeBtn  = document.getElementById('closeAuth');
  const tabSignIn = document.getElementById('tabSignIn');
  const tabSignUp = document.getElementById('tabSignUp');
  const formSI    = document.getElementById('formSignIn');
  const formSU    = document.getElementById('formSignUp');

  function openModal(isSignUp = false) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    isSignUp ? switchToSignUp() : switchToSignIn();
  }
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  function switchToSignIn() {
    tabSignIn.classList.add('active');
    tabSignUp.classList.remove('active');
    formSI.classList.add('active');
    formSU.classList.remove('active');
  }
  function switchToSignUp() {
    tabSignUp.classList.add('active');
    tabSignIn.classList.remove('active');
    formSU.classList.add('active');
    formSI.classList.remove('active');
  }

  trigger.addEventListener('click', e => {
    e.preventDefault(); // avoid page jump
    openModal(false);
  });

  tabSignIn.addEventListener('click', switchToSignIn);
  tabSignUp.addEventListener('click', switchToSignUp);
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal(); // click outside
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
});

let slides = Array.from(document.querySelectorAll('.slide'));
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.classList.toggle('active', i === index);
  });
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
console.log(trigger, modal, closeBtn);
/*SERVICES*/

