var navHeader = document.querySelector('.page-header__navigation');
var navToggle = document.querySelector('.page-header__toggle');

navToggle.addEventListener('click', function() {
  if (navHeader.classList.contains('page-header__navigation--closed')) {
    navHeader.classList.remove('page-header__navigation--closed');
    navHeader.classList.add('page-header__navigation--opened');
  } else {
    navHeader.classList.add('page-header__navigation--closed');
    navHeader.classList.remove('page-header__navigation--opened');
  }
});