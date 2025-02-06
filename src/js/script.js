//navbar fixed
window.addEventListener('scroll', function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("navbar-fixed", window.scrollY);
})


//hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
const profil = document.querySelector('#profil');
const profilMenu = document.querySelector('#profil-menu');
const potensi = document.querySelector('#potensi');
const potensiMenu = document.querySelector('#potensi-menu');
const slide = document.querySelectorAll('#slide');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
    profilMenu.classList.add('hidden');
    potensiMenu.classList.add('hidden');
 

});

profil.addEventListener('click', function () {
    profilMenu.classList.toggle('hidden');
    potensiMenu.classList.add('hidden');

});

potensi.addEventListener('click', function () {
    potensiMenu.classList.toggle('hidden');
    profilMenu.classList.add('hidden');
});