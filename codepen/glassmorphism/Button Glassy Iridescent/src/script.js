
const btn = document.querySelector('.iridescent');
setTimeout(() => {
  btn.classList.add('shine');
}, 800);
setTimeout(() => {
  btn.classList.remove('shine');
}, 3000);