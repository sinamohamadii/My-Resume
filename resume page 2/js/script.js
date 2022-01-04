var nipple = ""
function boobies() {

};


window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let li = document.querySelector('.nav-link');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
});
