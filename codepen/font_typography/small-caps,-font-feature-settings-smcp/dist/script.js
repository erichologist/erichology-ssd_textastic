var btn = document.querySelector("button"),
    body = document.documentElement,
    activeClass = "smcp";

btn.addEventListener("click", function(e){
  e.preventDefault();
  body.classList.toggle(activeClass);
  btn.classList.toggle('on');
});