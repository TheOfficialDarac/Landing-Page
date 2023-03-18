let toggleButton = document.querySelectorAll('.toggle-button')[0];
let navbarLinks = document.querySelector('.navbar-links');
toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('rotate90');
    // toggleButton.style.transform = 'rotate('+90+'deg)';
    navbarLinks.classList.toggle('active');
})