const hamburger = document.querySelector('.hamburger');
const nav_mobile = document.querySelector('.nav-mobile-container');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    nav_mobile.classList.toggle('is-active');
});

const text = document.getElementsByClassName("slogan");
for (let i = 0; i < text.length; i++) {
    text[i].addEventListener('animationend', function(e) {
    text[i].classList.remove('animated');
  });

    text[i].addEventListener('mouseover', function(e) {
    text[i].classList.add('animated')
 })
}
