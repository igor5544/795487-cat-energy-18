let headerToggle = document.querySelector('.header__toggle'),
    mainNav = document.querySelector('.main-nav');

headerToggle.classList.remove('header__toggle--nojs');
mainNav.classList.remove('main-nav--nojs');

headerToggle.addEventListener('click', function () {
    this.classList.toggle('header__toggle--closed');
    mainNav.classList.toggle('main-nav--closed');
});
